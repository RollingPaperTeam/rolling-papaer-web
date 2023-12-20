import { useState } from "react";
import styled from "styled-components";
import { FONTS } from "../../theme/font";
import currentProfile from "../../static/add.svg";
import person from "../../static/person.svg";
import ButtonStyle from "../../components/button/ButtonStyle";
import test from "../../static/share.svg";

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
  margin: 5rem 0 0;

  @media screen and (max-width: 1200px) {
    margin: 5.4rem 0 0;
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
    margin: 4.8rem 0 0;
  }

  img {
    float: left;
    padding: 0 3.2rem 0 0;
  }

  p {
    ${FONTS.FONT_24_BOLD}
    margin: 0 0 0.4rem 0;
  }

  span {
    display: block;
    margin: 0 0 1.2rem 0;
    ${FONTS.FONT_16_REGULAR}
    color: var(--gray5);
  }
`;

function PostMessagepage() {
  const [errorMessage, setErrorMessage] = useState(null);
  let [currentProfile, setCurrentProfile] = useState(`var(--orange2)`);
  const [focusout, setFocusout] = useState("");
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

  const handleClick = (item) => setCurrentProfile(item);

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
      image: `${test}`,
    },
  ];

  function ProfileBox({ handleClick, currentProfile }) {
    const list = profileImg.map((item) => (
      <li key={item.id} onClick={() => handleClick(item.image)}>
        <img src={item.image} alt="" />
        <span className={currentProfile === item.color ? "active" : ""}>
          현재 선택된 색상 버튼
        </span>
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
      <div>
        <Title>상대와의 관계</Title>
      </div>
      <div>
        <Title>내용을 입력해 주세요</Title>
      </div>
      <div>
        <Title>폰트 선택</Title>
      </div>
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
