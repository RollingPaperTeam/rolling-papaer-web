import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import styled from "styled-components";
import ButtonStyle from "./ButtonStyle";
import { AddIcon } from "./Button";


const EmojiPickerBlock = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;
`;
const EmojiPickerButtonBlock = styled.article``;

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
    <>
      <EmojiPickerButtonBlock>
        {
          <ButtonStyle
            $outlined="outlined"
            fontSize="fontSize16"
            $borderRadius="borderRadius6"
            size="medium"
            $hover="outlined"
            $active="outlined"
            $focus="outlined"
            $icon
            onClick = {emojiPickerButtonOnClickHandler}
          >
            <AddIcon $icon />
            추가
          </ButtonStyle>
        }
      </EmojiPickerButtonBlock>

      <EmojiPickerBlock>
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
      </EmojiPickerBlock>
    </>
  );
}

export default EmojiPickerButton;
