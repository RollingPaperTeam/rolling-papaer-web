import styled from "styled-components";
//TODO 이미지 파일 임포트 해오자
function BaseButton({ onClick }) {
  return (
    <button onClick={onClick}>
      <img alt="오른쪽 화살표" />
    </button>
  );
} //TODOsrc로 이미지 파일 임포트 해온 거 넣어주자!
const NextButton = styled(BaseButton)`
  width: 40px;
  height: 40px;
  background: url("") no-repeat center / 1.6rem; //TODO 백그라운드 넣어야함

  button {
    fill: rgba(255, 255, 255, 0.9);
    stroke-width: 1px;
    stroke: #dadcdf;
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.08));
    backdrop-filter: blur(2px);
  }
`;

export default NextButton;
