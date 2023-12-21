import { Link } from "react-router-dom";
import ButtonStyle from "./ButtonStyle";
import styled from "styled-components";
import mediaQuery from "../../theme/mediaQuery";
import FONTS from "../../theme/font";

const ButtonField = styled.div`
  display: flex;
  padding: ${({ to }) => (to === "/list" ? "4.8rem" : "6.8rem")} 0;
  align-items: center;
  justify-content: center;

  ${mediaQuery.tablet} {
    display: block;
    width: calc(100% - 4.8rem);
    margin: 4.8rem auto;
    padding: 2.4rem 0;
  }
  ${mediaQuery.mobile} {
    margin-top: 8.8rem;
    width: calc(100% - 4rem);
    padding: 2.4rem 2rem;
  }
`;

function BaseButton({ className, children, to }) {
  return (
    <>
      <ButtonField to={to}>
        <Link to={to}>
          <ButtonStyle
            className={className}
            $primary="primary"
            size="large"
            fontSize="fontSize18"
          >
            {children}
          </ButtonStyle>
        </Link>
      </ButtonField>
    </>
  );
}

const LinkButton = styled(BaseButton)`
  width: 100%;
  ${mediaQuery.mobile} {
    ${FONTS.FONT_14_BOLD}
  }
`;

export default LinkButton;
