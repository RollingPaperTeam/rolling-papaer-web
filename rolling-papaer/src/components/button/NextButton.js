import styled from "styled-components";
import arrowRight from "../../static/arrow-right.svg";
import eclips from "../../static/eclips.svg";
function BaseButton({ onClick }) {
  return (
    <button onClick={onClick}>
      <img src={arrowRight} alt="오른쪽 화살표" />
    </button>
  );
}
const NextButton = styled(BaseButton)`
  width: 40px;
  height: 40px;
  background: url(${eclips}) no-repeat center / 1.6rem;

  button {
    fill: rgba(255, 255, 255, 0.9);
    stroke-width: 1px;
    stroke: #dadcdf;
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.08));
    backdrop-filter: blur(2px);
  }
`;

export default NextButton;
