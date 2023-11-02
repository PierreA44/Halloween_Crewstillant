import PropTypes from "prop-types";
import SingleProduct from "./SingleProduct";

function ProductList({ stockHalloween, count, setCount }) {
  const cats = stockHalloween.filter((c) => c.category === "cat");
  const gnomesAndCitrouilles = stockHalloween.filter(
    (c) => c.category === "gnomes" || c.category === "courges"
  );
  const nains = stockHalloween.filter((c) => c.category === "nains");
  const vedette = stockHalloween.find((e) => e.category === "gnomes");
  const idVedette = stockHalloween.indexOf(vedette);

  return (
    <div className="halloween">
      <h2>Nos Produits</h2>
      <div className="products-list">
        <h3>En Vedette</h3>
        <div className="category">
          <SingleProduct
            name={vedette.name}
            image={vedette.image}
            prix={vedette.prix}
            stock={vedette.stock}
            id={idVedette}
            count={count}
            setCount={setCount}
          />
        </div>
        <h3>Chats</h3>
        <div className="category">
          {cats.map((e, index) => (
            <SingleProduct
              name={e.name}
              image={e.image}
              prix={e.prix}
              stock={e.stock}
              count={count}
              setCount={setCount}
              id={index}
              key={index}
            />
          ))}
        </div>
        <h3>Gnomes et Courges</h3>
        <div className="category">
          {gnomesAndCitrouilles.map((e, index) => (
            <SingleProduct
              name={e.name}
              image={e.image}
              prix={e.prix}
              stock={e.stock}
              count={count}
              setCount={setCount}
              id={index}
              key={index}
            />
          ))}
        </div>
        <h3>Nains</h3>
        <div className="category">
          {nains.map((e, index) => (
            <SingleProduct
              name={e.name}
              image={e.image}
              prix={e.prix}
              stock={e.stock}
              count={count}
              setCount={setCount}
              id={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;

ProductList.propTypes = {
  stockHalloween: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};
