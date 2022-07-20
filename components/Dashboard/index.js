import React, { useState, useEffect } from "react";
import useWindowSize from "../utils/useWindowSize";
import Login from "../../pages/login";
import Signup from "../../pages/signup";

import { faL } from "@fortawesome/free-solid-svg-icons";

function Dashboard({ handleToggle, isClosed, setisClosed }) {
  const { width } = useWindowSize();

  useEffect(() => {
    width < 1024 ? setisClosed(true) : setisClosed(false);
  }, [width]);

  return (
    <>
      <nav
        className="navbar navbar-inverse fixed-top"
        id="sidebar-wrapper"
        role="navigation"
      >
        <ul className="nav sidebar-nav">
          <div className="sidebar-header">
            {width < 1024 ? (
              <button
                type="button"
                className={
                  isClosed
                    ? "sidebar-close-btn animated fadeInLeft is-closed "
                    : "sidebar-close-btn animated fadeInLeft is-open "
                }
                data-toggle="offcanvas"
                onClick={handleToggle}
              >
                <span className="sidebar-close">x</span>
              </button>
            ) : (
              ""
            )}
            <div className="sidebar-brand">
              <a href="#">Brand</a>
            </div>
          </div>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li className="dropdown">
            <a
              href="#works"
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
              id="dropdownMenuButton1"
            >
              Works <span className="caret"></span>
            </a>
            <ul
              aria-labelledby="dropdownMenuButton1"
              className="dropdown-menu animated fadeInLeft"
              role="menu"
            >
              <div className="dropdown-header">Dropdown heading</div>
              <li>
                <a className="dropdown-item" href="#pictures">
                  Pictures
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#videos">
                  Videeos
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#books">
                  Books
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#art">
                  Art
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#awards">
                  Awards
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#followme">Follow me</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Dashboard;
