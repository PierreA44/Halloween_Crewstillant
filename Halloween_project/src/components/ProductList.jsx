import PropTypes from "prop-types";
import SingleProduct from "./SingleProduct";
import { useState } from "react";

function ProductList({ stockHalloween }) {
  //Création des différents tableau pour générer les maps
  const cats = stockHalloween.filter((c) => c.category === "cat");
  const gnomesAndCitrouilles = stockHalloween.filter(
    (c) => c.category === "gnomes" || c.category === "courges"
  );
  const nains = stockHalloween.filter((c) => c.category === "nains");
  const vedette = stockHalloween.find((e) => e.category === "gnomes");
  const idVedette = stockHalloween.indexOf(vedette);

  //Gestion des filtres avec les checkbox

  const [selectedOption, setSelectedOption] = useState([]);

  const filterHandler = (e) => {
    const value = e.target.value;
    setSelectedOption((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((option) => option !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };

  const filteredData = gnomesAndCitrouilles.filter((e) => {
    if (selectedOption.length === 0) {
      return true;
    } else {
      return selectedOption.includes(e.category);
    }
  });

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
              id={index}
              key={index}
            />
          ))}
        </div>
        <h3>Gnomes et Courges</h3>
        <div className="category">
          <fieldset className="checkboxes">
            <legend>Choose a category</legend>
            <span>
              <input
                type="checkbox"
                onChange={filterHandler}
                checked={selectedOption.includes("gnomes")}
                id="gnomes"
                name="category"
                value="gnomes"
              />
              <label htmlFor="gnomes">Les Gnomes</label>
            </span>
            <span>
              <input
                type="checkbox"
                onChange={filterHandler}
                checked={selectedOption.includes("courges")}
                id="courges"
                name="category"
                value="courges"
              />
              <label htmlFor="courges">Les courges</label>
            </span>
          </fieldset>
          {filteredData.map((e, index) => (
            <SingleProduct
              name={e.name}
              image={e.image}
              prix={e.prix}
              stock={e.stock}
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
