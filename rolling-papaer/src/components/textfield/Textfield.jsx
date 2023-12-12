import styled from "styled-components";
import { useEffect, useState } from "react";
import { THEME_LIGHT_COLOR } from "../../theme/color";
import { FONTS } from "../../theme/font";
import open from "../../static/arrow-open.png";

const Container = styled.div`
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

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      right: 1.7rem;
      transform: translateY(-50%)
        ${({ $toggle }) => ($toggle ? "rotate(-180deg)" : "rotate(0)")};
      width: 1.6rem;
      height: 1.6rem;
      transition: transform 0.5s;
      background: url(${open}) no-repeat center;
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
    visibility: ${({ $toggle }) => ($toggle ? "visible" : "hidden")};
    list-style-type: none;
    margin: 0.8rem 0 0;
    padding: 0;
    width: 35rem;
    height: ${({ $toggle }) => ($toggle ? "20rem" : "0")};
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

function Textfield() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectErrorMessage, setSelectErrorMessage] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [focusout, setFocusout] = useState("");
  const [toggle, setToggle] = useState(false);
  const [values, setValues] = useState({
    text: "",
    placeholder: "",
    type: "",
  });
  const [selectValues, setSelectValues] = useState("");

  const optionList = [
    {
      id: "Text1",
      list: "TextTextText",
    },
    {
      id: "Text2",
      list: "TextTextText",
    },
    {
      id: "Text3",
      list: "TextTextText",
    },
    {
      id: "Text4",
      list: "TextTextText",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleClick = (e) => {
    setToggle(!toggle);

    if (e.target.value === "") {
      e.target.classList.add("error");
      setSelectErrorMessage("Error Massage");
    } else {
      e.target.classList.remove("error");
      setSelectErrorMessage("");
    }
  }

  const handleClickOption = (e) => setSelectValues(e.target.textContent);

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

  useEffect(() => {
    setDisabled(true);
  }, []);

  function Options({ onClick }) {
    const list = optionList.map((item) => (
      <li key={item.id} onClick={onClick}>
        {item.list}
      </li>
    ));
    return list;
  }

  return (
    <>
      <p>Input</p>
      <Container>
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
      </Container>
      <Container>
        <input
          type="text"
          value={undefined}
          placeholder="placeholder"
          onChange={handleChange}
          name="text"
          disabled={disabled}
        />
      </Container>
      <p>Dropdown</p>
      <SelectBox $toggle={toggle} onClick={handleClick}>
        <label>{selectValues ? selectValues : "placeholder"}</label>
        <ul>
          <Options onClick={handleClickOption} />
        </ul>
        {selectErrorMessage && <p>{selectErrorMessage}</p>}
      </SelectBox>
    </>
  );
}

export default Textfield;
