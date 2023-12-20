import styled from "styled-components";
import { useRef, useState } from "react";
import { THEME_LIGHT_COLOR } from "../../theme/color";
import { FONTS } from "../../theme/font";
import open from "../../static/arrow_open.svg";

const InputContainer = styled.div`
  input {
    outline: none;
    display: block;
    width: 32rem;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
    border: 1px solid ${THEME_LIGHT_COLOR.gray3};
    color: ${THEME_LIGHT_COLOR.gray5};
    ${FONTS.FONT_16_REGULAR};

    &.error,
    &.error:hover,
    &.error:focus {
      border: 1px solid ${THEME_LIGHT_COLOR.error};
    }

    &:focus {
      color: ${THEME_LIGHT_COLOR.gray9};
      border: 2px solid ${THEME_LIGHT_COLOR.gray5};
    }

    &:active {
      color: ${THEME_LIGHT_COLOR.gray9};
      border: 2px solid ${THEME_LIGHT_COLOR.gray7};
    }

    &:hover {
      color: ${THEME_LIGHT_COLOR.gray5};
      border: 1px solid ${THEME_LIGHT_COLOR.gray5};
    }

    &:disabled {
      color: ${THEME_LIGHT_COLOR.gray9};
      border: 1px solid ${THEME_LIGHT_COLOR.gray3};
      background-color: ${THEME_LIGHT_COLOR.gray1};
    }
  }

  p {
    margin: 0.4rem 0 0;
    color: ${THEME_LIGHT_COLOR.error};
    ${FONTS.FONT_12_REGULAR};
  }
`;

const SelectBox = styled.div`
  max-width: 32rem;

  &.active ul {
    visibility: visible;
    height: 20rem;
  }

  &.active label {
    border: 1px solid ${THEME_LIGHT_COLOR.gray5};

    &::before {
      transform: translateY(-50%) rotate(-180deg);
    }
  }

  label {
    position: relative;
    display: block;
    width: 32rem;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
    border: 1px solid ${THEME_LIGHT_COLOR.gray3};
    color: ${THEME_LIGHT_COLOR.gray5};
    ${FONTS.FONT_16_REGULAR};
    cursor: pointer;
    background-color: ${({ disabled }) =>
      disabled ? `${THEME_LIGHT_COLOR.gray1}` : `${THEME_LIGHT_COLOR.white}`};

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      right: 1.7rem;
      transform: translateY(-50%) rotate(0);
      width: 1.6rem;
      height: 1.6rem;
      transition: transform 0.5s;
      background: url(${open}) no-repeat center;
      background-size: 100% 1.6rem;
    }

    &.error,
    &.error:hover {
      border: 1px solid ${THEME_LIGHT_COLOR.error};
    }

    &:hover {
      color: ${THEME_LIGHT_COLOR.gray5};
      border: 1px solid ${THEME_LIGHT_COLOR.gray3};
    }
  }

  p {
    margin: 0;
    color: ${THEME_LIGHT_COLOR.error};
    ${FONTS.FONT_12_REGULAR};
  }
  
  ul {
    overflow: hidden;
    visibility: hidden;
    list-style-type: none;
    margin: 0.8rem 0 0;
    padding: 0;
    width: 35rem;
    height: 0;
    border-radius: 0.8rem;
    border: 1px solid ${THEME_LIGHT_COLOR.gray3};
    transition: visibility 0.5s, height 0.5s;
    box-shadow: 0 2px 12px 0 #00000014;

    li {
      color: ${THEME_LIGHT_COLOR.gray9};
      padding: 1.2rem 1.6rem;
      ${FONTS.FONT_16_REGULAR};
      cursor: pointer;

      &:hover {
        background-color: ${THEME_LIGHT_COLOR.gray1};
      }

      &:first-child {
        border-radius: 0.8rem 0.8rem 0 0;
      }

      &:last-child {
        border-radius: 0 0 0.8rem 0.8rem;
      }
    }
  }
`;

function TextField() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [focusout, setFocusout] = useState("");
  const selectRef1 = useRef(null);
  const selectRef2 = useRef(null);
  const [optionValue1, setOptionValue1] = useState("");
  const [optionValue2, setOptionValue2] = useState("");
  const [values, setValues] = useState({
    text: "",
    placeholder: "",
    type: "",
  });

  const OPTION_LIST = [
    {
      id: "Text1",
      list: "TextTextText1list",
    },
    {
      id: "Text2",
      list: "TextTextText2list",
    },
    {
      id: "Text3",
      list: "TextTextText3list",
    },
    {
      id: "Text4",
      list: "TextTextText4list",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleClick = (e) => e.currentTarget.classList.toggle("active");

  const handleClickOption = (e) => {
    const currentRef = e.currentTarget.closest("div");
    if (currentRef.classList.contains("active")) {
      if(currentRef === selectRef1.current) setOptionValue1(e.target.textContent);
      if(currentRef === selectRef2.current) setOptionValue2(e.target.textContent);
    }
  };

  const handleFocusout = (e) => {
    setFocusout(e.target.value);

    if (e.target.value === "") {
      e.target.classList.add("error");
      setErrorMessage("Error Massage");
    } else {
      e.target.classList.remove("error");
      setErrorMessage("");
    }
  };

  function Options() {
    const list = OPTION_LIST.map((item) => (
      <li key={item.id} onClick={handleClickOption}>
        {item.list}
      </li>
    ));
    return list;
  }

  return (
    <>
      <p style={{ fontSize: "2rem" }}>Input</p>
      <InputContainer>
        <input
          type="text"
          value={values.text}
          placeholder="placeholder"
          onChange={handleChange}
          name="text"
          onBlur={handleFocusout}
          focusout={focusout}
        />
        {errorMessage && <p>{errorMessage}</p>}
      </InputContainer>
      <InputContainer>
        <input
          type="text"
          value=""
          placeholder="placeholder"
          onChange={handleChange}
          name="text"
          disabled
        />
      </InputContainer>
      <p style={{ fontSize: "2rem" }}>Dropdown</p>

      <SelectBox ref={selectRef1} onClick={handleClick}>
        <label>{optionValue1 || "placeholder"}</label>
        <ul>
          <Options onClick={handleClickOption} />
        </ul>
      </SelectBox>
      <SelectBox ref={selectRef2} onClick={handleClick}>
        <label>{optionValue2 || "placeholder"}</label>
        <ul>
          <Options onClick={handleClickOption} />
        </ul>
      </SelectBox>
      <SelectBox disabled>
        <label>placeholder</label>
        <ul>
          <Options onClick={handleClickOption} />
        </ul>
      </SelectBox>
    </>
  );
}

export default TextField;