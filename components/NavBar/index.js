import React, { useState, useEffect } from "react";
import Login from "../../pages/login";
import Signup from "../../pages/signup";
import styles from "../../styles/NavBar.module.scss";

function NavBar({ handleToggle, isClosed }) {
  return (
    <>
      <div className="container-fluid px-0 ">
        <header
          className={`${styles["sticky-header"]} ${"border-bottom shadow"}`}
        >
          <nav className="navbar pt-3 navbar-light bg-light">
            <div className="container-fluid align-items-center d-flex">
              <div className="flex-grow-1 d-flex justify-content-around">
                <div className="flex-shrink-1 d-flex">
                  <button
                    type="button"
                    className={
                      isClosed
                        ? "hamburger animated fadeInLeft is-closed "
                        : "hamburger animated fadeInLeft is-open "
                    }
                    data-toggle="offcanvas"
                    onClick={handleToggle}
                  >
                    <span className="hamb-top"></span>
                    <span className="hamb-middle"></span>
                    <span className="hamb-bottom"></span>
                  </button>
                  <a
                    href="#"
                    className="d-flex align-items-center col-lg-4 h-75 link-dark text-decoration-none"
                  >
                    <i className="bi bi-bootstrap fs-2 text-dark"></i>
                  </a>
                </div>
                <form className="w-50 me-3">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search..."
                  />
                </form>
                <div className="flex-shrink-0 dropdown">
                  <a
                    href="#"
                    className="d-block link-dark text-decoration-none dropdown-toggle"
                    id="dropdownUser2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://via.placeholder.com/28?text=!"
                      alt="user"
                      width="32"
                      height="32"
                      className="rounded-circle"
                    />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end shadow"
                    aria-labelledby="dropdownUser2"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        New project...
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

export default NavBar;
