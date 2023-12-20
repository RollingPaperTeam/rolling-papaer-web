import styled from "styled-components";
import { THEME_LIGHT_COLOR } from "../../theme/color";
import currentColor from "../../static/current_color.svg";
import person from "../../static/person.svg";
import { useState } from "react";

const Container = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1.6rem;

    li {
      overflow: hidden;
      position: relative;
      width: 16.8rem;
      height: 16.8rem;
      border-radius: 1.6rem;
      text-indent: 100%;
      white-space: nowrap;
      border: 1px solid #00000014;
      cursor: pointer;
    }
  }

  span.active {
    overflow: hidden;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 4.4rem;
    height: 4.4rem;
    text-indent: 100%;
    white-space: nowrap;
    cursor: pointer;
    background: url(${currentColor}) no-repeat;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;
  border-radius: 10rem;
  background-color: ${THEME_LIGHT_COLOR.gray3};
  cursor: pointer;

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 3.2rem;
    height: 3.2rem;
  }
`;

const COLOR_LIST = [
  {
    id: "orange",
    color: `var(--orange2)`,
  },
  {
    id: "purple",
    color: `var(--purple2)`,
  },
  {
    id: "blue",
    color: `var(--blue2)`,
  },
  {
    id: "green",
    color: `var(--green2)`,
  },
];

function ColorBox({ handleClick, currentColor }) {
  const list = COLOR_LIST.map((item) => (
    <li
      key={item.id}
      onClick={() => handleClick(item.color)}
      style={{ backgroundColor: item.color }}
    >
      {item.color}
      <span className={currentColor === item.color ? "active" : ""}>
        현재 선택된 색상 버튼
      </span>
    </li>
  ));
  return list;
}

function Option() {
  const [currentColor, setCurrentColor] = useState("var(--orange2)");
  const handleClick = (item) => setCurrentColor(item);

  return (
    <>
      <Container>
        <ul>
          <ColorBox handleClick={handleClick} currentColor={currentColor} />
        </ul>
      </Container>

      <p style={{ fontSize: "2rem" }}>프로필 이미지</p>
      <ImgContainer>
        <img src={person} alt="프로필 이미지" />
      </ImgContainer>
    </>
  );
}

export default Option;
