import Header from "../../components/header/Header";
import CardSection from "./CardSection";
import { Link } from "react-router-dom";
import ButtonStyle from "../../components/button/ButtonStyle";
import LinkButton from "../../components/button/LinkButton";

function RollingPaperListPage() {
  return (
    <>
      <Header>
        <Link to="/post">
          <ButtonStyle
            $outlined="outlined"
            fontSize="fontSize16"
            $borderRadius="borderRadius6"
            size="medium"
            $hover="outlined"
            $active="outlined"
            $focus="outlined"
          >
            롤링 페이퍼 만들기
          </ButtonStyle>
        </Link>
      </Header>
      <CardSection children="인기 롤링 페이퍼 TOP10🔥" limit="10" like="like" />
      <CardSection
        children="최근에 만든 롤링 페이퍼 TOP10⭐️️"
        limit="10"
        like=""
      />
      <LinkButton to="/post">나도 만들어보기</LinkButton>
    </>
  );
}

export default RollingPaperListPage;
