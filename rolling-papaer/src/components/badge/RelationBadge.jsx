import styled from "styled-components";
import { THEME_LIGHT_COLOR } from "../../theme/color";
import FONTS from "../../theme/font";

export const RelationBadgeBlock = styled.span`
  width: fit-content;
  height: 20px;
  padding: 0 8px;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : RELATION_BACK_COLOR.default};
  color: ${({ $color }) => ($color ? $color : RELATION_COLOR.default)};
  ${FONTS.FONT_14_REGULAR}
  text-align: center;
  border-radius: 4px;
`;

const RELATION_BACK_COLOR = {
  지인: `var(--orange1)`,
  동료: `var(--purple1)`,
  가족: `var(--green1)`,
  친구: `var(--blue1)`,
  default: `var(--gray1)`,
};

const RELATION_COLOR = {
  지인: `var(--orange5)`,
  동료: `var(--purple6)`,
  가족: `var(--green5)`,
  친구: `var(--blue5)`,
  default: `var(--gray5)`,
};

function RelationBadge({ relation }) {
  return (
    <RelationBadgeBlock
      $backgroundColor={RELATION_BACK_COLOR[relation]}
      $color={RELATION_COLOR[relation]}
    >
      {relation??"기타"}
    </RelationBadgeBlock>
  );
}

export default RelationBadge;
