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
import CountPerson from "../../card/CountPerson";
import { ButtonShared, ShareIcon } from "../../button/Button";


const BackgroundColor = {
  purple: `--purple2`,
  blue: `--blue2`,
  beige: '--orange2',
  green: `--green2`,
  default: `--purple2`,
};

const PostHeaderBlock = styled.section`
  width: 100%;
  height: 68px;

  padding: 13px calc(max((100% - 1200px) / 2, 24px));

  display: flex;
  justify-content: space-between;

  background-color: var(--white);

  &::before {
    content: "";
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;

    background-position: center;
    background-size: cover;
    ${({ $backgroundImgUrl, $backgroundColor }) => {
      return $backgroundImgUrl
        ? `background-image: url(${$backgroundImgUrl});
        `
        : $backgroundColor
        ? `background-color: var(${BackgroundColor[$backgroundColor]});`
        : `background-color:var(--gray2);`;
    }}
    //TODO: data를 받아와서, 해당 색을
    z-index: -9999;
  }
`;

function PostHeaderBlockContent({ children }) {
  const { backgroundImageURL, backgroundColor } = usePostHeaderContextValue();

  return (
    <PostHeaderBlock
      $backgroundImgUrl={backgroundImageURL}
      $backgroundColor={backgroundColor}
    >
      {children}
    </PostHeaderBlock>
  );
}

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

function CountPersonWrapper(){
  const contextValue = usePostHeaderContextValue();

  return(<CountPerson result={contextValue} direction></CountPerson>)
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
      <PostHeaderBlockContent>
        <ReceiverName />
        <PostHeaderItems>
          <CountPersonWrapper/>
          <HeaderEmojiList />
          <EmojiPickerButton onEmojiClick={addEmojihandler} />
          <ButtonShared type="button">
            <ShareIcon />
          </ButtonShared>
        </PostHeaderItems>
      </PostHeaderBlockContent>
    </PostHeaderProvider>
  );
}

export default PostHeader;
