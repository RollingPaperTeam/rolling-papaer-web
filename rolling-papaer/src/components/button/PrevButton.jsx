import mediaQuery from "../../theme/mediaQuery";
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
  top: 50%;
  left: -2%;
  ${mediaQuery.tablet} {
    display: none;
  }
`;
export default PrevButton;
