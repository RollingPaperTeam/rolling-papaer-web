import styled from "styled-components";
import FONTS from "../../../theme/font";
import {
  PostHeaderProvider,
  usePostHeaderContextValue,
} from "./PostHeaderProvider";
import PostHeaderItems from "./PostHeaderItems";
import { THEME_LIGHT_COLOR } from "../../../theme/color";
import HeaderEmojiList from "./HeaderEmojiList";
import mediaQuery from "../../../theme/mediaQuery";
import { NavBorderLine } from "../Nav";

const PostHeaderBlock = styled.section`
  width: 100%;
  height: 68px;

  padding: 13px calc(max((100% - 1200px) / 2, 24px));

  display: flex;
  justify-content: space-between;

  background-color: var(--white);

  ${mediaQuery.mobile} {
    flex-direction: column;
    height: fit-content;
    gap: 24px;
  }
`;
const BorderLine = styled(NavBorderLine)`
  display: none;

  ${mediaQuery.mobile} {
    display: block;
  }
`;

const ReceiverNameBlock = styled.p`
  margin: 0;
  ${FONTS.FONT_28_BOLD}
  color: ${THEME_LIGHT_COLOR.gray8};
  line-height: 4.2rem;
  letter-spacing: -0.028rem;
`;
const None = styled.div`
  ${mediaQuery.tablet} {
    display: none;
  }
`;

function ReceiverName() {
  const { name } = usePostHeaderContextValue();

  return <ReceiverNameBlock>To. {name}</ReceiverNameBlock>;
}

function PostHeader({ recipientId }) {
  return (
    <PostHeaderProvider recipientId={recipientId}>
      <PostHeaderBlock>
        <ReceiverName />
        <BorderLine />
        <PostHeaderItems>
          <None>//TODO:몇명이 작성했어요</None>
          <HeaderEmojiList />
          <div>//TODO:공유버튼</div>
        </PostHeaderItems>
      </PostHeaderBlock>
    </PostHeaderProvider>
  );
}

export default PostHeader;
