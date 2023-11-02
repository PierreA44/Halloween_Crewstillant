import Products from "./Products";

function ProductList({ stockHalloween }) {
  const cats = stockHalloween.filter((c) => c.category === "cat");
  const gnomesAndCitrouilles = stockHalloween.filter(
    (c) => c.category === "gnomes" || c.category === "courges"
  );
  const nains = stockHalloween.filter((c) => c.category === "nains");

  return (
    <div className="halloween">
      <h2>Nos Produits</h2>
      <div className="products-list">
        <h3>Chats</h3>
        <div className="category">
          {cats.map((e, index) => (
            <Products
              name={e.name}
              image={e.image}
              prix={e.prix}
              stock={e.stock}
              description={e.description}
              key={index}
            />
          ))}
        </div>
        <h3>Gnomes et Courges</h3>
        <div className="category">
          {gnomesAndCitrouilles.map((e, index) => (
            <Products
              name={e.name}
              image={e.image}
              prix={e.prix}
              stock={e.stock}
              description={e.description}
              key={index}
            />
          ))}
        </div>
        <h3>Nains</h3>
        <div className="category">
          {nains.map((e, index) => (
            <Products
              name={e.name}
              image={e.image}
              prix={e.prix}
              stock={e.stock}
              description={e.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
