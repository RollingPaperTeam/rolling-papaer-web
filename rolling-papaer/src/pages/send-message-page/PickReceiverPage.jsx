import { useState } from "react";
import styled, { css } from "styled-components";
import FONTS from "../../theme/font";
import currentProfileImg from "../../static/current_color.svg";
import open from "../../static/arrow_open.svg";
import MDEditor from "@uiw/react-md-editor";
import ButtonStyle from "../../components/button/ButtonStyle";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";

const MessageContainer = styled.section`
  position: relative;
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
  margin: 5rem 0 0 0;
`;

const Title = styled.h2`
  ${FONTS.FONT_24_BOLD}
  margin: 0 0 1.2rem 0;
`;

const InputContainer = styled.div`
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
    width: 8rem;
    height: 8rem;
    border-radius: 10rem;
    object-fit: cover;
    cursor: pointer;
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

    @media screen and (min-width: 360px) and (max-width: 600px) {
      flex-wrap: wrap;
      width: 20.8rem;
      gap: 0.2rem;
      justify-content: space-between;
    }

    li {
      position: relative;
      width: 5.6rem;
      height: 5.6rem;
      cursor: pointer;

      @media screen and (min-width: 360px) and (max-width: 768px) {
        width: 4rem;
        height: 4rem;
      }

      &.active::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        background-color: #fbfcfd;
      }

      img {
        float: none;
        margin: 0;
        width: 5.6rem;
        height: 5.6rem;

        @media screen and (min-width: 360px) and (max-width: 768px) {
          width: 4rem;
          height: 4rem;
        }
      }

      span {
        overflow: hidden;
        display: block;
        text-indent: 100%;
        white-space: nowrap;

        &.active {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 3rem;
          height: 3rem;
          margin: 0;
          cursor: pointer;
          background: url(${currentProfileImg}) no-repeat;
          background-size: cover;

          @media screen and (max-width: 768px) {
            width: 2.4rem;
            height: 2.4rem;
          }
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
      background: url(${open}) no-repeat center;
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

const Content = styled.div`
  ${margin}
`;

const SelectFont = styled.div`
  margin: 5rem 0 6.2rem 0;
`;

const EditorContainer = styled.div`
  .w-md-editor-toolbar {
    padding: 1.3rem 1.5rem;
    background-color: var(--gray2);
  }

  .w-md-editor-content {
    padding: 0 1rem;
  }

  .w-md-editor-text-pre > code,
  .w-md-editor-text-input {
    ${FONTS.FONT_16_REGULAR}
    line-height: 24px !important;
  }
`;

function PickReceiverPage() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [focusout, setFocusout] = useState("");
  const [currentProfile, setCurrentProfile] = useState(
    "https://i.ibb.co/cNby866/profile.png"
  );
  const [relationShipOption, setRelationShipOption] = useState("지인");
  const [fontOption, setFontOption] = useState("NotoSans");
  const [values, setValues] = useState({
    text: "",
    placeholder: "",
    type: "",
  });
  const [value, setValue] = useState("");

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

  const handleClick = (item) => setCurrentProfile(item);

  const handleClickSelectBox = (e) =>
    e.currentTarget.classList.toggle("active");

  const handleClickRelationShip = (e) =>
    setRelationShipOption(e.target.getAttribute("data-value"));

  const handleClickFont = (e) =>
    setFontOption(e.target.getAttribute("data-value"));

  const { id } = useParams();

  async function getPostMessages() {
    try {
      const recipients = {
        team: "2-6",
        recipientId: `${id}`,
        sender: values?.text,
        profileImageURL: currentProfile,
        relationship: relationShipOption,
        content: value,
        font: fontOption,
      };

      const response = await fetch(
        `https://rolling-api.vercel.app/2-6/recipients/${id}/messages/`,
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

  return (
    <>
      <Header />
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
          <img src={currentProfile} alt="프로필 이미지" />
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
          <SelectBox onClick={handleClickSelectBox}>
            <label>{relationShipOption}</label>
            <ul>
              <RelationShipOption
                value={relationShipOption}
                handleClickRelationShip={handleClickRelationShip}
              />
            </ul>
          </SelectBox>
        </RelationShip>
        <Content>
          <Title>내용을 입력해 주세요</Title>
          <TextEditor
            value={value}
            onValueChange={setValue}
            onButtonClick={getPostMessages}
            handleClickFont={handleClickFont}
            handleClickSelectBox={handleClickSelectBox}
            fontOption={fontOption}
          />
        </Content>
      </MessageContainer>
    </>
  );
}

