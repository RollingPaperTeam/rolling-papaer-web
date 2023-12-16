import styled from "styled-components";
import purple from "../../static/bg-purple.png";
import blue from "../../static/bg-blue.png";
import beige from "../../static/bg-beige.png";
import green from "../../static/bg-green.png";

const CardBox = styled.div`
  width: 27.5rem;
  height: 26rem;
  ${({ $backgroundColor, $backgroundIMG }) =>
    $backgroundIMG === null
      ? $backgroundColor === "purple"
        ? `background-image: url(${purple})`
        : $backgroundColor === "beige"
        ? `background-image: url(${beige})`
        : $backgroundColor === "blue"
        ? `background-image: url(${blue})`
        : $backgroundColor === "green"
        ? `background-image: url(${green})`
        : `background: linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%) , url(${$backgroundIMG})`
      : `background: linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%) , url(${$backgroundIMG})`};
  background-position: center;
  background-size: 100% 26rem;
  border-radius: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
`;

export default CardBox;
