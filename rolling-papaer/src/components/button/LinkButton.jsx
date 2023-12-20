import { Link } from "react-router-dom";
import ButtonStyle from "./ButtonStyle";
import styled from "styled-components";

const ButtonField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ to }) => (to === "/list" ? "4.8rem" : "6.8rem")} 0;
  flex-shrink: 0;
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
  width: 28rem;
`;

export default LinkButton;
