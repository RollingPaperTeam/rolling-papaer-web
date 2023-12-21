import { ButtonControl, ButtonNextIcon } from "./Button";
import styled from "styled-components";
function NextBaseButton({ onClick, onDoubleClick, className }) {
  return (
    <ButtonControl
      type="button"
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={className}
    >
      <ButtonNextIcon />
    </ButtonControl>
  );
}

const NextButton = styled(NextBaseButton)`
  position: absolute;
  top: 19rem;
  right: -2rem;
  z-index: 1;
`;

export default NextButton;
