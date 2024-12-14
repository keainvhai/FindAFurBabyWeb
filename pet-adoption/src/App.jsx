import { useState } from "react";
import Header from "./Header";

import Home from "./Home";
import Adopt from "./Adopt";
import Application from "./Application";
import Footer from "./Footer";
import "./CSS/index.css";
import "./CSS/App.css";

function App() {
  const [page, setPage] = useState("#home");

  function navTo(event) {
    event.preventDefault();
    const hash = event.target.getAttribute("href");
    setPage(hash);
  }

  return (
    <>
      <a className="skiplink" href="#main">
        Skip to Content
      </a>
      <Header navTo={navTo} />

      <main id="main">
        {page === "#home" && <Home navTo={navTo} />}
        {page === "#adopt" && <Adopt navTo={navTo} />}
        {page === "#application" && <Application />}
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default App;
