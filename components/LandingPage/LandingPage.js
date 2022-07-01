import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Landing.module.scss";
import landing1img from "../../public/assets/landing1img.png";
import landing2img from "../../public/assets/landing2img.png";

function LandingPage() {
  useEffect(() => {
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
  }, []);

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
        <section id={styles.landing1}>
          <div className="container">
            <div className={`${styles.content1} ${"row flex-center"}`}>
              <div className="col-md-6 text-center text-md-start">
                <h3
                  className="fw-normal fs-2"
                  data-zanim-xs='{"delay":0.3}'
                  style={{ transform: `translate(0px, 0px)`, opacity: 1 }}
                >
                  Your safety is always <br />a top priority
                </h3>
                <p
                  className="fs-0 pe-xl-8"
                  data-zanim-xs='{"delay":0.5}'
                  style={{ transform: `translate(0px, 0px)`, opacity: 1 }}
                >
                  We are committed to help drivers and riders get where they
                  want to go with confidence
                </p>
                <div className="d-flex justify-content-space-between align-item-center my-3 mt-2">
                  <div>
                    <h4 className="fw-normal fs-3">Drive</h4>
                    <p className="my-1 fs-0 pe-xl-8">
                      Drive when you want. Find ooprtunities around you.
                    </p>
                  </div>
                  <div>
                    <h4 className="fw-normal fs-3">Ride</h4>
                    <p className="my-1 fs-0 pe-xl-8">
                      Tap your phone. Get where you're headed
                    </p>
                  </div>
                </div>
                <button
                  className="btn btn-sm btn-primary my-4 me-1"
                  href="#!"
                  role="button"
                >
                  Get started
                </button>
                <a
                  className="btn btn-sm my-2 btn-default"
                  href="#"
                  role="button"
                >
                  Questions? Talk to our team
                  <svg
                    className={`${
                      styles.content1svg
                    } ${"svg-inline--fa fa-arrow-right fa-w-14 ms-2"}`}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="col-md-6 mb-4">
                {/* <img className="w-100" src={{ landing1img }} alt="..." /> */}
                <Image src={landing1img} alt="Landing1 img" />
              </div>
            </div>
          </div>
        </section>
        <section id={styles.landing2}>
          <div className="container">
            <div className={`${styles.content1} ${"row flex-center"}`}>
              <div className="col-md-6 mb-4">
                <Image src={landing2img} alt="Landing2 img" />
              </div>
              <div className="col-md-6 text-center text-md-start">
                <h3
                  className="fw-normal fs-2"
                  data-zanim-xs='{"delay":0.3}'
                  style={{ transform: `translate(0px, 0px)`, opacity: 1 }}
                >
                  Move the way you want, <br /> Roads are open
                </h3>
                <p
                  className="fs-0 pe-xl-8"
                  data-zanim-xs='{"delay":0.5}'
                  style={{ transform: `translate(0px, 0px)`, opacity: 1 }}
                >
                  We are committed to help drivers and riders get where they
                  want to go with confidence
                </p>
                <div className="d-flex justify-content-space-between align-item-center my-3 mt-2">
                  <div>
                    <h4 className="fw-normal fs-3">Route</h4>
                    <p className="my-1 fs-0 pe-xl-8 pe-3">
                      Route among the safe roads. Find what's waiting for you.
                    </p>
                  </div>
                  <div>
                    <h4 className="fw-normal fs-3">Share</h4>
                    <p className="my-1 fs-0 pe-xl-8">
                      Your caring gets it's way. Let your people know.
                    </p>
                  </div>
                </div>
                <button
                  className="btn btn-sm btn-primary my-4 me-1"
                  href="#!"
                  role="button"
                >
                  Get started
                </button>
                <a
                  className="btn btn-sm my-2 btn-default"
                  href="#"
                  role="button"
                >
                  Questions? Talk to our team
                  <svg
                    className={`${
                      styles.content1svg
                    } ${"svg-inline--fa fa-arrow-right fa-w-14 ms-2"}`}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="page-section">
          <div className="container">
            <div className={styles.cardstopcontainer}></div>
            <div className="row">
              <div className="col-lg-4">
                <div
                  className={`${styles["card-service"]} ${"card-service"}`}
                  style={{ visibility: "visible" }}
                >
                  <div className="header">
                    <Image src={landing1img} alt="Landing1 img" />
                  </div>
                  <div className="body">
                    <h5 className="text-secondary">SEO Consultancy</h5>
                    <p>
                      We help you define your SEO objective &amp; develop a
                      realistic strategy with you
                    </p>
                    <a href="service.html" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className={`${styles["card-service"]} ${"card-service"}`}
                  style={{ visibility: "visible" }}
                >
                  <div className="header">
                    <Image src={landing1img} alt="Landing1 img" />
                  </div>
                  <div className="body">
                    <h5 className="text-secondary">Content Marketing</h5>
                    <p>
                      We help you define your SEO objective &amp; develop a
                      realistic strategy with you
                    </p>
                    <a href="service.html" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className={`${styles["card-service"]} ${"card-service"}`}
                  style={{ visibility: "visible" }}
                >
                  <div className="header">
                    <Image src={landing1img} alt="Landing1 img" />
                  </div>
                  <div className="body">
                    <h5 className="text-secondary">Keyword Research</h5>
                    <p>
                      We help you define your SEO objective &amp; develop a
                      realistic strategy with you
                    </p>
                    <a href="service.html" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
