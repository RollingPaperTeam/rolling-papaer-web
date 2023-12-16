import styled from "styled-components";
import FONTS from "../../theme/font";
import CardList from "../../components/card/CardList";
import { useEffect, useState } from "react";
import { getRecipients } from "../../api/Routes";
import TRANSLATE_VALUE from "../../components/card/translateValue";
import NextButton from "../../components/button/NextButton";

const Section = styled.section`
  width: 116rem;
  margin: 5rem auto 1.6rem;
  overflow: hidden;
`;
const Title = styled.h2`
  ${FONTS.FONT_24_BOLD}
`;
const CardContainer = styled.div`
  margin: 0 auto;
  gap: 2rem;
  width: 116rem;
  height: 26rem;
  display: flex;
  transform: translate(
    ${({ $cardIndex }) => `${$cardIndex * TRANSLATE_VALUE}rem`}
  );
  transition: transform 0.3s ease 0s;
`;
function CardSection({ children, limit, like }) {
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
  return (
    <Section>
      <Title>{children}</Title>
      <CardContainer $cardIndex={cardIndex}>
        {cardData && <CardList cardData={cardData} />}
      </CardContainer>
      {cardIndex > 0 && <button onClick={handleMinusClick}>이전</button>}
      {dataLength - cardIndex > 4 && <NextButton onClick={handlePlusClick} />}
    </Section>
  );
}

export default CardSection;
