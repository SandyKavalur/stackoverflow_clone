import React from "react";
import styles from "../../styles/NavBar.module.scss";

function NavBar() {
  return (
    <>
      <div className={`${styles.bodyy} ${"container-fluid"}`}>
        <nav
          className={`${styles.navv} ${"navbar navbar-dark navbar-expand-lg"}`}
        >
          <div className="container-fluid">
            <button
              class={`${styles.navtoggle} ${"navbar-toggler"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarMain"
              aria-controls="navbarMain"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarMain">
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
      </div>
    </>
  );
}

export default NavBar;
