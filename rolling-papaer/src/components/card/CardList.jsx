import styled from "styled-components";
import FONTS from "../../theme/font";
import CardBox from "./CardBox";
import RecentProfile from "./RecentProfile";
const Wrapper = styled.div`
  padding: 3rem 2.4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 4.3rem;
`;
const ReactionBox = styled.div``;
const Line = styled.span`
  display: block;
  width: 22.7rem;
  height: 0.1rem;
  background: rgba(0, 0, 0, 0.12);
`;
const CardContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
const CardContentImgContainer = styled.div`
  display: flex;
  align-items: center;
  height: 2.8rem;

  img {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 5rem;
    border: 0.15rem solid var(--white);
  }
  img:nth-of-type(2) {
    position: relative;
    right: 1.2rem;
  }
  img:nth-of-type(3) {
    position: relative;
    right: 2.4rem;
  }
`;
const CardEmoji = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;

  p {
    display: inline;
  }
`;
const RecentCount = styled.div`
  border-radius: 3rem;
  background: var(--white);
  display: flex;
  padding: 0.5rem 0.6rem;
  align-items: flex-start;
  gap: 1rem;
  color: var(--gray5);
  ${FONTS.FONT_12_REGULAR}
  position: relative;
  right: 3.6rem;
`;
const Name = styled.span`
  ${FONTS.FONT_24_BOLD}
  color: var(${({ color }) => (color ? `--white` : `--gray9`)});
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;
`;
const RecentPerson = styled.p`
  ${FONTS.FONT_16_REGULAR}
  color:var(${({ color }) => (color ? `--gray2` : `--gray7`)});
  margin: 0;
`;

function CardList({ cardData }) {
  return (
    <>
      {cardData.map((result) => {
        return (
          <CardBox
            key={result.id}
            $backgroundColor={result.backgroundColor}
            $backgroundIMG={result.backgroundImageURL}
          >
            <Wrapper>
              <CardContents>
                <Name color={result.backgroundImageURL}>TO.{result.name}</Name>
                <CardContentImgContainer>
                  <RecentProfile result={result} />
                  {result.messageCount - 3 > 0 && (
                    <RecentCount>{`+${result.messageCount - 3}`}</RecentCount>
                  )}
                </CardContentImgContainer>
                <RecentPerson color={result.backgroundImageURL}>
                  {result.messageCount}명이 작성했어요!
                </RecentPerson>
              </CardContents>
              <ReactionBox>
                <Line></Line>
                <CardEmoji>
                  <p>d</p>
                  <p>d</p>
                  <p>d</p>
                </CardEmoji>
              </ReactionBox>
            </Wrapper>
          </CardBox>
        );
      })}
    </>
  );
}
export default CardList;
