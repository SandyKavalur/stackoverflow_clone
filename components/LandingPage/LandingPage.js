import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Footer from "../Footer/Footer";

// importing animations
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
// end animations

import styles from "../../styles/Landing.module.scss";
import landing1img from "../../public/assets/landing1img.png";
import landing2img from "../../public/assets/landing2img.png";
import search from "../../public/assets/search.png";

function LandingPage() {
  var userReviewSVG = (
    <svg
      aria-hidden="true"
      className="fc-blue-500 mb16 svg-spot spotQuote"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="#50c6d8"
    >
      <path
        d="M5.01 14.71a5.64 5.64 0 0 1 5.62-5.65h8.75c3.1 0 5.62 2.53 5.62 5.65v19.8l-4.94 8.01a1 1 0 0 1-.85.48h-4.03a1 1 0 0 1-.86-1.5l4.04-6.99h-7.73a5.64 5.64 0 0 1-5.62-5.65V14.7Zm22.99 0a5.61 5.61 0 0 1 5.6-5.65h7.72c3.1 0 5.63 2.53 5.63 5.65v19.8L43 42.45a1 1 0 0 1-.9.55h-4.02a1 1 0 0 1-.88-1.47l3.77-7.02h-7.38A5.61 5.61 0 0 1 28 28.86V14.7Z"
        opacity=".2"
      ></path>
      <path d="M1 11.66A6.64 6.64 0 0 1 7.62 5h8.79a6.64 6.64 0 0 1 6.62 6.66v19.29a2.8 2.8 0 0 1-.42 1.47l-4.47 7.25A2.8 2.8 0 0 1 15.75 41h-2.09a2.8 2.8 0 0 1-2.39-4.27l1.54-2.5a.8.8 0 0 0-.68-1.23h-4.5c-1.9 0-3.57-.94-4.73-2.27A7.59 7.59 0 0 1 1 25.8V11.66ZM7.62 7A4.64 4.64 0 0 0 3 11.66V25.8c0 1.3.53 2.62 1.4 3.61A4.34 4.34 0 0 0 7.62 31h4.5a2.8 2.8 0 0 1 2.4 4.27l-1.54 2.5a.8.8 0 0 0 .68 1.23h2.1a.8.8 0 0 0 .68-.38l4.47-7.25a.8.8 0 0 0 .12-.42v-19.3A4.64 4.64 0 0 0 16.41 7H7.62ZM24 11.66A6.64 6.64 0 0 1 30.63 5h7.75A6.64 6.64 0 0 1 45 11.66V31.5c0 .5-.14 1-.4 1.44l-3.96 6.69A2.8 2.8 0 0 1 38.22 41h-2.07a2.8 2.8 0 0 1-2.39-4.27l1.54-2.5a.8.8 0 0 0-.68-1.23h-4c-1.9 0-3.55-.94-4.72-2.27A7.59 7.59 0 0 1 24 25.8V11.66ZM30.63 7A4.64 4.64 0 0 0 26 11.66V25.8c0 1.3.53 2.62 1.4 3.61A4.34 4.34 0 0 0 30.63 31h3.99A2.8 2.8 0 0 1 37 35.27l-1.54 2.5a.8.8 0 0 0 .68 1.23h2.07a.8.8 0 0 0 .7-.4l3.97-6.68a.8.8 0 0 0 .11-.42V11.66A4.64 4.64 0 0 0 38.38 7h-7.76Z"></path>
    </svg>
  );

  // header blue curve svg
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

  // Animations Section
  // Declaring animation variables
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();

  function callinganimation(myanimation) {
    myanimation.start({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 5,
        bounce: 0.3,
      },
    });
  }

  useEffect(() => {
    if (inView) {
      callinganimation(animation);
    }
    if (!inView) {
      animation.start({ y: "150px", opacity: 0 });
    }
  }, [inView]);

  useEffect(() => {
    if (inView2) {
      callinganimation(animation2);
    }
    if (!inView2) {
      animation2.start({ y: "150px", opacity: 0 });
    }
  }, [inView2]);

  useEffect(() => {
    if (inView3) {
      callinganimation(animation3);
    }
    if (!inView3) {
      animation3.start({ y: "150px", opacity: 0 });
    }
  }, [inView3]);

  useEffect(() => {
    if (inView4) {
      callinganimation(animation4);
    }
    if (!inView4) {
      animation4.start({ y: "150px", opacity: 0 });
    }
  }, [inView4]);
  // end Animations Section

  return (
    <div className={`${styles["landing-container"]}`}>
      <div className={`${styles["svg-container"]}`}>
        <svg viewBox="0 0 800 400" className={`${styles["svg"]}`}>
          <path
            id="curve"
            fill="#50c6d8"
            d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z"
          ></path>
        </svg>
      </div>

      <header>
        <div className="container">
          <div className={`${styles.searchblock}`}>
            <div className={`${styles.searchblockinner}`}>
              <Image src={search} alt="search img" />
              <h5>
                Find the best answer to your technical question, help others
                answer theirs.
              </h5>
              <button className="btn btn-md my-4" href="#!" role="button">
                Join the community
              </button>
            </div>
          </div>
          <div className={`${styles["number-details"]} ${"row"}`}>
            <div className="col-md-3">
              <h3>100+ million</h3>
              <p className="px-3">
                monthly visitors to Stack Overflow & Stack Exchange
              </p>
            </div>
            <div className="col-md-3">
              <h3>45.1+ billion</h3>
              <p className="px-3">Times a developer got help since 2008</p>
            </div>
            <div className="col-md-3">
              <h3>179% ROI</h3>
              <p className="px-3">
                from companies using Stack Overflow for Teams
              </p>
            </div>
            <div className="col-md-3">
              <h3>5,000+</h3>
              <p className="px-3">
                Stack Overflow for Teams instances active every day
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <motion.section ref={ref} animate={animation} id={styles.landing1}>
          <div className="container">
            <div className={`${styles.content1} ${"row flex-center"}`}>
              <div className="col-md-6 text-center text-md-start mt-5">
                <h3
                  className="fs-2 mb-4"
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
                    <h4 className="fw-normal fs-3 mt-3">Drive</h4>
                    <p className="my-1 fs-0 pe-xl-8 pe-3">
                      Drive when you want. Find ooprtunities around you.
                    </p>
                  </div>
                  <div>
                    <h4 className="fw-normal fs-3 mt-3">Ride</h4>
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
                <Image src={landing1img} alt="Landing1 img" />
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section ref={ref2} animate={animation2} id={styles.landing2}>
          <div className="container">
            <div className={`${styles.content1} ${"row flex-center"}`}>
              <div className="col-md-6 mb-4">
                <Image src={landing2img} alt="Landing2 img" />
              </div>
              <div className="col-md-6 text-center text-md-start">
                <h3
                  className="fw-normal fs-2  mb-5"
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
        </motion.section>
        <motion.div ref={ref3} animate={animation3} className="page-section">
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
                  <div className="cardbody">
                    <h5 className="text-secondary">Increase productivity</h5>
                    <p>
                      If somebody somewhere has the right answer, suddenly you
                      have it too. Collaborate better in a remote-first world.
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
                  <div className="cardbody">
                    <h5 className="text-secondary">
                      Accelerate time to market
                    </h5>
                    <p>
                      Shorten the time between initial idea and complete
                      product. Take delays and misinformation out of the
                      equation.
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
                  <div className="cardbody">
                    <h5 className="text-secondary">
                      Protect institutional knowledge
                    </h5>
                    <p>
                      People come and people go, but if you capture their
                      contributions in one central place, that expertise sticks
                      around.
                    </p>
                    <a href="service.html" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref4}
          animate={animation4}
          className={`${styles["user-review-section"]} ${""}`}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-5">
                <div
                  className={`${
                    styles["user-review-card"]
                  } ${"user-review-card"}`}
                  style={{ visibility: "visible" }}
                >
                  <div className="header mb-5">
                    <span>{userReviewSVG}</span>
                    <p className="text-start mt-3">
                      Stack Overflow for Teams has been a resource for our
                      entire company. Not only for developers to solve problems,
                      it’s also enabled our sales field to answer technical
                      questions that help them close deals.
                    </p>
                  </div>
                  <hr />
                  <div className="cardbody">
                    <h5 className="text-secondary text-start">
                      Director of Product Management
                    </h5>

                    <p className="text-start">Microsoft</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-5">
                <div
                  className={`${
                    styles["user-review-card"]
                  } ${"user-review-card"}`}
                  style={{ visibility: "visible" }}
                >
                  <div className="header mb-5">
                    {userReviewSVG}
                    <p className="text-start mt-3">
                      Engineers should help solve the hardest questions, the
                      unknowns, where being familiar with how the product was
                      built is essential. But we don’t want to keep answering
                      solved problems over and over again. That’s where Stack
                      Overflow for Teams really helps.
                    </p>
                  </div>
                  <hr />
                  <div className="cardbody">
                    <h5 className="text-secondary text-start">
                      Director of Engineering
                    </h5>

                    <p className="text-start">Elastic Cloud</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-5">
                <div
                  className={`${
                    styles["user-review-card"]
                  } ${"user-review-card"}`}
                  style={{ visibility: "visible" }}
                >
                  <div className="header mb-5">
                    {userReviewSVG}
                    <p className="text-start mt-3">
                      As we started to use [Stack Overflow for Teams] and saw
                      how nice it was to have a repository of information, we
                      started to see it spread to other teams. Our customer
                      support team started using it, our people success team
                      started using it, next thing we knew, we had [Slack]
                      integrations all over the place.
                    </p>
                  </div>
                  <hr />
                  <div className="cardbody">
                    <h5 className="text-secondary text-start">Engineering</h5>

                    <p className="text-start">Expensify</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-5">
                <div
                  className={`${
                    styles["user-review-card"]
                  } ${"user-review-card"}`}
                  style={{ visibility: "visible" }}
                >
                  <div className="header mb-5">
                    {userReviewSVG}
                    <p className="text-start mt-3">
                      What we love about Stack Overflow for Teams is that it’s a
                      very dynamic tool…there’s just so many ways to use this as
                      a liaison between different teams and different knowledge
                      bases.
                    </p>
                  </div>
                  <hr />
                  <div className="cardbody">
                    <h5 className="text-secondary text-start">
                      Software Engineer
                    </h5>

                    <p className="text-start">Box</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;
