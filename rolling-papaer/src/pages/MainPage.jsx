import Header from "../components/header/Header";
import Main from "./Main";
import PostLinkButton from "../components/button/PostLinkButton";
import { Helmet } from "react-helmet";

function MainPage() {
  return (
    <>
      <Helmet>
        <title>메인</title>
      </Helmet>
      <Header>
        <PostLinkButton to="/post">롤링 페이퍼 만들기</PostLinkButton>
      </Header>
      <Main />
    </>
  );
}

export default MainPage;
