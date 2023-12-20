import { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { FONTS } from "../../theme/font";
import currentProfile from "../../static/add.svg";
import person from "../../static/person.svg";
import img from "../../static/img.jpg";
import ButtonStyle from "../../components/button/ButtonStyle";
// import TextEditor from '../../components/textfield/TextEditor'

const MessageContainer = styled.section`
  padding: 5.7rem 0 33.6rem 0;
  width: 72rem;
  margin: 0 auto;

  @media screen and (min-width: 360px) and (max-width: 768px) {
    width: 100%;
    margin: 5rem 0 0;
    padding: 0 2rem 2.4rem 2rem;
  }
`;

const margin = css`
  margin: 0 0 5rem 0;
`;

const Title = styled.h2`
  ${FONTS.FONT_24_BOLD}
  margin: 0 0 1.2rem 0;
`;

const InputContainer = styled.div`
  ${margin}

  input {
    outline: none;
    display: block;
    width: 32rem;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
    border: 1px solid var(--gray3);
    color: var(--gray5);
    ${FONTS.FONT_16_REGULAR};

    @media screen and (max-width: 1200px) {
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

const SelectProfile = styled.div`
  overflow: hidden;
  ${margin}

  img {
    float: left;
    margin: 0 3.2rem 0 0;
  }

  span {
    margin: 0 0 1.2rem;
    ${FONTS.FONT_16_REGULAR}
    color: var(--gray5);
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 0.4rem;

    @media screen and (min-width: 360px) and (max-width: 768px) {
      flex-wrap: wrap;
      width: 20.8rem;
      gap: 0.2rem;
      justify-content: space-between;
    }

    li {
      width: 5.6rem;
      height: 5.6rem;
      cursor: pointer;

      @media screen and (min-width: 360px) and (max-width: 768px) {
        width: 4rem;
        height: 4rem;
      }

      img {
        float: none;
        margin: 0;
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 10rem;

        @media screen and (min-width: 360px) and (max-width: 768px) {
          width: 4rem;
          height: 4rem;
        }
      }
    }
  }
`;

const SelectBox = styled.div`
  max-width: 32rem;

  &.active ul {
    visibility: visible;
    height: 20rem;
  }
  &.active label {
    border: 1px solid var(--gray5);
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
    border: 1px solid var(--gray3);
    color: var(--gray5);
    ${FONTS.FONT_16_REGULAR};
    cursor: pointer;
    background-color: ${({ disabled }) =>
      disabled ? `var(--gray1)` : `var(--white);`};
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
      background: url() no-repeat center;
      background-size: 100% 1.6rem;
    }
    &.error,
    &.error:hover {
      border: 1px solid var(--error);
    }
    &:hover {
      color: var(--gray5);
      border: 1px solid var(--gray3);
    }
  }

  p {
    margin: 0;
    color: var(--error);
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
    border: 1px solid var(--gray3);
    transition: visibility 0.5s, height 0.5s;
    box-shadow: 0 2px 12px 0 #00000014;
    li {
      color: var(--gray9);
      padding: 1.2rem 1.6rem;
      ${FONTS.FONT_16_REGULAR};
      cursor: pointer;
      &:hover {
        background-color: var(--gray1);
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

const RelationShip = styled.div`
  ${margin}
`;

const TextEditor = styled.div`
  ${margin}
`;

const SelectFont = styled.div`
  margin: 0 0 6.2rem 0;
`;

function PostMessagepage() {
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
  const RELATIONSHIP_LIST = [
    {
      id: "지인",
      list: "지인",
    },
    {
      id: "가족",
      list: "가족",
    },
    {
      id: "동료",
      list: "동료",
    },
    {
      id: "친구",
      list: "친구",
    },
  ];

  const FONT_LIST = [
    {
      id: "지인",
      list: "지인",
    },
    {
      id: "가족",
      list: "가족",
    },
    {
      id: "동료",
      list: "동료",
    },
    {
      id: "친구",
      list: "친구",
    },
  ];

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

  // const handleClick = (item) => setCurrentProfile(item);

  async function getRecipients() {
    try {
      const recipients = {
        team: "2-6",
        name: values?.text,
        backgroundColor: currentProfile,
      };

      const response = await fetch(
        "https://rolling-api.vercel.app/2-6/recipients/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recipients),
        }
      );

      if (!response.ok) throw new Error("데이터를 불러오는데 실패했습니다");
    } catch (error) {
      console.error(error);
    }
  }

  const profileImg = [
    {
      id: "1",
      image: `${img}`,
    },
    {
      id: "2",
      image: `${img}`,
    },
    {
      id: "3",
      image: `${img}`,
    },
    {
      id: "4",
      image: `${img}`,
    },
    {
      id: "5",
      image: `${img}`,
    },
    {
      id: "6",
      image: `${img}`,
    },
    {
      id: "7",
      image: `${img}`,
    },
    {
      id: "8",
      image: `${img}`,
    },
    {
      id: "9",
      image: `${img}`,
    },
    {
      id: "10",
      image: `${img}`,
    },
  ];

  function ProfileBox({ handleClick, currentProfile }) {
    const list = profileImg.map((item) => (
      <li key={item.id} onClick={() => handleClick(item.image)}>
        <img src={item.image} alt="" />
        <span className={currentProfile === item.color ? "active" : ""}>
          {/* 현재 선택된 색상 버튼 */}
        </span>
      </li>
    ));
    return list;
  }

  const handleClick = (e) => e.currentTarget.classList.toggle("active");

  const handleClickOption = (e) => {
    const currentRef = e.currentTarget.closest("div");
    if (currentRef.classList.contains("active")) {
      if (currentRef === selectRef1.current)
        setOptionValue1(e.target.textContent);
      if (currentRef === selectRef2.current)
        setOptionValue2(e.target.textContent);
    }
  };

  function RelationShipOption() {
    const list = RELATIONSHIP_LIST.map((item) => (
      <li key={item.id} onClick={handleClickOption}>
        {item.list}
      </li>
    ));
    return list;
  }

  function FontOption() {
    const list = FONT_LIST.map((item) => (
      <li key={item.id} onClick={handleClickOption}>
        {item.list}
      </li>
    ));
    return list;
  }

  return (
    <MessageContainer>
      <div>
        <Title>From.</Title>
        <InputContainer>
          <input
            type="text"
            value={values.text}
            placeholder="이름을 입력해 주세요."
            onChange={handleChange}
            name="text"
            onBlur={handleFocusout}
            focusout={focusout}
          />
          {errorMessage && <p>{errorMessage}</p>}
        </InputContainer>
      </div>
      <SelectProfile>
        <Title>프로필 이미지</Title>
        <img src={person} alt="프로필 이미지" />
        <div>
          <span>프로필 이미지를 선택해주세요!</span>
          <ul>
            <ProfileBox
              handleClick={handleClick}
              currentProfile={currentProfile}
            />
          </ul>
        </div>
      </SelectProfile>
      <RelationShip>
        <Title>상대와의 관계</Title>
        <SelectBox ref={selectRef1} onClick={handleClick}>
          <label>{optionValue1 || "지인"}</label>
          <ul>
            <RelationShipOption onClick={handleClickOption} />
          </ul>
        </SelectBox>
      </RelationShip>
      <TextEditor>
        <Title>내용을 입력해 주세요</Title>
        <TextEditor />
      </TextEditor>
      <SelectFont>
        <Title>폰트 선택</Title>
        <SelectBox ref={selectRef2} onClick={handleClick}>
          <label>{optionValue2 || "Noto Sans"}</label>
          <ul>
            <FontOption onClick={handleClickOption} />
          </ul>
        </SelectBox>
      </SelectFont>
      <ButtonStyle
        $primary="primary"
        size="large"
        fontSize="fontSize18"
        style={{ width: "100%" }}
        disabled={focusout === "" && "disabled"}
        onClick={getRecipients}
      >
        생성하기
      </ButtonStyle>
    </MessageContainer>
  );
}
export default PostMessagepage;
