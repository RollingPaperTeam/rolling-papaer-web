import { ButtonControl, ButtonNextIcon } from "./Button";
import styled from "styled-components";
function NextBaseButton({ onClick, className }) {
  return (
    <ButtonControl type="button" onClick={onClick} className={className}>
      <ButtonNextIcon />
    </ButtonControl>
  );
}

const NextButton = styled(NextBaseButton)`
  position: absolute;
  top: 19rem;
  right: 8.4rem;
  z-index: 1;
`;

export default NextButton;
