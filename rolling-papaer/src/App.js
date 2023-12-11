import { Outlet } from "react-router";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default App;
