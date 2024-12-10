import GlobalNav from "./GlobalNav";
import "./CSS/Header.css";
import Logo from "./pic/logo.jpg";
import DarkMode from "./DarkMode";

function Header({ navTo }) {
  const handleKeyPress = (e) => {
    if (e.type === "click" || e.key === "Enter" || e.key === " ") {
      navTo({
        preventDefault: () => {},
        target: { getAttribute: () => "#home" },
      });
    }
  };
  return (
    <header className="header">
      <nav className="logo-nav">
        <img
          src={Logo}
          className="header__logo"
          alt="Logo"
          tabIndex="0"
          onClick={handleKeyPress}
          onKeyUp={handleKeyPress}
        />
        <h2 className="header__title">Find A Fur Baby</h2>
        <DarkMode />
      </nav>

      <GlobalNav navTo={navTo} />
    </header>
  );
}

export default Header;
