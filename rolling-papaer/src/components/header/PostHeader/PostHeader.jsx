import styled from "styled-components";
import FONTS from "../../../theme/font";
import { useContext } from "react";
import {
  PostHeaderProvider,
  usePostHeaderContextValue,
} from "./PostHeaderProvider";
import PostHeaderItems from "./PostHeaderItems";
import { THEME_LIGHT_COLOR } from "../../../theme/color";

const PostHeaderBlock = styled.header`
  width: 100%;
  height: 68px;

  padding: 13px 360px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const testPostSummaryData = {
  name: "강영훈",
  messageCount: "12",
  topReactions: [
    {
      id: 27,
      emoji: "😀",
      count: 14,
    },
    {
      id: 31,
      emoji: "🥹",
      count: 11,
    },
    {
      id: 31,
      emoji: "🥹",
      count: 11,
    },
  ],
};


function PostHeader({ postSummaryData = testPostSummaryData }) {
  return (
    <PostHeaderProvider defaultValue={postSummaryData}>
      <PostHeaderBlock>
        <ReceiverName/>
        <PostHeaderItems>
          <div>//TODO:몇명이 작성했어요</div>
          <div>//TODO:이모지 보기 | 추가하기</div>
          <div>//TODO:공유버튼</div>
        </PostHeaderItems>
      </PostHeaderBlock>
    </PostHeaderProvider>
  );
}

export default PostHeader;
