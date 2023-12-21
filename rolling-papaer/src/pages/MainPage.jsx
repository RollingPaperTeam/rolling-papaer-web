import Header from "../components/header/Header";
import Main from "./Main";
import { Link } from "react-router-dom";
import ButtonStyle from "../components/button/ButtonStyle";

function MainPage() {
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
      <Main />
    </>
  );
}

export default MainPage;
