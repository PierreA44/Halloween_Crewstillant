import { useLoaderData, useParams, NavLink } from "react-router-dom";

function Products() {
  const data = useLoaderData();
  let { id } = useParams();
  const dataById = data[parseInt(id, 10)];
  return (
    <>
      <div className="lonelyProduct">
        <img src={dataById.image} alt={dataById.name} />
        <div className="moreInfo">
          <h1>{dataById.name}</h1>
          <h2>{dataById.category}</h2>
          <p>{dataById.description}</p>
          <p>{dataById.prix} €</p>
          <p>En stock : {dataById.stock}</p>
          <button type="button">
            <NavLink to={"/"}>Retour</NavLink>
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
