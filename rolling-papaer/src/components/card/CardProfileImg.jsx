import styled from "styled-components";
import { useCardContextValue } from "./CardProvider";

const PROFILE_IMG = [
  {
    id: "cookies",
    image: "https://i.ibb.co/Df5Jb21/royal-icing-cookies-5952523-1280.jpg",
  },
  {
    id: "santa",
    image: "https://i.ibb.co/zFbQ1r2/ai-generated-8444285-1280.png",
  },
  {
    id: "cat",
    image: "https://i.ibb.co/k37WcfW/ai-generated-8438023-1280.jpg",
  },
  {
    id: "turtle",
    image: "https://i.ibb.co/vqm443V/green-sea-turtle-8199770-1280.jpg",
  },
  {
    id: "snowman",
    image: "https://i.ibb.co/gm3k9ty/ai-generated-8455415-1280.jpg",
  },
  {
    id: "snowflake",
    image: "https://i.ibb.co/TvLtXH1/snowflake-1823942-1280.jpg",
  },
  {
    id: "dolphin",
    image: "https://i.ibb.co/Wf3TTn0/dolphin-203875-1280.jpg",
  },
  {
    id: "tree",
    image: "https://i.ibb.co/yWGqTFP/ai-generated-8453829-1280.png",
  },
  {
    id: "aurora",
    image: "https://i.ibb.co/9rS9pFF/northern-lights-1197755-1280.jpg",
  },
  {
    id: "winter",
    image: "https://i.ibb.co/bgjJsWS/winter-8445257-1280.jpg",
  },
];

const CardProfileImgBox = styled.div`
  grid-row: 1 / 3;
  
  img {
    width: 5.6rem;
    height: 5.6rem;
    object-fit: cover;
    border-radius: 10rem;
  }
`;

function CardProfileImg() {
  const { profileImageURL } = useCardContextValue();

  return (
    <CardProfileImgBox>
      <img src={profileImageURL} alt="프로필 이미지" />
    </CardProfileImgBox>
  );
}

export default CardProfileImg;
