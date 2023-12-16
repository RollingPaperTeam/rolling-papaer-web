import styled from "styled-components";
import { THEME_LIGHT_COLOR } from "../../../theme/color";

const PostHeaderItemsBlock = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin: 0;
  }

  > *::before {
    content: "|";
    color: ${THEME_LIGHT_COLOR.gray2};
    margin: 0 28px;
  }

  > *:first-child::before {
    content: "";
    margin: 0;
  }
`;

function PostHeaderItems({ children }) {
  return <PostHeaderItemsBlock>{children}</PostHeaderItemsBlock>;
}

export default PostHeaderItems;
