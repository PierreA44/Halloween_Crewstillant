import { useLoaderData } from "react-router-dom";
import ProductList from "../components/ProductList";

function Home() {
  const data = useLoaderData();

  return (
    <>
      <ProductList stockHalloween={data} />
    </>
  );
}

export default Home;
