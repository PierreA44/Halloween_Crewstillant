import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./style.scss";
import { Outlet } from "react-router-dom";
import CountContext from "./components/CountContext";

function App() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  return (
    <CountContext.Provider
      value={{
        count: count,
        setCount: setCount,
        price: price,
        setPrice: setPrice,
      }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CountContext.Provider>
  );
}

export default App;
