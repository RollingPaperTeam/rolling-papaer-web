import { Outlet } from "react-router";
import "normalize.css";

function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
