import styled from "styled-components";
import FONTS from "../../theme/font";
import CardList from "../../components/card/CardList";

const Title = styled.h2`
  ${FONTS.FONT_24_BOLD}
  margin: 0;
  margin-bottom: 1rem;
`;
const CardContainer = styled.div`
  width: 120rem;
  height: 16.25rem;
  margin: 0 auto 3.12rem;
  display: flex;
  gap: 1.25rem;
`;
function CardSection({ children }) {
  return (
    <section>
      <Title>{children}</Title>
      <CardContainer>
        <CardList />
      </CardContainer>
    </section>
  );
}

export default CardSection;
