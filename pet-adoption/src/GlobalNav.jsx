// import "./CSS/GlobalNav.css";
import { useState, useEffect } from "react";
import "./CSS/Header.css";
import Hamburger from "./pic/hamburger.png";
// import close from "./pic/close.png";

function GlobalNav({ navTo }) {
  const tabs = [
    { name: "#home", label: "Home" },
    { name: "#adopt", label: "Adopt" },
    { name: "#application", label: "Application" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  //hamuber open/close
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  const toggleMenu = (e) => {
    // setIsOpen(!isOpen);
    if (
      e.type === "click" || // 鼠标点击
      (e.type === "keyup" && (e.key === "Enter" || e.key === " "))
    ) {
      setIsOpen(!isOpen);
      e.preventDefault();
    }
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.target.alt !== "hamburger") {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  //create menu list
  const list = tabs.map((item) => {
    return (
      <li key={item.name} className="global-nav__item">
        {/* if menu is close can't use tab key to select */}

        <a
          className="global-nav__link"
          href={item.name}
          onClick={(e) => navTo(e)}
        >
          {item.label}
        </a>
      </li>
    );
  });

  return (
    <nav>
      <button
        className="nav-btn"
        onClick={toggleMenu}
        onKeyUp={toggleMenu}
        aria-expanded={!isOpen}
      >
        <img src={Hamburger} alt="hamburger" />
      </button>

      <ul className={isOpen ? "global-nav__list active" : "global-nav__list"}>
        {list}
      </ul>
    </nav>
  );
}

export default GlobalNav;
