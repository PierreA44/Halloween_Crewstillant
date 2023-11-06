import PropTypes from "prop-types";
import logo from "./../assets/logo.jpg";
import { useContext } from "react";
import CountContext from "./CountContext";

function Header() {
  const { count, price } = useContext(CountContext);

  return (
    <nav>
      <img src={logo} alt="logo" />
      <h1>Au Chaudron Baveur</h1>
      <p>
        Mon Panier : {count} {count > 1 ? "éléments" : "élément"} <br />
        Montant total : {price} €
      </p>
    </nav>
  );
}

export default Header;

Header.propTypes = {
  count: PropTypes.number.isRequired,
};
