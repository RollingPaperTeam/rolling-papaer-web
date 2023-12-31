import PostHeader from "../../components/header/PostHeader/PostHeader";
import { useParams } from "react-router";
import CardLazyGridContainer from "../../containers/CardLazyGridContainer";
import styled from "styled-components";
import Header from "../../components/header/Header";
import { useCallback, useEffect, useRef, useState } from "react";
import FONTS from "../../theme/font";
import { Helmet } from "react-helmet";

const ScrollToTopButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 9999px;

  position: fixed;
  right: 50px;
  bottom: 50px;

  border: none;
  background-color: var(--purple5);

  box-shadow: 0 20px 20px var(--gray3);

  p {
    ${FONTS.FONT_18_BOLD}
    color: var(--white);
  }
  animation: moveUpDown 1s ease-out infinite;

  &:hover {
    background-color: var(--white);
    border: 3px solid var(--purple5);

    box-shadow: none;

    p {
      color: var(--purple5);
    }

    animation: none;
  }

  @keyframes moveUpDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const RollingPaperPageBlock = styled.div`
  position: relative;
`;

const HeaderVisibilitySensor = styled.div`
  width: 100%;
  height: fit-content;
`;

const StyledHeader = styled(Header)`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
`;

function RollingPaperPage() {
  const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);
  const header = useRef();

  const { id } = useParams();

  // 헤더가 화면에 보이지 않을 때 위로 스크롤 버튼을 노출
  const handleScrollObserver = useCallback((entries) => {
    const target = entries[0];
    if (!target.isIntersecting) {
      setIsScrollToTopVisible(true);
    } else {
      setIsScrollToTopVisible(false);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleScrollObserver, {
      threshold: 1,
    });

    if (header.current) {
      observer.observe(header.current);
    }

    return () => observer.disconnect();
  }, [handleScrollObserver]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <Helmet>
      <title>생성된 롤링페이퍼</title>
    </Helmet>
      <RollingPaperPageBlock>
        <HeaderVisibilitySensor ref={header}>
          <StyledHeader />
        </HeaderVisibilitySensor>
        <main>
          <PostHeader recipientId={id}></PostHeader>
          <CardLazyGridContainer recipientId={id} />
        </main>
      </RollingPaperPageBlock>
      {isScrollToTopVisible && (
        <ScrollToTopButton onClick={scrollToTop}>
          <p>TOP</p>
        </ScrollToTopButton>
      )}
    </>
  );
}

export default RollingPaperPage;
