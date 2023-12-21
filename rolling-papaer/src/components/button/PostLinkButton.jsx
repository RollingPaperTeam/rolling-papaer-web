import styled from "styled-components";
import ButtonStyle from "./ButtonStyle";
import { Link } from "react-router-dom";
import mediaQuery from "../../theme/mediaQuery";
import FONTS from "../../theme/font";

function BaseButton({ children, className, to }) {
  return (
    <>
      <Link to={to}>
        <ButtonStyle
          $outlined="outlined"
          fontSize="fontSize16"
          $borderRadius="borderRadius6"
          size="medium"
          $hover="outlined"
          $active="outlined"
          $focus="outlined"
          className={className}
        >
          {children}
        </ButtonStyle>
      </Link>
    </>
  );
}
const PostLinkButton = styled(BaseButton)`
  ${mediaQuery.mobile} {
    ${FONTS.FONT_14_BOLD}
  }
`;

export default PostLinkButton;
