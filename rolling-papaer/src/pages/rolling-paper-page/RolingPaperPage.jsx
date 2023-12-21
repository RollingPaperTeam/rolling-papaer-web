import PostHeader from "../../components/header/PostHeader/PostHeader";
import { useParams } from "react-router";
import CardLazyGridContainer from "../../containers/CardLazyGridContainer";
import styled from "styled-components";
import Header from "../../components/header/Header";
import { useCallback, useEffect, useRef, useState } from "react";

const ScrollToTopButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 9999px;

  position: fixed;
  right: 50px;
  bottom: 50px;

  &:hover {
    background-color: white;
  }
`;

const RollingPaperPageBlock = styled.div`
  position: relative;
`;

const HeaderVisibilitySensor = styled.div`
  width: fit-content;
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
      <RollingPaperPageBlock>
        <HeaderVisibilitySensor ref={header}>
          <StyledHeader />
        </HeaderVisibilitySensor>

        <main>
          <PostHeader></PostHeader>
          <CardLazyGridContainer postId={id} />
        </main>
      </RollingPaperPageBlock>
      {isScrollToTopVisible && (
        <ScrollToTopButton onClick={scrollToTop}>UP</ScrollToTopButton>
      )}
    </>
  );
}

export default RollingPaperPage;
