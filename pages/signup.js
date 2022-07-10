import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";


function signup() {
  return (
    <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card ">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">SignUp</h2>
              <p class=" mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" placeholder='Enter Email' class="form-control form-control-lg" />
                {/* <label class="form-label" for="typeEmailX">Email</label> */}
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" placeholder='Enter Password' class="form-control form-control-lg" />
                {/* <label class="form-label" for="typePasswordX">Password</label> */}
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordAgainX" placeholder='Enter Your Password Again'  class="form-control form-control-lg" />
                {/* <label class="form-label" for="typePasswordAgainX">Type Your Password Again</label> */}
              </div>


              <button class="btn btn-outline-info btn-lg px-5" type="submit">SignUp</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGithub} />
          </a>
              </div>

            </div>

            <div>
              <p class="mb-0">Already Registered?
              <Link href="./login"><a  class=" fw-bold">Login</a></Link> 
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default signup