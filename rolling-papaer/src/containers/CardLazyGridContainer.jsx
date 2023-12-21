import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Card from "../components/card/Card";
import { getCardDataList } from "../api/apis";
import loadingImg from "../static/loading.svg";
import useAsync from "../hooks/NetworkHook";
import { NavLink, useNavigate } from "react-router-dom";

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
  const nav = useNavigate();
  const [cardDataList, setCardDataList] = useState([]);
  const [nextCardIndex, setNextCardIndex] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const limit = maxCardsPerLine * 6;
  const loadingBlock = useRef();
  //TODO: Error 관리
  const [isLoading, isError, wrappedFunction] = useAsync(getCardDataList);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCardDataForModal, setSelectedCardDataForModal] = useState(null);

  const getCards = useCallback(
    async (nextCardIndex, limit) => {
      if (!hasNext) return;
      const firstLimit = nextCardIndex === 0 ? limit - 1 : null;
      const result = await wrappedFunction(nextCardIndex, firstLimit ?? limit);
      if (!result) return;
      const { newCardData, hasMore } = result;
      if (hasMore) {
        setNextCardIndex(nextCardIndex + limit);
      } else {
        setHasNext(false);
      }
      setCardDataList((prevData) => [...prevData, ...newCardData]);
    },
    [hasNext, wrappedFunction]
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
    const observer = new IntersectionObserver(handleInfiniteLoadingObserver, {
      threshold: 1,
    });

    if (loadingBlock.current) {
      observer.observe(loadingBlock.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [handleInfiniteLoadingObserver]);

  const handleNullDataCardOnClick = () => {
    nav("message");
  };

  const handleDataCardOnClick = () => {
    //TODO: 모달 실행
    setIsModalVisible(true);
  };

  //TODO: Card에 onClick 이벤트 넣어야 함
  return (
    <CardLazyGridContainerBlock>
      <CardLazyGridBlock $columnNum={maxCardsPerLine}>
      </CardLazyGridBlock>
      {isLoading && <LoadingAnimator src={loadingImg} alt={"Loading"} />}
      {hasNext && !isLoading && (
        <LoaderObserver ref={loadingBlock}></LoaderObserver>
          <Card onClick={handleNullDataCardOnClick} />
          {cardDataList.map((cardData) => {
            return (
              <Card
                key={cardData.id}
                cardData={cardData}
                onClick={handleDataCardOnClick}
                saveCardDataFunc={setSelectedCardDataForModal}
              />
            );
          })}
      {isModalVisible && (
        <Modal
          cardData={selectedCardDataForModal}
          setModalVisible={setIsModalVisible}
        />
      )}
    </CardLazyGridContainerBlock>
  );
}

export default CardLazyGridContainer;
