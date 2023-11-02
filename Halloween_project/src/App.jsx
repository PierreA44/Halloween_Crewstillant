import Footer from "./components/Footer";
import "./style.scss";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
