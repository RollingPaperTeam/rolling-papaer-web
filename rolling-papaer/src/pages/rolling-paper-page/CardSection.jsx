import styled from "styled-components";
import FONTS from "../../theme/font";
import CardList from "../../components/card/CardList";
import { useEffect, useState } from "react";
import getRecipients from "../../api/api";
import TRANSLATE_VALUE from "../../components/card/translateValue";
import NextButton from "../../components/button/NextButton";
import PrevButton from "../../components/button/PrevButton";
import mediaQuery from "../../theme/mediaQuery";

const Section = styled.section`
  width: 116rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${mediaQuery.tablet} {
    width: calc(100% - 4.8rem);
  }
`;
const Title = styled.h2`
  ${FONTS.FONT_24_BOLD}
  margin: 0;
  margin-bottom: 1.6rem;
`;
const CardSection = styled(BaseSection)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  ${mediaQuery.tablet} {
    width: 100%;
    align-self: flex-start;
  }
`;

const CardField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  ${mediaQuery.tablet} {
    width: 100%;
    align-self: flex-start;
  }
`;
const CardListField = styled.div`
  max-width: 116rem;
  overflow: hidden;
  ${mediaQuery.tablet} {
    max-width: 120rem;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  transform: translate(
    ${({ $cardIndex }) => `${$cardIndex * TRANSLATE_VALUE}rem`}
  );
  transition: transform 0.3s ease 0s;
`;
function BaseSection({ children, limit, like, className }) {
  const [cardData, setCardData] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [dataLength, setDataLength] = useState(0);

  const dataLoad = async (limit, like) => {
    try {
      const { results } = await getRecipients(limit, like);
      setCardData(results);
      setDataLength(results.length);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    dataLoad(limit, like);
  }, [limit, like]);
  const handlePlusClick = () => {
    setCardIndex(cardIndex + 1);
  };
  const handleMinusClick = () => {
    setCardIndex(cardIndex - 1);
  };
  const handleMinusDoubleClick = () => {
    setCardIndex(0);
  };
  const handlePlusDoubleClick = () => {
    setCardIndex(dataLength - 4);
  };

  return (
    <Section>
      <div className={className}>
        <Title>{children}</Title>
        <CardField>
          <CardListField>
            <CardContainer $cardIndex={cardIndex}>
              {cardData && <CardList cardData={cardData} />}
            </CardContainer>
          </CardListField>
        </CardField>
        {cardIndex > 0 && (
          <PrevButton
            onClick={handleMinusClick}
            onDoubleClick={handleMinusDoubleClick}
          />
        )}
        {dataLength - cardIndex > 4 && (
          <NextButton
            onClick={handlePlusClick}
            onDoubleClick={handlePlusDoubleClick}
          />
        )}
      </div>
    </Section>
  );
}

export default CardSection;
