import styled, { css } from "styled-components";
import { THEME_LIGHT_COLOR } from "../../theme/color";
import { FONTS } from "../../theme/font";

const SIZE_STYLE = {
  large: {
    width: "20.8rem",
    height: "5.6rem",
  },
  medium: {
    width: "12.2rem",
    height: "4rem",
  },
  small: {
    width: "12.2rem",
    height: "3.6rem",
  },
  mini: {
    width: "12.2rem",
    height: "2.8rem",
  },
};

const FONT_SIZE_STYLE = {
  fontSize18: `${FONTS.FONT_18_BOLD}`,
  fontSize16: `${FONTS.FONT_16_REGULAR}`,
};

const BORDER_RADIUS_STYLE = {
  borderRadius6: "0.6rem",
};

const BUTTON_STYLE = {
  primary: {
    border: "none",
    color: `${THEME_LIGHT_COLOR.white}`,
    backgroundColor: `${THEME_LIGHT_COLOR.puple6}`,
  },
  secondary: {
    border: `1px solid ${THEME_LIGHT_COLOR.puple6}`,
    color: `${THEME_LIGHT_COLOR.puple6}`,
    backgroundColor: `${THEME_LIGHT_COLOR.white}`,
    hover: {
      border: `1px solid ${THEME_LIGHT_COLOR.puple7}`,
      backgroundColor: `${THEME_LIGHT_COLOR.puple1}`,
    },
    active: {
      border: `1px solid ${THEME_LIGHT_COLOR.puple8}`,
      backgroundColor: `${THEME_LIGHT_COLOR.puple1}`,
    },
    focus: {
      border: `1px solid ${THEME_LIGHT_COLOR.puple8}`,
      backgroundColor: `${THEME_LIGHT_COLOR.white}`,
    },
  },
  outlined: {
    border: `1px solid ${THEME_LIGHT_COLOR.gray3}`,
    color: `${THEME_LIGHT_COLOR.gray9}`,
    backgroundColor: `${THEME_LIGHT_COLOR.white}`,
    hover: {
      border: `1px solid ${THEME_LIGHT_COLOR.gray3}`,
      backgroundColor: `${THEME_LIGHT_COLOR.gray1}`,
    },
    active: {
      border: `1px solid ${THEME_LIGHT_COLOR.gray3}`,
      backgroundColor: `${THEME_LIGHT_COLOR.gray1}`,
    },
    focus: {
      border: `1px solid ${THEME_LIGHT_COLOR.gray5}`,
      backgroundColor: `${THEME_LIGHT_COLOR.white}`,
    },
  },
};

const primaryStyles = css`
  ${({ $primary }) => css`
    width: ${SIZE_STYLE[$primary]?.width};
    height: ${SIZE_STYLE[$primary]?.height};
    border: ${BUTTON_STYLE[$primary]?.border};
    color: ${BUTTON_STYLE[$primary]?.color};
    font-size: ${BUTTON_STYLE[$primary]?.fontSize};
    background-color: ${BUTTON_STYLE[$primary]?.backgroundColor};
  `}
`;

const secondaryStyles = css`
  ${({ $secondary }) => css`
    width: ${SIZE_STYLE[$secondary]?.width};
    height: ${SIZE_STYLE[$secondary]?.height};
    border: ${BUTTON_STYLE[$secondary]?.border};
    color: ${BUTTON_STYLE[$secondary]?.color};
    font-size: ${BUTTON_STYLE[$secondary]?.fontSize};
    background-color: ${BUTTON_STYLE[$secondary]?.backgroundColor};
  `}
`;

const outlinedStyles = css`
  ${({ $outlined }) => css`
    width: ${SIZE_STYLE[$outlined]?.width};
    height: ${SIZE_STYLE[$outlined]?.height};
    border: ${BUTTON_STYLE[$outlined]?.border};
    color: ${BUTTON_STYLE[$outlined]?.color};
    font-size: ${BUTTON_STYLE[$outlined]?.fontSize};
    background-color: ${BUTTON_STYLE[$outlined]?.backgroundColor};
  `}
`;

const sizeStyles = css`
  ${({ size }) => css`
    width: ${SIZE_STYLE[size]?.width};
    height: ${SIZE_STYLE[size]?.height};
  `}
`;

const fontSizeStyles = css`
  ${({ fontSize }) => css`
    font-size: ${FONT_SIZE_STYLE[fontSize]};
  `}
`;

const borderRadiusStyles = css`
  ${({ $borderRadius }) => css`
    border-radius: ${BORDER_RADIUS_STYLE[$borderRadius]};
  `}
`;

const hoverStyles = css`
  ${({ $hover }) => css`
    border: ${BUTTON_STYLE[$hover]?.hover?.border};
    background-color: ${BUTTON_STYLE[$hover]?.hover?.backgroundColor};
  `}
`;

const activeStyles = css`
  ${({ $active }) => css`
    border: ${BUTTON_STYLE[$active]?.active?.border};
    background-color: ${BUTTON_STYLE[$active]?.active?.backgroundColor};
  `}
`;

const focusStyles = css`
  ${({ $focus }) => css`
    border: ${BUTTON_STYLE[$focus]?.focus?.border};
    background-color: ${BUTTON_STYLE[$focus]?.focus?.backgroundColor};
  `}
`;

const ButtonBase = styled.button`
  position: relative;
  padding: ${({ $icon }) => $icon && '0 0 0 2.4rem'};
  padding: ${({ $icon20 }) => $icon20 && '0 0 0 2rem'};
  color: ${THEME_LIGHT_COLOR.white};
  border: none;
  border-radius: 1.2rem;
  cursor: pointer;
  background-color: ${THEME_LIGHT_COLOR.puple6};

  ${primaryStyles}
  ${secondaryStyles}
  ${sizeStyles}
  ${fontSizeStyles}
  ${outlinedStyles}
  ${borderRadiusStyles}

  &:disabled {
    background-color: ${THEME_LIGHT_COLOR.gray3};
  }

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? "none" : `${THEME_LIGHT_COLOR.puple7}`};
    ${hoverStyles}
  }

  &:active {
    background-color: ${({ disabled }) =>
      disabled ? "none" : `${THEME_LIGHT_COLOR.puple8}`};
    ${activeStyles}
  }

  &:focus {
    border: ${({ disabled }) =>
      disabled ? "none" : `1px solid ${THEME_LIGHT_COLOR.puple9}`};
    background-color: ${({ disabled }) =>
        disabled ? "none" : `${THEME_LIGHT_COLOR.puple8}`};
      ${focusStyles}
  }
`;

function ButtonStyle({ children, ...rest }) {
  return (
    <ButtonBase type="button" {...rest}>{children}</ButtonBase>
  )
}

export default ButtonStyle;
