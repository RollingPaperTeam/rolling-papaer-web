import { ButtonControl, ButtonPrevIcon } from "./Button";
import styled from "styled-components";

function PrevBaseButton({ onClick, className, onDoubleClick }) {
  return (
    <ButtonControl
      type="button"
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={className}
    >
      <ButtonPrevIcon />
    </ButtonControl>
  );
}

const PrevButton = styled(PrevBaseButton)`
  position: absolute;
  top: 19rem;
  left: -2rem;
`;
export default PrevButton;
