import { useEffect, useState } from "react";
import { CardContentImgContainer, RecentCount, RecentPerson } from "./CardList";
import RecentProfile from "./RecentProfile";
import styled from "styled-components";
import mediaQuery from "../../theme/mediaQuery";

const CountPersonContainer = styled.div`
  display: ${({ direction }) => (direction ? "flex" : "block")};

  ${mediaQuery.tablet} {
    display: none;
  }
`;

function CountPerson({ result, direction = false }) {
  return (
    <CountPersonContainer direction={direction}>
      <CardContentImgContainer>
        <RecentProfile result={result} />
        {result.messageCount - 3 > 0 && (
          <RecentCount>{`+${result.messageCount - 3}`}</RecentCount>
        )}
      </CardContentImgContainer>
      <RecentPerson color={result.backgroundImageURL}>
        {result.messageCount}명이 작성했어요!
      </RecentPerson>
    </CountPersonContainer>
  );
}

export default CountPerson;
