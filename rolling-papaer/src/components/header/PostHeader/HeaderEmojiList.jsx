import styled from "styled-components";
import EmojiBadgeList from "../../badge/EmojiBadgeList";
import { ArrowDownIcon } from "../../button/Button";
import { usePostHeaderContextValue } from "./PostHeaderProvider";
import useAsync from "../../../hooks/NetworkHook";
import { getRecipientReactions } from "../../../api/api";
import { useEffect, useState } from "react";

const AllEmojiListBlock = styled.section`
  padding: 24px;
  margin-top: 7px;
  background-color: var(--white);
  border-radius: 8px;
  position: absolute;
  right: 0;
  z-index: 1;
  border: 1px solid var(--gray3);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;

const HeaderEmojiListBlock = styled.section`
  width: fit-content;
  display: flex;
  align-items: center;

  gap: 6px;

  ${ArrowDownIcon} {
    ${({ $arrowDirectionFlip }) =>
      $arrowDirectionFlip
        ? `  animation: moveDownUpReverse ease-in-out 1s infinite;
`
        : `  animation: moveDownUp ease-in-out 1s infinite;
`}
  }

  @keyframes moveDownUp {
    0%,
    100% {
      transform: translateY(-2px);
    }
    50% {
      transform: translateY(2px);
    }
  }

  @keyframes moveDownUpReverse {
    0%,
    100% {
      transform: translateY(-2px) rotateZ(180deg);
    }
    50% {
      transform: translateY(2px) rotateZ(180deg);
    }
  }
`;

function AllEmojiList({ recipientId }) {
  const [reactionList, setReactionList] = useState(null);
  const [isLoading, isError, getReactionsWrapped] = useAsync(
    getRecipientReactions
  );

  useEffect(() => {
    (async () => {
      const resultReactions = await getReactionsWrapped(recipientId);
      if (!resultReactions) return;
      const reactions = resultReactions.results;
      console.log(reactions);
      setReactionList(reactions);
    })();
  }, []);

  return (
    <>
      {reactionList && (
        <AllEmojiListBlock>
          <EmojiBadgeList
            emojiList={reactionList}
            maxEmojisPerLine={4}
            showAll={true}
          />
        </AllEmojiListBlock>
      )}
    </>
  );
}

function HeaderEmojiList() {
  const { id, topReactions } = usePostHeaderContextValue();
  const [visibleAllEmojiList, setVisibleAllEmojiList] = useState(false);

  const handleVisibleAllEmojiList = () => {
    if (visibleAllEmojiList) setVisibleAllEmojiList(false);
    else setVisibleAllEmojiList(true);
  };
  return (
    <>
      <HeaderEmojiListBlock $arrowDirectionFlip={visibleAllEmojiList}>
        {topReactions && <EmojiBadgeList emojiList={topReactions} />}
        {topReactions && <ArrowDownIcon onClick={handleVisibleAllEmojiList} />}
      </HeaderEmojiListBlock>
      {visibleAllEmojiList && <AllEmojiList recipientId={id} />}
    </>
  );
}

export default HeaderEmojiList;
