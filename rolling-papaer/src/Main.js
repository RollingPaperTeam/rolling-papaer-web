import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RollingPaperListPage from "./pages/rolling-paper-page/RollingPaperListPage";
import RollingPaperPage from "./pages/rolling-paper-page/RolingPaperPage";
import InputMessageContentPage from "./pages/send-message-page/InputMessageContentPage";
import PickReceiverPage from "./pages/send-message-page/PickReceiverPage";
import NotFoundPage from "./pages/NotFoundPage";
import App from "./App";
import { OptionProvider } from "./components/option/OptionContext";

function Main() {
  return (
    <BrowserRouter>
      <OptionProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<MainPage />} />
            <Route path="list" element={<RollingPaperListPage />} />
            <Route path="post">
              <Route index element={<PickReceiverPage />} />
              <Route path=":id" element={<RollingPaperPage />}>
                <Route path="edit" element={<RollingPaperPage />} />
                <Route path="message" element={<InputMessageContentPage />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </OptionProvider>
    </BrowserRouter>
  );
}

export default Main;
