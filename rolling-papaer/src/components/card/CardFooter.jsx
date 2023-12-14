import styled from "styled-components";
import FONTS from "../../theme/font";
import { THEME_LIGHT_COLOR } from "../../theme/color";
import { useCardContextValue } from "./CardProvider";
import { createdAtToDate } from "../../utils/timeformatUtil";

const CardFooterBlock = styled.p`
  color: ${THEME_LIGHT_COLOR.gray4};
  ${FONTS.FONT_12_REGULAR}
`;

function CardFooter() {
  const {createdAt} = useCardContextValue();
  const date = createdAtToDate(createdAt);
  return <CardFooterBlock>{date}</CardFooterBlock>;
}

export default CardFooter;
