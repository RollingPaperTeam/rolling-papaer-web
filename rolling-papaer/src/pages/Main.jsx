import styled from "styled-components";
import FONTS from "../theme/font";
import content1 from "../static/content1.png";
import content2 from "../static/content2.png";
import LinkButton from "../components/button/LinkButton";
import mediaQuery from "../theme/mediaQuery";

const Main = styled(BaseMain)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 3rem;

  ${mediaQuery.mobile} {
    gap: 2.4rem;
  }
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
  width: 120rem;
  height: 32.4rem;
  overflow: hidden;

  ${mediaQuery.tablet} {
    margin-top: 4.9rem;
    flex-direction: column;
    width: calc(100% - 4.8rem);
    gap: 3.6rem;
    align-items: center;
    padding: 2.1rem 0;
    height: auto;
  }
  ${mediaQuery.mobile} {
    margin-top: 4.2rem;
    width: calc(100% - 4rem);
    gap: 5rem;
    padding-top: 2.4rem;
    padding-bottom: 6.23rem;
  }
`;
const SecondSection = styled(Section)`
  margin-top: 0;
  justify-content: flex-start;
  gap: 0;
  padding: 6rem 0;

  ${mediaQuery.tablet} {
    flex-direction: column-reverse;
    align-items: center;
    gap: 3.6rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  ${mediaQuery.mobile} {
    gap: 4.8rem;
    padding-top: 2.4rem;
    padding-bottom: 5.1rem;
  }
`;

const TextField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding-left: 1.5rem;
  flex-shrink: 0;

  ${mediaQuery.tablet} {
    width: 72rem;
  }

  ${mediaQuery.mobile} {
    width: 27.2rem;
  }
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

    ${mediaQuery.mobile} {
      ${FONTS.FONT_18_BOLD}
    }
  }
  h3 {
    color: var(--gray5);
    ${FONTS.FONT_18_REGULAR}

    ${mediaQuery.mobile} {
      ${FONTS.FONT_15_REGULAR}
    }
  }
`;
const ContentImg = styled.img`
  width: 72rem;
  height: 20.4rem;
  flex-shrink: 0;

  ${mediaQuery.mobile} {
    width: 35.4rem;
    height: 8.97rem;
  }
`;
const Br = styled.br`
  ${mediaQuery.tablet} {
    display: none;
  }
`;
function BaseMain({ className }) {
  return (
    <main className={className}>
      <Section>
        <TextField>
          <span>Point. 01</span>
          <h2>
            누구나 손쉽게, 온라인
            <Br /> 롤링 페이퍼를 만들 수 있어요
          </h2>
          <h3>로그인 없이 자유롭게 만들어요.</h3>
        </TextField>
        <ContentImg src={content1} alt="롤링페이퍼 콘텐츠" />
      </Section>
      <SecondSection>
        <ContentImg src={content2} alt="롤링페이퍼 콘텐츠" />
        <TextField>
          <span>Point. 02</span>
          <h2>
            서로에게 이모지로 감정을
            <Br /> 표현해보세요
          </h2>
          <h3>롤링 페이퍼에 이모지를 추가할 수 있어요.</h3>
        </TextField>
      </SecondSection>
      <LinkButton to="/list">구경해보기</LinkButton>
    </main>
  );
}

export default Main;
