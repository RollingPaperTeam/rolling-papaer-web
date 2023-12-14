import styled from "styled-components";
import FONTS from "../../theme/font";

export const CardProfileNameBlock = styled.p`
  margin: 0;
  display: flex;
  gap: 6px;
  align-items: center;
  ${FONTS.FONT_20_REGULAR}

  span {
    ${FONTS.FONT_20_BOLD}
  }
`;

function CardProfileName({ name }) {
  return (
    <CardProfileNameBlock>
      From.
      <span>{name}</span>
    </CardProfileNameBlock>
  );
}

export default CardProfileName;
