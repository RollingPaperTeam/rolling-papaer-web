import styled from "styled-components";
import FONTS from "../../theme/font";
import { THEME_LIGHT_COLOR } from "../../theme/color";

const CardFooterBlock = styled.p`
  color: ${THEME_LIGHT_COLOR.gray4};
  ${FONTS.FONT_12_REGULAR}
`;

function CardFooter({ date = "2023/07/08" }) {
  return <CardFooterBlock>{date}</CardFooterBlock>;
}

export default CardFooter;