function TextEditor({
  value,
  onValueChange,
  onButtonClick,
  handleClickSelectBox,
  fontOption,
  handleClickFont,
}) {
  return (
    <EditorContainer>
      <MDEditor
        value={value}
        height="260px"
        onChange={onValueChange}
        preview="edit"
      />
      <SelectFont>
        <Title>폰트 선택</Title>
        <SelectBox onClick={handleClickSelectBox}>
          <label>{fontOption}</label>
          <ul>
            <FontOption value={fontOption} handleClickFont={handleClickFont} />
          </ul>
        </SelectBox>
      </SelectFont>
      <ButtonStyle
        $primary="primary"
        size="large"
        fontSize="fontSize18"
        disabled={value === "" ? "disabled" : ""}
        onClick={onButtonClick}
        style={{ width: "100%" }}
      >
        생성하기
      </ButtonStyle>
    </EditorContainer>
  );
}

function ProfileBox({ handleClick, currentProfile }) {
  const PROFILE_IMG = [
    {
      id: "cookies",
      image: "https://i.ibb.co/Df5Jb21/royal-icing-cookies-5952523-1280.jpg",
    },
    {
      id: "santa",
      image: "https://i.ibb.co/zFbQ1r2/ai-generated-8444285-1280.png",
    },
    {
      id: "cat",
      image: "https://i.ibb.co/k37WcfW/ai-generated-8438023-1280.jpg",
    },
    {
      id: "turtle",
      image: "https://i.ibb.co/vqm443V/green-sea-turtle-8199770-1280.jpg",
    },
    {
      id: "snowman",
      image: "https://i.ibb.co/gm3k9ty/ai-generated-8455415-1280.jpg",
    },
    {
      id: "snowflake",
      image: "https://i.ibb.co/TvLtXH1/snowflake-1823942-1280.jpg",
    },
    {
      id: "dolphin",
      image: "https://i.ibb.co/Wf3TTn0/dolphin-203875-1280.jpg",
    },
    {
      id: "tree",
      image: "https://i.ibb.co/yWGqTFP/ai-generated-8453829-1280.png",
    },
    {
      id: "aurora",
      image: "https://i.ibb.co/9rS9pFF/northern-lights-1197755-1280.jpg",
    },
    {
      id: "winter",
      image: "https://i.ibb.co/bgjJsWS/winter-8445257-1280.jpg",
    },
  ];

  const list = PROFILE_IMG.map((item) => (
    <li
      key={item.id}
      onClick={() => handleClick(item.image)}
      className={currentProfile === item.image ? "active" : ""}
    >
      <img src={item.image} alt="프로필 이미지" />
      <span className={currentProfile === item.image ? "active" : ""}>
        현재 선택된 프로필 이미지 버튼
      </span>
    </li>
  ));
  return list;
}

function FontOption({ handleClickFont }) {
  const FONT_LIST = [
    {
      id: "NotoSans",
      value: "NotoSans",
    },
    {
      id: "Pretendard",
      value: "Pretendard",
    },
    {
      id: "NanumMyeongjo",
      value: "나눔명조",
    },
    {
      id: "NanumSongeulssiSonpyeonjiche",
      value: "나눔손글씨 손편지체",
    },
  ];

  const value = FONT_LIST.map((item) => (
    <li key={item.id} data-value={item.value} onClick={handleClickFont}>
      {item.value}
    </li>
  ));
  return value;
}

function RelationShipOption({ handleClickRelationShip }) {
  const RELATIONSHIP_LIST = [
    {
      id: "acquaintance",
      value: "지인",
    },
    {
      id: "family",
      value: "가족",
    },
    {
      id: "coworker",
      value: "동료",
    },
    {
      id: "friend",
      value: "친구",
    },
  ];

  const value = RELATIONSHIP_LIST.map((item) => (
    <li key={item.id} data-value={item.value} onClick={handleClickRelationShip}>
      {item.value}
    </li>
  ));
  return value;
}

export default PickReceiverPage;
