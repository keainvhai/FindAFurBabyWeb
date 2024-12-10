import sun from "./pic/light_mode.png";
import moon from "./pic/dark_mode.png";
import { useEffect, useState } from "react";
import "./CSS/DarkMode.css";

export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document
      .querySelector("body")
      .setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="dark_mode">
      <label className="toggle">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleDarkMode}
          aria-label="Toggle dark mode"
        />
        <span className="slider">
          <img src={sun} alt="Light Mode" className="icon sun" />
          <img src={moon} alt="Dark Mode" className="icon moon" />
        </span>
      </label>
    </div>
  );
}
