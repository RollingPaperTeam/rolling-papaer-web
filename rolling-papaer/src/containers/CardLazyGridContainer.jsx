import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Card from "../components/card/Card";
import { getRecipientMessages } from "../api/api";
import loadingImg from "../static/loading.svg";
import useAsync from "../hooks/NetworkHook";
import { useNavigate } from "react-router-dom";
import Modal from "../components/modal/Modal";
import mediaQuery from "../theme/mediaQuery";

const LoadingAnimator = styled.img`
  margin-top: 50px;
  width: 100px;
  opacity: 50%;

  animation: InfiniteRotate ease-in infinite 1s;

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
`;

const CardLazyGridBlock = styled.div`
  display: grid;
  max-width: fit-content;
  grid-template-columns: ${({ $columnNum }) => `repeat(${$columnNum},1fr)`};
  gap: 24px;
  width: calc(100% - 48px);
  ${mediaQuery.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  ${mediaQuery.mobile} {
    grid-template-columns: 1fr;
  }
`;

function CardLazyGridContainer({ recipientId, maxCardsPerLine = 3 }) {
  const nav = useNavigate();
  const [cardDataList, setCardDataList] = useState([]);
  const [nextCardIndex, setNextCardIndex] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const limit = maxCardsPerLine * 3;
  const loadingBlock = useRef();
  //TODO: Error 관리
  const [isLoading, isError, getRecipientMessagesWrapped] =
    useAsync(getRecipientMessages);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCardDataForModal, setSelectedCardDataForModal] =
    useState(null);

  const getCards = useCallback(
    async (limit) => {
      if (!recipientId) return;
      if (isLoading) return;

      try {
        const isFirstCall = cardDataList.length === 0;
        const adjustedLimit = isFirstCall ? limit - 1 : limit;

        const { next, results } = await getRecipientMessagesWrapped(
          recipientId,
          nextCardIndex,
          adjustedLimit
        );
        if (!next) {
          setHasNext(false);
        }
        if (results.length > 0) {
          setCardDataList((prevDataList) => [...prevDataList, ...results]);
          setNextCardIndex((prevIndex) => prevIndex + adjustedLimit);
        }
      } catch (e) {
        console.error(e);
      }
    },
    [
      isLoading,
      getRecipientMessagesWrapped,
      cardDataList.length,
      nextCardIndex,
      recipientId,
    ]
  );

  // 만약 내가 감지한 div가 보이면 getCard 하도록 함 (무한스크롤링)
  const handleInfiniteLoadingObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        getCards(limit);
      }
    },
    [getCards, limit]
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
    <>
      <CardLazyGridContainerBlock>
        <CardLazyGridBlock $columnNum={maxCardsPerLine}>
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
        </CardLazyGridBlock>
        {isLoading && <LoadingAnimator src={loadingImg} alt={"Loading"} />}
        {hasNext && !isLoading && (
          <LoaderObserver ref={loadingBlock}></LoaderObserver>
        )}
      </CardLazyGridContainerBlock>
      {isModalVisible && (
        <Modal
          cardData={selectedCardDataForModal}
          setModalVisible={setIsModalVisible}
        />
      )}
    </>
  );
}

export default CardLazyGridContainer;
