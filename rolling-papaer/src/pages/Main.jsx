import styled from "styled-components";
import FONTS from "../theme/font";
import content1 from "../static/content1.png";
import content2 from "../static/content2.png";
import LinkButton from "../components/button/LinkButton";

const Main = styled(BaseMain)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const Section = styled.section`
  margin: 6rem auto 0;
  padding: 6rem 0 6rem 6rem;
  display: flex;
  justify-content: flex-end;
  gap: 15.2rem;
  border-radius: 1.6rem;
  background: var(--surface);
  align-items: center;
`;
const SecondSection = styled(Section)`
  margin: 6rem auto 0;
  align-items: flex-start;
  gap: 0;
  padding: 6rem 19.2rem 6rem 0;
`;

const TextField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  flex-shrink: 0;
  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    ${FONTS.FONT_14_BOLD}
    border-radius: 5rem;
    background: var(--purple6);
    padding: 6px 12px;
  }
  h2 {
    color: var(--gray9);
    ${FONTS.FONT_24_BOLD}
    margin: 1.6rem 0 0.8rem;
  }
  h3 {
    color: var(--gray5);
    ${FONTS.FONT_18_REGULAR}
  }
`;
const ContentField = styled.div`
  display: flex;
  width: 72rem;
  height: 20.4rem;
  padding: 2.1rem 4rem 2.1rem 4rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  img {
    width: 100%;
  }
`;
const SecondContentField = styled(ContentField)`
  padding: 0 12.5rem;
`;

function BaseMain({ className }) {
  return (
    <main className={className}>
      <Section>
        <TextField>
          <span>Point. 01</span>
          <h2>
            누구나 손쉽게, 온라인 <br />
            롤링 페이퍼를 만들 수 있어요
          </h2>
          <h3>로그인 없이 자유롭게 만들어요.</h3>
        </TextField>
        <ContentField>
          <img src={content1} alt="롤링페이퍼 콘텐츠" />
        </ContentField>
      </Section>
      <SecondSection>
        <SecondContentField>
          <img src={content2} alt="롤링페이퍼 콘텐츠" />
        </SecondContentField>
        <TextField>
          <span>Point. 02</span>
          <h2>
            서로에게 이모지로 감정을
            <br />
            표현해보세요
          </h2>
          <h3>롤링 페이퍼에 이모지를 추가할 수 있어요.</h3>
        </TextField>
      </SecondSection>
      <LinkButton to="/list">구경해보기</LinkButton>
    </main>
  );
}

export default Main;
