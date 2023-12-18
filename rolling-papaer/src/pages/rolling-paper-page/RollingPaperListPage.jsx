import Header from "../../components/header/Header";
import CardSection from "./CardSection";

function RollingPaperListPage() {
  return (
    <>
      <Header children="롤링 페이퍼 만들기" />
      <CardSection children="인기 롤링 페이퍼 TOP10🔥" limit="10" like="like" />
      <CardSection
        children="최근에 만든 롤링 페이퍼 TOP10⭐️️"
        limit="10"
        like=""
      />
    </>
  );
}

export default RollingPaperListPage;
