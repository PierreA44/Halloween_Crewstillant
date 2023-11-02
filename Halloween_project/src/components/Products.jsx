import { useState } from "react";

function Products({ name, image, prix, stock, description }) {
  const [stockProduct, setStockProduct] = useState(stock);

  const handleClick = () => {
    setStockProduct(stockProduct - 1);
  };

  return (
    <div className="product">
      {stockProduct < 3 ? (
        <p className="alarm">Derniers articles disponible!</p>
      ) : null}
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className="description">
        <p>{description}</p>
        <div className="price">
          <p>{prix} € </p>
          <button type="button" onClick={handleClick}>
            Ajouter au panier
          </button>
        </div>
        <div className="stock">
          <p>stock : {stockProduct}</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
