import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RollingPaperListPage from "./pages/rolling-paper-page/RollingPaperListPage";
import RollingPaperPage from "./pages/rolling-paper-page/RolingPaperPage";
import InputMessageContentPage from "./pages/send-message-page/InputMessageContentPage";
import PickReceiverPage from "./pages/send-message-page/PickReceiverPage";
import NotFoundPage from "./pages/NotFoundPage";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
      --purple1: #F8F0FF;
      --purple2: #ECD9FF;
      --purple3: #DCB9FF;
      --purple4: #C894FD;
      --purple5: #AB57FF;
      --purple6: #9935FF;
      --purple7: #861DEE;
      --purple8: #6E0AD1;
      --purple9: #5603A7;
    
      --orange1: #FFF0D6;
      --orange2: #FFE2AD;
      --orange3: #FFC583;
      --orange4: #FFAE65;
      --orange5: #FF8832;
    
      --blue1: #E2F5FF;
      --blue2: #B1E4FF;
      --blue3: #7CD2FF;
      --blue4: #34B9FF;
      --blue5: #00A2FE;
    
      --green1: #E4FBDC;
      --green2: #D0F5C3;
      --green3: #9BE282;
      --green4: #60CF37;
      --green5: #2BA600;
    
      --gray1: #F6F6F6;
      --gray2: #EEE;
      --gray3: #CCC;
      --gray4: #999;
      --gray5: #555;
      --gray6: #4A4A4A;
      --gray7: #3A3A3A;
      --gray8: #2B2B2B;
      --gray9: #181818;
    
      --white: #FFFFFF;
      --black: #000;
      --error: #DC3A3A;
      --surface: #F6F8FF;
  }
  html {
    font-size: 62.5%;
  }
  * {
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
`;
function Main() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="list" element={<RollingPaperListPage />} />
          <Route path="post">
            <Route index element={<InputMessageContentPage />} />
            <Route path=":id">
              <Route index  element={<RollingPaperPage />}/>
              <Route path="edit" element={<RollingPaperPage />} />
              <Route path="message" element={<PickReceiverPage />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
