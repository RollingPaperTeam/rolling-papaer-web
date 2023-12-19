import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FONTS } from "../../theme/font";
import currentColor from "../../static/add.svg";
import ButtonStyle from "../../components/button/ButtonStyle";
import { ButtonPlus, PlusIcon } from "../../components/button/Button";
import snowman from "../../static/snowman.jpg";
import santa from "../../static/santa.jpg";
import rudolf from "../../static/rudolf.png";
import house from "../../static/house.jpg";

const ColorImageContainer = styled.section`
  padding: 5.7rem 0 33.6rem 0;
  width: 72rem;
  margin: 0 auto;

  @media screen and (min-width: 360px) and (max-width: 768px) {
    width: 100%;
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

const SelectBackground = styled.div`
  margin: 5rem 0 0;

  @media screen and (max-width: 1200px) {
    margin: 5.4rem 0 0;
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
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

const TabContainer = styled.div`
  position: relative;
`;

const ButtonToggle = styled.div`
  width: 24.4rem;
  margin: 2.4rem 0 4.5rem 0;
  border-radius: 0.6rem;
  text-align: center;
  ${FONTS.FONT_16_REGULAR};
  color: var(--gray9);
  background-color: var(--gray1);

  @media screen and (max-width: 1200px) {
    margin: 2.4rem 0 4rem 0;
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
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

const ToggleContainer = styled.div`
  margin: 0 0 3.4rem 0;

  @media screen and (min-width: 360px) and (max-width: 768px) {
    gap: 8.2rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1.6rem;
    flex-wrap: wrap;

    @media screen and (min-width: 360px) and (max-width: 768px) {
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
      border: ${({ $toggle }) =>
        $toggle === "color" ? "1px solid #00000014" : "none"};
      cursor: pointer;
      background: url() no-repeat;
      background-size: cover;

      @media screen and (min-width: 360px) and (max-width: 768px) {
        width: calc(50% - 0.6rem);
        height: 15.4rem;
      }

      &.active::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        background-color: #fbfcfd;
      }

      &:first-child {
        position: relative;
        border: 1px solid #00000014;

        ${ButtonPlus} {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 4.4rem;
          height: 4.4rem;

          ${PlusIcon} {
            width: 2.2rem;
            height: 2.2rem;
            background-size: cover;
          }
        }

        input {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;

          &::before {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            background-color: #fbfcfd1d;
          }

          &.active {
            background: url(${currentColor}) no-repeat;
          }
        }
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

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState(null);
  const inputFileRef = useRef(null);
  const handleChange = (e) => {
    const fileValue = e.target.files[0];
    onChange(name, fileValue);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <>
      <ButtonPlus>
        <PlusIcon />
      </ButtonPlus>
      <input
        type="file"
        accept="image/png, image/jpg"
        onChange={handleChange}
        ref={inputFileRef}
        style={{
          backgroundImage: `url(${preview})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
    </>
  );
}

function ColorImageCasePage() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [toggle, setToggle] = useState("color");
  let [currentColor, setCurrentColor] = useState(`var(--orange2)`);
  const [background, setBackground] = useState(
    "https://i.ibb.co/9ZsWvRM/snowman.jpg"
  );
  const [focusout, setFocusout] = useState("");
  const [values, setValues] = useState({
    text: "",
    placeholder: "",
    type: "",
  });
  const [filevalues, setFileValues] = useState({
    imgFile: null,
  });
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleChangeFile = (name, value) => {
    setFileValues((prevValues) => ({
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

  const handleClickTab = (item) => setToggle(item);

  const handleClick = (item) => setCurrentColor(item);

  const handleClickBackground = (item) => {
    setData(item);
    setBackground(item);
  };

  async function getRecipients() {
    try {
      if (currentColor === "var(--orange2)")
        currentColor = currentColor.replace(/var\(--orange2\)/i, "beige");
      if (currentColor === "var(--purple2)")
        currentColor = currentColor.replace(/var\(--purple2\)/i, "purple");
      if (currentColor === "var(--blue2)")
        currentColor = currentColor.replace(/var\(--blue2\)/i, "blue");
      if (currentColor === "var(--green2)")
        currentColor = currentColor.replace(/var\(--green2\)/i, "green");
      
      const recipients = {
        team: "2-6",
        name: values?.text,
        backgroundColor: currentColor,
        backgroundImageURL: data,
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

  const TAB = [
    {
      id: "color",
      title: "컬러",
      color: [
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
      ],
    },
    {
      id: "image",
      title: "이미지",
      image: [
        {
          id: "snowman",
          image: "https://i.ibb.co/9ZsWvRM/snowman.jpg",
        },
        {
          id: "santa",
          image: "https://i.ibb.co/t2hkxMy/santa.jpg",
        },
        {
          id: "rudolf",
          image: "https://i.ibb.co/J5F94TJ/rudolf.png",
        },
        {
          id: "house",
          image: "https://i.ibb.co/xmpXZ5t/house.jpg",
        },
      ],
    },
  ];

  function Tab({ handleClickTab, $toggle }) {
    const list = TAB.map((tab) => (
      <button
        type="button"
        key={tab.id}
        onClick={() => handleClickTab(tab.id)}
        className={$toggle === tab.id ? "active" : ""}
      >
        {tab.title}
      </button>
    ));
    return list;
  }

  function ImgBox({ handleClickBackground, background }) {
    const imageTab = TAB.find((tab) => tab.id === "image");
    const images = imageTab ? imageTab.image : [];

    const list = images.map((item) => (
      <li
        key={item.id}
        onClick={() => handleClickBackground(item.image)}
        className={background === item.image ? "active" : ""}
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <span className={background === item.image ? "active" : ""}>
          현재 선택된 이미지 버튼
        </span>
      </li>
    ));
    return list;
  }

  function ColorBox({ handleClick, currentColor }) {
    const colorTab = TAB.find((tab) => tab.id === "color");
    const color = colorTab ? colorTab.color : [];

    const list = color.map((item) => (
      <li
        key={item.id}
        onClick={() => handleClick(item.color)}
        style={{ backgroundColor: item.color }}
      >
        <span className={currentColor === item.color ? "active" : ""}>
          현재 선택된 색상 버튼
        </span>
      </li>
    ));
    return list;
  }

  return (
    <ColorImageContainer>
      <Recipient>
        <p>To.</p>
        <InputContainer>
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
        </InputContainer>
      </Recipient>
      <SelectBackground>
        <p>배경화면을 선택해 주세요.</p>
        <span>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</span>
        <ButtonToggle>
          <Tab handleClickTab={handleClickTab} $toggle={toggle} />
        </ButtonToggle>
        <TabContainer>
          {toggle === "color" && (
            <ToggleContainer $toggle={toggle}>
              <ul>
                <ColorBox
                  handleClick={handleClick}
                  currentColor={currentColor}
                />
              </ul>
            </ToggleContainer>
          )}
          {toggle === "image" && (
            <ToggleContainer $toggle={toggle}>
              <ul>
                <li>
                  <FileInput
                    name="imgFile"
                    value={filevalues.imgFile}
                    onChange={handleChangeFile}
                  />
                </li>
                <ImgBox
                  handleClickBackground={handleClickBackground}
                  background={background}
                  data={data}
                />
              </ul>
            </ToggleContainer>
          )}
        </TabContainer>
      </SelectBackground>
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
    </ColorImageContainer>
  );
}
export default ColorImageCasePage;
