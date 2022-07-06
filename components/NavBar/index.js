import React from "react";
import styles from "../../styles/NavBar.module.scss";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <div className={`${styles.bodyy} ${"container-fluid"}`}>
        <nav
          className={`${styles.navv} ${"navbar navbar-dark navbar-expand-lg"}`}
        >
          <div className="container-fluid">
            <button
              className={`${styles.navtoggle} ${"navbar-toggler"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarMain"
              aria-controls="navbarMain"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="nav navbar-nav d-flex justify-content-center">
                <li>
                  <a id="len1" className={styles.hoverable} href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a id="len2" className={styles.hoverable} href="#">
                    About
                  </a>
                </li>
                <li>
                  <a id="len3" className={styles.hoverable} href="#">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a id="len4" className={styles.hoverable} href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div> */}
    </>
  );
}

export default NavBar;
