import EmojiBadgeList from "../components/badge/EmojiBadgeList";

function EmojiBadgeListTest() {
  return (
    <>
      <EmojiBadgeList 
      maxEmojisPerLine={3}
      showAll={true}
      
      emojiList={[
    {
      "id": 928,
      "emoji": "😀",
      "count": 4
    },
    {
      "id": 1030,
      "emoji": "😅",
      "count": 2
    },
    {
      "id": 799,
      "emoji": "😆",
      "count": 1
    },
    {
      "id": 855,
      "emoji": "😘",
      "count": 1
    },
    {
      "id": 748,
      "emoji": "💘",
      "count": 1
    },
    {
      "id": 1024,
      "emoji": "💯",
      "count": 1
    },
    {
      "id": 1036,
      "emoji": "🥰",
      "count": 1
    },
    {
      "id": 1216,
      "emoji": "😊",
      "count": 1
    }
  ]}/>
    </>
  );
}

export default EmojiBadgeListTest;
