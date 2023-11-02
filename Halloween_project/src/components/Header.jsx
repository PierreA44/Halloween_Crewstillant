import PropTypes from "prop-types";
import logo from "./../assets/logo.jpg";

function Header({ count }) {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <h1>Au Chaudron Baveur</h1>
      <p>
        Mon Panier : {count} {count > 1 ? "éléments" : "élément"}
      </p>
    </nav>
  );
}

export default Header;

Header.propTypes = {
  count: PropTypes.number.isRequired,
};
