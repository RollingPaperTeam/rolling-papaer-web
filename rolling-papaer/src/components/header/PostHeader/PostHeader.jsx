import styled from "styled-components";
import FONTS from "../../../theme/font";
import {
  PostHeaderProvider,
  usePostHeaderContextValue,
} from "./PostHeaderProvider";
import PostHeaderItems from "./PostHeaderItems";
import { THEME_LIGHT_COLOR } from "../../../theme/color";
import HeaderEmojiList from "./HeaderEmojiList";
import EmojiPickerButton from "../../button/EmojiPickerButton";
import useAsync from "../../../hooks/NetworkHook";
import { addRecipientReaction } from "../../../api/api";
import { ButtonShared, ShareIcon } from "../../button/Button";

const PostHeaderBlock = styled.section`
  width: 100%;
  height: 68px;

  padding: 13px calc(max((100% - 1200px) / 2, 24px));

  display: flex;
  justify-content: space-between;

  background-color: var(--white);
`;

const ReceiverNameBlock = styled.p`
  margin: 0;
  ${FONTS.FONT_28_BOLD}
  color: ${THEME_LIGHT_COLOR.gray8};
  line-height: 4.2rem;
  letter-spacing: -0.028rem;
`;

function ReceiverName() {
  const { name } = usePostHeaderContextValue();

  return <ReceiverNameBlock>To. {name}</ReceiverNameBlock>;
}

function PostHeader({ recipientId }) {
  const [isLoading, isError, addRecipientReactionWrapped] =
    useAsync(addRecipientReaction);

  const addEmojihandler = async (emoji) => {
    if (isLoading) return;
    const response = await addRecipientReactionWrapped(
      recipientId,
      emoji.emoji
    );
    if (!response) return;
  };

  return (
    <PostHeaderProvider recipientId={recipientId}>
      <PostHeaderBlock>
        <ReceiverName />
        <PostHeaderItems>
          <div>//TODO:몇명이 작성했어요</div>
          <HeaderEmojiList />
          <EmojiPickerButton onEmojiClick={addEmojihandler} />
          <ButtonShared type="button">
            <ShareIcon />
          </ButtonShared>
        </PostHeaderItems>
      </PostHeaderBlock>
    </PostHeaderProvider>
  );
}

export default PostHeader;
