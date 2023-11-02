import logo from "./../assets/logo.jpg";

function Header() {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <h1>Au Chaudron Baveur</h1>
      <p>Mon Panier</p>
    </nav>
  );
}

export default Header;
