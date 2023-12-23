import styled from "styled-components";
import { THEME_LIGHT_COLOR } from "../../../theme/color";
import React from "react";
import mediaQuery from "../../../theme/mediaQuery";

const PostHeaderItemsBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 56px;
  ${mediaQuery.mobile} {
    justify-content: flex-start;
    gap: 30px;
  }

  .post-header-item {
    position: relative;
  }

  .post-header-item::before {
    position: absolute;
    left: -28px;
    top: 50%;
    transform: translateY(-50%);

    content: "|";
    color: ${THEME_LIGHT_COLOR.gray2};
  }

  .post-header-item:first-child::before {
    content: "";
    margin: 0;
  }
  .post-header-item:first-child {
    ${mediaQuery.mobile} {
      display: none;
    }
  }
`;

function PostHeaderItems({ children }) {
  return (
    <PostHeaderItemsBlock>
      {React.Children.map(children, (child) => {
        return <div className="post-header-item">{child}</div>;
      })}
    </PostHeaderItemsBlock>
  );
}

export default PostHeaderItems;
