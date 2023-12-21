import mediaQuery from "../../theme/mediaQuery";
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
  top: 50%;
  right: -2%;
  z-index: 1;
  ${mediaQuery.tablet} {
    display: none;
  }
`;

export default NextButton;
