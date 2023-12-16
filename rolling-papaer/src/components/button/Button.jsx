import styled, { css } from "styled-components";
import { useState } from "react";
import { THEME_LIGHT_COLOR } from "../../theme/color";
import { FONTS } from "../../theme/font";
import ButtonStyle from "./ButtonStyle";
import plus from "../../static/plus.svg";
import check from "../../static/check.svg";
import share from "../../static/share.svg";
import add from "../../static/add.svg";
import deleted from "../../static/deleted.svg";
import arrowDown from "../../static/arrow_down.svg";
import edit from "../../static/edit.svg";
import buttonPrev from "../../static/arrow_prev.svg";
import buttonNext from "../../static/arrow_next.svg";

const Icon = styled.i`
  display: block;
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

const PlusIcon = styled(Icon)`
  background: url(${plus}) no-repeat;
`;

const CheckIcon = styled(Icon)`
  background: url(${check}) no-repeat;
`;

const ShareIcon = styled(Icon)`
  background: url(${share}) no-repeat;
`;

const AddIcon = styled(Icon)`
  position: ${({ $icon }) => $icon && "absolute"};
  left: 1.6rem;
  background: url(${add}) no-repeat;
`;

const DeletedIcon = styled(Icon)`
  background: url(${deleted}) no-repeat center;
`;

const ArrowDownIcon = styled(Icon)`
  background: url(${arrowDown}) no-repeat;
`;

const Share20Icon = styled(Icon)`
  width: 2rem;
  height: 2rem;
  background: url(${share}) no-repeat;
  background-size: 100% 2rem;
`;

const Add20Icon = styled(Icon)`
  position: ${({ $icon20 }) => $icon20 && "absolute"};
  left: 1.6rem;
  margin: 0.3rem 0 0;
  width: 2rem;
  height: 2rem;
  background: url(${add}) no-repeat;
  background-size: 100% 2rem;
`;

const EditIcon = styled(Icon)`
  background: url(${edit}) no-repeat;
`;

const ButtonNextIcon = styled(Icon)`
  background: url(${buttonNext}) no-repeat center;
`;

const ButtonPrevIcon = styled(Icon)`
  background: url(${buttonPrev}) no-repeat center;
`;

const PositionCenter = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonPlus = styled.button`
  position: relative;
  border: none;
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 10rem;
  background-color: ${({ disabled }) =>
    disabled ? `${THEME_LIGHT_COLOR.gray3}` : `${THEME_LIGHT_COLOR.gray5}`};
  cursor: pointer;

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? "transparent" : `${THEME_LIGHT_COLOR.gray6}`};
  }

  &:active {
    background-color: ${({ disabled }) =>
      disabled ? "transparent" : `${THEME_LIGHT_COLOR.gray7}`};
  }

  &:focus {
    border: ${({ disabled }) =>
      disabled ? "none" : `1px solid ${THEME_LIGHT_COLOR.gray8}`};
    background-color: ${({ disabled }) =>
      disabled ? "transparent" : `${THEME_LIGHT_COLOR.gray7}`};
  }

  ${PlusIcon} {
    ${PositionCenter}
  }
`;

const ButtonDeleted = styled.button`
  position: relative;
  width: 3.6rem;
  height: 3.6rem;
  border: 1px solid ${THEME_LIGHT_COLOR.gray3};
  border-radius: 0.6rem;
  cursor: pointer;
  background-color: ${THEME_LIGHT_COLOR.white};

  &:disabled {
    background-color: ${THEME_LIGHT_COLOR.gray3};
  }

  &:hover {
    border: ${({ disabled }) =>
      disabled ? "none" : `1px solid ${THEME_LIGHT_COLOR.gray3}`};
    background-color: ${({ disabled }) =>
      disabled ? "transparent" : `${THEME_LIGHT_COLOR.gray1}`};
  }

  &:active {
    border: ${({ disabled }) =>
      disabled ? "none" : `1px solid ${THEME_LIGHT_COLOR.gray3}`};
    background-color: ${({ disabled }) =>
      disabled ? "transparent" : `${THEME_LIGHT_COLOR.gray1}`};
  }

  &:focus {
    border: ${({ disabled }) =>
      disabled ? "none" : `1px solid ${THEME_LIGHT_COLOR.gray5}`};
    background-color: ${({ disabled }) =>
      disabled ? "transparent" : `${THEME_LIGHT_COLOR.white}`};
  }

  ${DeletedIcon} {
    ${PositionCenter}
  }
