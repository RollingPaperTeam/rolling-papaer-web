import styled from "styled-components";
import FONTS from "../../theme/font";
const NavButton = styled.button`
  ${FONTS.FONT_16_BOLD}
  border-radius: 6px;
  border: 1px solid var(--gray3);
  background: var(--white);
  padding: 8px 16px;
  align-items: center;
  &:hover {
    background: var(--gray1);
  }
`;
export default NavButton;
