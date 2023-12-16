import CardSection from "./CardSection";

function RollingPaperListPage() {
  return (
    <>
      <nav></nav>
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
