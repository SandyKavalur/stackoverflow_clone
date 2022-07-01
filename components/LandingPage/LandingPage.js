import React from "react";
import styles from "../../styles/Landing.module.scss";

function LandingPage() {
  (function () {
    // Variables
    var $curve = document.getElementById("curve");
    var last_known_scroll_position = 0;
    var defaultCurveValue = 350;
    var curveRate = 3;
    var ticking = false;
    var curveValue;

    // Handle the functionality
    function scrollEvent(scrollPos) {
      if (scrollPos >= 0 && scrollPos < defaultCurveValue) {
        curveValue = defaultCurveValue - parseFloat(scrollPos / curveRate);
        $curve.setAttribute(
          "d",
          "M 800 300 Q 400 " + curveValue + " 0 300 L 0 0 L 800 0 L 800 300 Z"
        );
      }
    }

    // Scroll Listener
    // https://developer.mozilla.org/en-US/docs/Web/Events/scroll
    window.addEventListener("scroll", function (e) {
      last_known_scroll_position = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(function () {
          scrollEvent(last_known_scroll_position);
          ticking = false;
        });
      }

      ticking = true;
    });
  })();

  return (
    <div className={`${styles["landing-container"]}`}>
      <div className={`${styles["svg-container"]}`}>
        <svg viewbox="0 0 800 400" className={`${styles["svg"]}`}>
          <path
            id="curve"
            fill="#50c6d8"
            d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z"
          ></path>
        </svg>
      </div>

      <header>
        <h1>This is a header title</h1>
        <h3>Here you are, scroll down.</h3>
      </header>

      <main>
        <p>And the main section.</p>
      </main>

      <footer>
        <p>And, the footer.</p>
        <small>
          🕷 Wish you luck, <a href="http://armantaherian.com">Arman</a>.
        </small>
      </footer>
    </div>
  );
}

export default LandingPage;
