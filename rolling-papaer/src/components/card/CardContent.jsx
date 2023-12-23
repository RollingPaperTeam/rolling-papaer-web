import styled from "styled-components";
import { THEME_LIGHT_COLOR } from "../../theme/color";
import FONTS from "../../theme/font";
import { useCardContextValue } from "./CardProvider";

const CardContentBlock = styled.div`
  width: 336px;
  height: 106px;

  p {
    margin: 0;
    display: -webkit-box;

    color: ${THEME_LIGHT_COLOR.gray6};

    ${FONTS.FONT_18_REGULAR}
    font-family: ${({$font}) => $font};
    word-wrap: break-word;
    word-break: keep-all;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }
`;

function CardContent() {
  const { content, font } = useCardContextValue();

  return (
    <CardContentBlock $font = {font}>
      <p>{content}</p>
    </CardContentBlock>
  );
}

export default CardContent;
