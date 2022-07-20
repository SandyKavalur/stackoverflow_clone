import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Login.module.scss";

function Login() {
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
              <div className="card-body text-center p-5">
                <div className="px-lg-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className=" mb-5">Please enter your login and password!</p>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="EmailXLogin"
                      placeholder="Enter Email"
                      className="form-control form-control-lg"
                    />
                    {/* <label className="form-label" for="typeEmailX">Email</label> */}
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="PasswordXLogin"
                      placeholder="Enter Password"
                      className="form-control form-control-lg"
                    />
                    {/* <label className="form-label" for="typePasswordX">Password</label> */}
                  </div>

                  <p className="small mb-5 pb-lg-2">
                    <a className="" href="#!">
                      Forgot password?
                    </a>
                  </p>

                  <button
                    className="btn btn-outline-info btn-lg px-5"
                    type="submit"
                  >
                    Login
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
                    Don't have an account?
                    <Link href="/signup">
                      <a className=" fw-bold">Sign Up</a>
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

export default Login;
