import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Login.module.scss";

function Signup() {
  return (
    <section className="vh-100 gradient-custom">
      <div className=" py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-sm-12">
            <div className="card ">
              <button
                type="button"
                className={`${styles.btnClose} ${"btn-close mt-3 me-3"}`}
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="card-body p-5 text-center">
                <div className="px-lg-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">SignUp</h2>
                  <p className=" mb-5">Please enter your login and password!</p>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="EmailXSignup"
                      placeholder="Enter Email"
                      className="form-control form-control-lg"
                    />
                    {/* <label className="form-label" for="typeEmailX">Email</label> */}
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="PasswordXSignup"
                      placeholder="Enter Password"
                      className="form-control form-control-lg"
                    />
                    {/* <label className="form-label" for="typePasswordX">Password</label> */}
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="PasswordAgainXSignup"
                      placeholder="Enter Your Password Again"
                      className="form-control form-control-lg"
                    />
                    {/* <label className="form-label" for="typePasswordAgainX">Type Your Password Again</label> */}
                  </div>

                  <button
                    className="btn btn-outline-info btn-lg px-5"
                    type="submit"
                  >
                    SignUp
                  </button>

                  <div
                    className={`${
                      styles.socialLinks
                    } ${"d-flex justify-content-center text-center mt-4 pt-1"}`}
                  >
                    <a href="" className="me-4 text-reset">
                      <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a href="" className="me-4 text-reset">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="" className=" text-reset">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>

                <div>
                  <p className="mb-0">
                    Already Registered?
                    <Link href="/login">
                      <a className=" fw-bold">Login</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
