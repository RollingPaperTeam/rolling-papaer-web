import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Card from "../components/card/Card";
import { getCardDataList } from "../api/apis";
import loadingImg from "../static/loading.svg";

const LoadingAnimator = styled.img`
  margin-top: 50px;
  width: 100px;

  animation: InfiniteRotate linear infinite 1s;

  @keyframes InfiniteRotate {
    from {
      transform: rotateZ(0);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
`;

const LoaderObserver = styled.div`
  height: 50px;
  width: 100%;
`;

const CardLazyGridContainerBlock = styled.section`
  width: 100%;
  margin: 112px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &::before {
    content: "";
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: var(--gray2); //TODO: data를 받아와서, 해당 색을
    z-index: -9999;
  }
`;

const CardLazyGridBlock = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: ${({ $columnNum }) => `repeat(${$columnNum},1fr)`};
  gap: 24px;
`;

function CardLazyGridContainer({ postId, maxCardsPerLine = 3 }) {
  const [cardDataList, setCardDataList] = useState([]);
  const [nextCardIndex, setNextCardIndex] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const limit = maxCardsPerLine * 3;
  const loadingBlock = useRef();

  useEffect(() => {
    console.log("isLoading 상태: ", isLoading);
  }, [isLoading]);

  const getCards = useCallback(
    async (currentIndex, currentLimit) => {
      if (isLoading || !hasNext) return;

      setIsLoading(true);
      try {
        const limit = currentIndex === 0 ? currentLimit - 1 : currentLimit;
        const { newCardData, hasMore } = await getCardDataList(
          currentIndex,
          limit
        );
        setCardDataList((prevDataList) => [...prevDataList, ...newCardData]);
        setHasNext(hasMore);
        setNextCardIndex(currentIndex + currentLimit);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, hasNext]
  );

  // 만약 내가 감지한 div가 보이면 getCard 하도록 함 (무한스크롤링)
  const handleInfiniteLoadingObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        getCards(nextCardIndex, limit);
      }
    },
    [getCards, nextCardIndex, limit]
  );

  useEffect(() => {
    //TODO: 실제 데이터 가져오기
    console.log("useEffect1");
    getCards(nextCardIndex, limit);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleInfiniteLoadingObserver, {
      threshold: 1,
    });

    if (loadingBlock.current) {
      console.log(loadingBlock.current);
      observer.observe(loadingBlock.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [handleInfiniteLoadingObserver]);

  //TODO: Card에 onClick 이벤트 넣어야 함
  return (
    <CardLazyGridContainerBlock>
      <CardLazyGridBlock $columnNum={maxCardsPerLine}>
        <Card />
        {cardDataList.map((cardData) => {
          return <Card key={cardData.id} cardData={cardData} />;
        })}
      </CardLazyGridBlock>
      {isLoading && <LoadingAnimator src={loadingImg} alt={"Loading"} />}
      {hasNext && !isLoading && (
        <LoaderObserver ref={loadingBlock}></LoaderObserver>
      )}
    </CardLazyGridContainerBlock>
  );
}

export default CardLazyGridContainer;
