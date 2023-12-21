import mockData from "../static/mock-recipient-results.json";

export const getCardDataList = async (cardIndex, limit) => {
  // 비동기 작업을 시뮬레이션하기 위해 setTimeout을 사용
  return new Promise((resolve) => {
    setTimeout(() => {
      const endIndex = cardIndex + limit;
      const hasMore = endIndex < mockData.results.length;
      const newCardData = mockData.results.slice(cardIndex, endIndex);
      resolve({ newCardData, hasMore });
    }, 1000); // 3초 대기
  });
};

