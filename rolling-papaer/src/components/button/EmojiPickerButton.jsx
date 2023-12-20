import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import styled from "styled-components";

const EmojiPickerButtonBlock = styled.article`
`;

function EmojiPickerButton({ onEmojiClick, CustomButton }) {
  const [isPicking, setIsPicking] = useState(false);
  const emojiPickerButtonOnClickHandler = (e) => {
    setIsPicking(!isPicking);
  };

  const onEmojiClickHandler = async (emoji) => {
    onEmojiClick && onEmojiClick(emoji);
    setIsPicking(false);
  };

  return (
    <EmojiPickerButtonBlock>
      {CustomButton ? (
        <CustomButton onClick={emojiPickerButtonOnClickHandler} />
      ) : (
        <button onClick={emojiPickerButtonOnClickHandler}>추가</button>
      )}
      {isPicking && (
        <EmojiPicker
          onEmojiClick={onEmojiClickHandler}
          width="300px"
          height="400px"
          skinTonesDisabled={true}
          previewConfig={{ showPreview: false }}
          categories={[
            {
              category: "smileys_people",
              name: "Faces",
            },
          ]}
        />
      )}
    </EmojiPickerButtonBlock>
  );
}

export default EmojiPickerButton;