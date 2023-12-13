import styled from "styled-components";
import { THEME_LIGHT_COLOR } from "../../theme/color";
import { useEffect, useState } from "react";
import currentColor from "../../static/btn-current-color.png";
import profile from "../../static/profile.png";
import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
  body {
    background-color: ${({ bodyColor }) => (bodyColor && bodyColor)};
  }
`;

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
      cursor: pointer;

      &:first-child {
        background-color: ${THEME_LIGHT_COLOR.orange2};
      }

      &:nth-child(2) {
        background-color: ${THEME_LIGHT_COLOR.puple2};
      }

      &:nth-child(3) {
        background-color: ${THEME_LIGHT_COLOR.blue2};
      }

      &:last-child {
        background-color: ${THEME_LIGHT_COLOR.green2};
      }
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

const optionList = [
  {
    id: "orange",
    color: `${THEME_LIGHT_COLOR.orange2}`,
  },
  {
    id: "purple",
    color: `${THEME_LIGHT_COLOR.puple2}`,
  },
  {
    id: "blue",
    color: `${THEME_LIGHT_COLOR.blue2}`,
  },
  {
    id: "green",
    color: `${THEME_LIGHT_COLOR.green2}`,
  },
];

function ColorBox({ handleClick, currentColor }) {
  const list = optionList.map((item) => (
    <li key={item.id} onClick={() => handleClick(item.color)}>
      {item.color}
      <span className={currentColor === item.color ? "active" : ""}>
        현재 선택된 색상 버튼
      </span>
    </li>
  ));
  return list;
}

function Option() {
  const [currentColor, setCurrentColor] = useState(`${THEME_LIGHT_COLOR.orange2}`);
  const [bodyColor, setBodyColor] = useState(`${THEME_LIGHT_COLOR.orange2}`);
  const handleClick = (item) => {
    setCurrentColor(item);
    setBodyColor(item);
  };

  useEffect(() => {
    handleClick(`${THEME_LIGHT_COLOR.orange2}`);
  }, []);

  return (
    <>
      <Globalstyle bodyColor={bodyColor} />
      <Container>
        <ul>
          <ColorBox handleClick={handleClick} currentColor={currentColor} />
        </ul>
      </Container>
      <p style={{ fontSize: "2rem" }}>프로필 이미지</p>
      <ImgContainer>
        <img src={profile} alt="프로필 이미지" />
      </ImgContainer>
    </>
  );
}

export default Option;
