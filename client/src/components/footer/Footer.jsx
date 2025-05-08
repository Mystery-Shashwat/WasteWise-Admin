import React from "react";
import logo from "../../img/navlogo.png";
import twitter from "../../img/twitter.png";
import instagram from "../../img/instagram.png";
import linkedin from "../../img/linkedin.png";
import googleplay from "../../img/googleplay.png";
import appstore from "../../img/appstore.png";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className=" wow fadeInUp"data-wow-delay="0.1s">
      <div className="container" >
        <div className="row">
          <div className="col-lg-6">
            <div className="footercol1">
              <img className="footer-icon" src={logo} alt="mancmint logo" />
              <h3 className="my-auto">MancMint</h3>
            </div>
            <p className="footertext">
            MancMint is a tomorrow’s commune for Cohort <br/> Learning, Networking, Earning and finding <br/> growth opportunities!
            </p>
          </div>
          <div className="footercol2 col-lg-2 col-md-4">
            <ul className="footerlinks">
              <li>
                <h5>Company</h5>
              </li>
              <li>
                <a href="/"> About</a>
              </li>
              <li>
                <a href="/"> Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="footercol3 col-lg-2 col-md-4">
            <ul className="footerlinks">
              <li>
                <h5>Other Links</h5>
              </li>
              <li>
                <a href="/"> Free Masterclass</a>
              </li>
              <li>
                <a href="/"> Blog</a>
              </li>
              <li>
                <a href="/">Cohort</a>
              </li>
            </ul>
          </div>
          <div className="footercol4 col-lg-2 col-md-4">
            <div className="social-box">
              <h5>Social</h5>
              <div className="sociallinks">
                <a href="/">
                  <img
                    style={{ width: "43px", height: "43px" }}
                    src={twitter} className="social-ico"
                    alt=""
                  />
                </a>
                <a href="/">
                  <img
                    style={{ width: "52px", height: "51px" }}
                    src={instagram} className="social-ico"
                    alt=""
                  />
                </a>
                <a href="/">
                  <img
                    style={{ width: "43px", height: "43px" ,backgroundSize:"cover"}}
                    src={linkedin} className="social-ico"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="downloadbtn">
          <h2 className="my-auto download-text">Download our Application</h2>
          <div className="downloadimg">
            <img src={googleplay} alt="" />
            <img src={appstore} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
