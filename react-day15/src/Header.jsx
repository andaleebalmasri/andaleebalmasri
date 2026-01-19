import logo from "./images/logo.png";
function Header() {
  return (
    <header className="header">
      <h1>Volunteer </h1>
      <img src={logo} alt="Volunity Logo" className="logo"/>
    </header>
  );
}
export default Header;