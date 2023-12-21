import styled from "styled-components";
import { THEME_LIGHT_COLOR } from "../../theme/color";
import FONTS from "../../theme/font";
import mediaQuery from "../../theme/mediaQuery";

const EmojiBadgeBlock = styled.div`
  min-width: 63px;
  width: fit-content;
  height: 36px;
  padding: 8px 12px;
  border-radius: 32px;
  background-color: rgba(0, 0, 0, 0.54);

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2px;

  ${FONTS.FONT_16_REGULAR}

  span {
    margin: 0;
    color: ${THEME_LIGHT_COLOR.white};
    ${mediaQuery.mobile} {
      ${FONTS.FONT_14_REGULAR}
    }
  }
  ${mediaQuery.mobile} {
    padding: 0.6rem 0.8rem;
    justify-content: center;
    min-width: 5.5rem;
  }
`;

function EmojiBadge({ emoji, count }) {
  return (
    <EmojiBadgeBlock>
      <span>{emoji}</span>
      <span>{count}</span>
    </EmojiBadgeBlock>
  );
}

export default EmojiBadge;
