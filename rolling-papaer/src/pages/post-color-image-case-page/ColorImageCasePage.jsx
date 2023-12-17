import { useState } from "react";
import styled from "styled-components";
import { FONTS } from "../../theme/font";
// import { useContext } from "react";
// import currentColor from "../../static/current_color.svg";
// import person from "../../static/person.svg";
// import { ColorContext } from "./OptionContext";
import ButtonStyle from "../../components/button/ButtonStyle";

const ColorImageContainer = styled.section`
  margin: 5.7rem 0 0;
  padding: 0 60rem 33.6rem 60rem;

  @media screen and (max-width: 768px) {
    margin: 4.9rem 0 0;
    padding: 0 2.4rem 2.4rem 2.4rem;
  }

  @media screen and (max-width: 760px) {
    margin: 5rem 0 0;
    padding: 0 2rem 2.4rem 2rem;
  }
`;

const Recipient = styled.div`
  p {
    ${FONTS.FONT_24_BOLD}
    margin: 0 0 1.2rem 0;
  }
`;

const Container = styled.div`
  input {
    outline: none;
    display: block;
    width: 32rem;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
    border: 1px solid var(--gray3);
    color: var(--gray5);
    ${FONTS.FONT_16_REGULAR};

    @media screen and (max-width:768px){
      width: 100%;
    }

    &.error,
    &.error:hover,
    &.error:focus {
      border: 1px solid var(--error);
    }

    &:focus {
      color: var(--gray9);
      border: 2px solid var(--gray5);
    }

    &:active {
      color: var(--gray9);
      border: 2px solid var(--gray7);
    }

    &:hover {
      color: var(--gray5);
      border: 1px solid var(--gray5);
    }

    &:disabled {
      color: var(--gray9);
      border: 1px solid var(--gray3);
      background-color: var(--gray1);
    }
  }

  p {
    margin: 0.4rem 0 0;
    color: var(--error);
    ${FONTS.FONT_12_REGULAR};
  }
`;

const SelectBackground = styled.div`
  margin: 5rem 0 0;

  @media screen and (max-width: 768px) {
    margin: 5.4rem 0 0;
  }

  @media screen and (max-width: 360px) {
    margin: 4.8rem 0 0;
  }

  p {
    ${FONTS.FONT_24_BOLD}
    margin: 0 0 0.4rem 0;
  }

  span {
    display: block;
    margin: 0 0 2.4rem 0;
    ${FONTS.FONT_16_REGULAR}
    color: var(--gray5);
  }
`;

const ButtonToggle = styled.div`
  width: 24.4rem;
  margin: 2.4rem 0 4.5rem 0;
  border-radius: 0.6rem;
  text-align: center;
  ${FONTS.FONT_16_REGULAR};
  color: var(--gray9);
  background-color: var(--gray1);

  @media screen and (max-width: 768px) {
    margin: 2.4rem 0 4rem 0;
  }

  @media screen and (max-width: 360px) {
    margin: 2.4rem 0 2.8rem 0;
  }

  button {
    border: none;
    padding: 0;
    border-radius: 0.6rem;
    width: 12.2rem;
    height: 4rem;
    background-color: var(--gray1);
    line-height: 4rem;
    cursor: pointer;

    &.active {
      border: 2px solid var(--purple6);
      color: var(--purple7);
      ${FONTS.FONT_16_BOLD};
      background-color: var(--white);
    }
  }
`;

const ColorContainer = styled.div`
  margin: 0 0 3.4rem 0;

  @media screen and (max-width: 360px) {
    gap: 8.2rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1.6rem;

    @media screen and (max-width: 360px) {
      flex-wrap: wrap;
      gap: 1.2rem;
      justify-content: space-between;
    }

    li {
      overflow: hidden;
      position: relative;
      width: 16.8rem;
      height: 16.8rem;
      border-radius: 1.6rem;
      text-indent: 100%;
      white-space: nowrap;
      cursor: pointer;

      @media screen and (max-width: 360px) {
        width: calc(50% - 0.6rem);
        height: 15.4rem;
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
    background: url() no-repeat;
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

// function ColorBox({ handleClick, currentColor }) {
//   const list = COLOR_LIST.map((item) => (
//     <li
//       key={item.id}
//       onClick={() => handleClick(item.color)}
//       style={{ backgroundColor: item.color }}
//     >
//       {item.color}
//       <span className={currentColor === item.color ? "active" : ""}>
//         현재 선택된 색상 버튼
//       </span>
//     </li>
//   ));
//   return list;
// }

function ColorBox({ handleClick }) {
  const list = COLOR_LIST.map((item) => (
    <li
      key={item.id}
      onClick={() => handleClick(item.color)}
      style={{ backgroundColor: item.color }}
    >
      {item.color}
      <span>현재 선택된 색상 버튼</span>
    </li>
  ));
  return list;
}

function ColorImageCasePage() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [focusout, setFocusout] = useState("");
  const [toggle, setToggle] = useState(false);
  // const { currentColor, setNewColor } = useContext(ColorContext);
  const [values, setValues] = useState({
    text: "",
    placeholder: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFocusout = (e) => {
    setFocusout(e.target.value);

    if (e.target.value === "") {
      e.target.classList.add("error");
      setErrorMessage("값을 입력해 주세요.");
    } else {
      e.target.classList.remove("error");
      setErrorMessage("");
    }
  };

  const handleClickToggle = () => setToggle(!toggle);

  // const handleClick = (item) => setNewColor(item);

  return (
    <ColorImageContainer>
      <Recipient>
        <p>To.</p>
        <Container>
          <input
            type="text"
            value={values.text}
            placeholder="받는 사람 이름을 입력해 주세요"
            onChange={handleChange}
            name="text"
            onBlur={handleFocusout}
            focusout={focusout}
          />
          {errorMessage && <p>{errorMessage}</p>}
        </Container>
      </Recipient>
      <SelectBackground>
        <p>배경화면을 선택해 주세요.</p>
        <span>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</span>
        <ButtonToggle>
          <button
            type="button"
            onClick={handleClickToggle}
            className={toggle ? "" : "active"}
          >
            컬러
          </button>
          <button
            type="button"
            onClick={handleClickToggle}
            className={toggle ? "active" : ""}
          >
            이미지
          </button>
        </ButtonToggle>
        <ColorContainer>
          <ul>
            {/* <ColorBox handleClick={handleClick} currentColor={currentColor} /> */}
            <ColorBox />
          </ul>
        </ColorContainer>
      </SelectBackground>
      <ButtonStyle
        $primary="primary"
        size="large"
        fontSize="fontSize18"
        style={{ width: "100%" }}
      >
        생성하기
      </ButtonStyle>
    </ColorImageContainer>
  );
}
export default ColorImageCasePage;
