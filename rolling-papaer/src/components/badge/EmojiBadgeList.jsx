import { useMemo } from "react";
import styled from "styled-components";
import EmojiBadge from "./EmojiBadge";

const EmojiBadgeListBlock = styled.article`
  width: fit-content;
  display: grid;

  grid-template-columns: repeat(${(props) => props.$columnLength}, 1fr);
  gap: 8px;
`;

function EmojiBadgeList({
  emojiList,
  maxEmojisPerLine = 3,
  isAscending = false,
  showAll = false,
}) {
  const sortedEmojiList = useSortedEmojiList(
    emojiList,
    showAll ? emojiList.length : maxEmojisPerLine,
    isAscending
  );

  return (
    <EmojiBadgeListBlock $columnLength={maxEmojisPerLine}>
      {sortedEmojiList.map((item) => (
        <EmojiBadge key={item.id} emoji={item.emoji} count={item.count} />
      ))}
    </EmojiBadgeListBlock>
  );
}

const useSortedEmojiList = (emojiList, maxShowEmojiCount, isAscending) => {
  return useMemo(() => {
    const copyEmojiList = [...emojiList];
    if (isAscending) {
      copyEmojiList.sort((emoji1, emoji2) => emoji1.count - emoji2.count);
    } else {
      copyEmojiList.sort((emoji1, emoji2) => emoji2.count - emoji1.count);
    }
    return copyEmojiList.slice(0, maxShowEmojiCount);
  }, [emojiList, maxShowEmojiCount, isAscending]);
};

export default EmojiBadgeList;
