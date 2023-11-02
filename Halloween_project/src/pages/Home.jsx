import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

import { useState } from "react";

function Home() {
  const data = useLoaderData();

  const [count, setCount] = useState(0);
  return (
    <>
      <Header count={count} />
      <ProductList stockHalloween={data} count={count} setCount={setCount} />
    </>
  );
}

export default Home;
