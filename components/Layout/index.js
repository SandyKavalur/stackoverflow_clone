import React, { useState, useEffect } from "react";
import Dashboard from "../Dashboard";
import NavBar from "../Navbar";
import useWindowSize from "../utils/useWindowSize";

import Footer from "../Footer";
import { faL } from "@fortawesome/free-solid-svg-icons";
// import { slide as Menu } from "react-burger-menu";

function Layout({ Component, pageProps }) {
  const { width } = useWindowSize();
  const [isClosed, setisClosed] = useState(false);

  const handleToggle = (event) => {
    setisClosed(!isClosed);
  };

  return (
    <>
      <div id="wrapper" className={isClosed ? "" : "toggled"}>
        <Dashboard
          handleToggle={handleToggle}
          isClosed={isClosed}
          setisClosed={setisClosed}
        />
        <div id="page-content-wrapper">
          <NavBar handleToggle={handleToggle} isClosed={isClosed} />
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
