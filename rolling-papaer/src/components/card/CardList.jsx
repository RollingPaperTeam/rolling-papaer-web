import styled from "styled-components";
import mockData from "../../static/mock-recipient-list.json";
import FONTS from "../../theme/font";
import THEME_LIGHT_COLOR from "../../theme/color";
const CardBox = styled.div`
  width: 17.1875rem;
  height: 16.25rem;
`;
const CardName = styled.span`
  ${FONTS.FONT_24_BOLD}
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;
`;
const CardMessageCount = styled.p`
  ${FONTS.FONT_16_REGULAR}
  color:${THEME_LIGHT_COLOR.gray7};
`;

//TODO
function CardList() {
  return (
    <>
      {mockData.results.map((result) => {
        return (
          <CardBox key={result.id}>
            <CardName>TO.{result.name}</CardName>

            <CardMessageCount>
              {result.messageCount}명이 작성했어요!
            </CardMessageCount>
          </CardBox>
        );
      })}
    </>
  );
}
export default CardList;
