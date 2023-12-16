import styled from "styled-components";
import { THEME_LIGHT_COLOR } from "../../theme/color";

const EmojiBadgeBlock = styled.div`
  width: 42px;
  height: 20px;
  padding: 8px 12px;
  border-radius: 9999px;
  background-color: rgba(0, 0, 0, 0.54);
`;

function EmojiBadge({ emoji, count }) {
  return (
    <EmojiBadgeBlock>
      <p>
        {emoji} {count}
      </p>
    </EmojiBadgeBlock>
  );
}

export default EmojiBadge;
