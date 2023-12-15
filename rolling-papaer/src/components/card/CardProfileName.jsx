import styled from "styled-components";
import FONTS from "../../theme/font";
import { useCardContextValue } from "./CardProvider";

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

function CardProfileName() {
  const {sender} = useCardContextValue();
  return (
    <CardProfileNameBlock>
      From.
      <span>{sender}</span>
    </CardProfileNameBlock>
  );
}

export default CardProfileName;
