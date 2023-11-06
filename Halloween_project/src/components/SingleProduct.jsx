import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import CountContext from "./CountContext";

function SingleProduct({ name, image, prix, stock, id }) {
  const [stockProduct, setStockProduct] = useState(stock);
  const { count, setCount, price, setPrice } = useContext(CountContext);

  const handleClick = () => {
    setStockProduct(stockProduct - 1);
    setCount(count + 1);
    setPrice(price + prix);
  };

  return (
    <div className="product">
      {stockProduct < 3 ? (
        <p className="alarm">Derniers articles disponible!</p>
      ) : null}
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className="description">
        <div className="price">
          <p>{prix} € </p>
          {stockProduct == 0 ? null : (
            <button type="button" onClick={handleClick}>
              Ajouter au panier
            </button>
          )}
        </div>
        <div className="stock">
          {stockProduct > 0 ? (
            <>
              <p>stock : {stockProduct}</p>
              <button type="button">
                <NavLink to={`/product/${id}`}>En savoir plus</NavLink>
              </button>
            </>
          ) : (
            <p>article épuisé</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

SingleProduct.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  prix: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