`;

const ButtonControl = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 4rem;
  border: 1px solid ${THEME_LIGHT_COLOR.gray3};
  box-shadow: 0px 4px 8px 0px #00000014;
  background-color: ${THEME_LIGHT_COLOR.white};
  cursor: pointer;
`;

const ButtonToggle = styled.div`
  width: 24.4rem;
  border-radius: 0.6rem;
  text-align: center;
  ${FONTS.FONT_16_REGULAR};
  color: ${THEME_LIGHT_COLOR.gray9};
  background-color: ${THEME_LIGHT_COLOR.gray1};

  button {
    border: none;
    padding: 0;
    border-radius: 0.6rem;
    width: 12.2rem;
    height: 4rem;
    background-color: ${THEME_LIGHT_COLOR.gray1};
    line-height: 4rem;
    cursor: pointer;

    &.active {
      border: 2px solid ${THEME_LIGHT_COLOR.puple6};
      color: ${THEME_LIGHT_COLOR.puple7};
      ${FONTS.FONT_16_BOLD};
      background-color: ${THEME_LIGHT_COLOR.white};
    }
  }
`;

function Button() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  return (
    <>
      <p style={{ fontSize: "2rem" }}>primary</p>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div>
          <ButtonStyle
            $primary="primary"
            size="large"
            fontSize="fontSize18"
          >
            Enabled
          </ButtonStyle>
          <br />
          <br />
          <ButtonStyle
            $primary="primary"
            size="large"
            fontSize="fontSize18"
            disabled="disabled"
          >
            Disabled
          </ButtonStyle>
        </div>
        <div>
          <ButtonStyle
            $primary="primary"
            size="medium"
            fontSize="fontSize16"
            $padding="padding16"
          >
            Enabled
          </ButtonStyle>
          <br />
          <br />
          <ButtonStyle
            $primary="primary"
            size="medium"
            fontSize="fontSize16"
            $padding="padding16"
            disabled="disabled"
          >
            Disabled
          </ButtonStyle>
        </div>
      </div>

      <p style={{ fontSize: "2rem" }}>Secondary</p>
      <div>
        <ButtonStyle
          $secondary="secondary"
          size="medium"
          fontSize="fontSize16"
          $borderRadius="borderRadius6"
          $padding="padding16"
          $hover="secondary"
          $active="secondary"
          $focus="secondary"
        >
          Enabled
        </ButtonStyle>
        <br />
        <br />
        <ButtonStyle
          size="medium"
          fontSize="fontSize16"
          $borderRadius="borderRadius6"
          $padding="padding16"
          disabled="disabled"
        >
          Disabled
        </ButtonStyle>
      </div>

      <p style={{ fontSize: "2rem" }}>Outlined</p>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div>
          <ButtonStyle
            $outlined="outlined"
            fontSize="fontSize18"
            $padding="padding16"
            size="large"
            $hover="outlined"
            $active="outlined"
            $focus="outlined"
          >
            Enabled
          </ButtonStyle>
          <br />
          <br />
          <ButtonStyle
            size="large"
            fontSize="fontSize18"
            $padding="padding16"
            disabled
          >
            Disabled
          </ButtonStyle>
        </div>
        <div>
          <ButtonStyle
            $outlined="outlined"
            fontSize="fontSize16"
            $padding="padding16"
            $borderRadius="borderRadius6"
            size="medium"
            $hover="outlined"
            $active="outlined"
            $focus="outlined"
          >
            Enabled
          </ButtonStyle>
          <br />
          <br />
          <ButtonStyle
            size="medium"
            fontSize="fontSize16"
            $padding="padding16"
            $borderRadius="borderRadius6"
            disabled
          >
            Disabled
          </ButtonStyle>
        </div>
        <div>
          <ButtonStyle
            $outlined="outlined"
            fontSize="fontSize16"
            $borderRadius="borderRadius6"
            size="medium"
            $hover="outlined"
            $active="outlined"
            $focus="outlined"
            $icon
          >
            <AddIcon $icon />
            Enabled
          </ButtonStyle>
          <br />
          <br />
          <ButtonStyle
            size="medium"
            fontSize="fontSize16"
            $borderRadius="borderRadius6"
            $icon
            disabled
          >
            <AddIcon $icon />
            Disabled
          </ButtonStyle>
        </div>
        <div>
          <ButtonStyle
            $outlined="outlined"
            fontSize="fontSize16"
            $borderRadius="borderRadius6"
            $padding="padding16"
            size="small"
            $hover="outlined"
            $active="outlined"
            $focus="outlined"
          >
            Enabled
          </ButtonStyle>
          <br />
          <br />
          <ButtonStyle
            size="small"
            fontSize="fontSize16"
            $borderRadius="borderRadius6"
            $padding="padding16"
            disabled
          >
            Disabled
          </ButtonStyle>
        </div>
        <div>
          <ButtonStyle
            $outlined="outlined"
            fontSize="fontSize16"
            $borderRadius="borderRadius6"
            size="small"
            $hover="outlined"
            $active="outlined"
            $focus="outlined"
            $icon
          >
            <AddIcon $icon />
            Enabled
          </ButtonStyle>
          <br />
          <br />
          <ButtonStyle
            size="small"
            fontSize="fontSize16"
            $borderRadius="borderRadius6"
            $icon
            disabled
          >
            <AddIcon $icon />
            Disabled
          </ButtonStyle>
        </div>
        <div>
          <ButtonStyle
            $outlined="outlined"
            fontSize="fontSize16"
            $borderRadius="borderRadius6"
            $padding="padding16"
            size="mini"
            $hover="outlined"
            $active="outlined"
            $focus="outlined"
          >
            Enabled
          </ButtonStyle>
          <br />
          <br />
          <ButtonStyle
            size="mini"
            fontSize="fontSize16"
            $borderRadius="borderRadius6"
            $padding="padding16"
            disabled
          >
            Disabled
          </ButtonStyle>
        </div>
        <div>
          <ButtonStyle
            $outlined="outlined"
            fontSize="fontSize16"
            $borderRadius="borderRadius6"
            size="mini"
            $hover="outlined"
            $active="outlined"
            $focus="outlined"
            $icon20
          >
            <Add20Icon $icon20 />
            Enabled
          </ButtonStyle>
          <br />
          <br />
          <ButtonStyle
            size="mini"
            fontSize="fontSize16"
            $borderRadius="borderRadius6"
            $icon20
            disabled
          >
            <Add20Icon $icon20 />
            Disabled
          </ButtonStyle>
        </div>
      </div>

      <p style={{ fontSize: "2rem" }}>Icon</p>
      <div
        style={{ backgroundColor: "#E2E2E2", width: "100px", height: "300px" }}
      >
        <PlusIcon />
        <CheckIcon />
        <br />
        <ShareIcon />
        <AddIcon />
        <DeletedIcon />
        <ArrowDownIcon />
        <br />
        <Share20Icon />
        <Add20Icon />
        <br />
        <EditIcon />
        <ButtonNextIcon />
        <ButtonPrevIcon />
      </div>

      <p style={{ fontSize: "2rem" }}>추가 버튼</p>
      <div>
        <ButtonPlus type="button">
          <PlusIcon />
        </ButtonPlus>
        <br />
        <ButtonPlus type="button" disabled>
          <PlusIcon />
        </ButtonPlus>
      </div>

      <p style={{ fontSize: "2rem" }}>삭제 버튼</p>
      <div>
        <ButtonDeleted type="button">
          <DeletedIcon />
        </ButtonDeleted>
        <br />
        <br />
        <ButtonDeleted type="button" disabled>
          <DeletedIcon />
        </ButtonDeleted>
      </div>

      <p style={{ fontSize: "2rem" }}>Arrow Button</p>
      <div>
        <ButtonControl type="button">
          <ButtonNextIcon />
        </ButtonControl>
        <br />
        <br />
        <ButtonControl type="button" disabled>
          <ButtonPrevIcon />
        </ButtonControl>
      </div>

      <p style={{ fontSize: "2rem" }}>Toggle Button</p>
      <div>
        <ButtonToggle>
          <button
            type="button"
            onClick={handleClick}
            className={toggle ? "" : "active"}
          >
            컬러
          </button>
          <button
            type="button"
            onClick={handleClick}
            className={toggle ? "active" : ""}
          >
            이미지
          </button>
        </ButtonToggle>
      </div>
    </>
  );
}

export default Button;
