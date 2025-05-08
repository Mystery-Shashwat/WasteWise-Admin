import React from "react";
import saly from "../../img/saly.jpg";
import "./About.css";

export default function About() {
  return (
    <div id="about" className="wow fadeInUp"  data-wow-delay="0.2s">
      <div className="container-fluid about-fluid wow fadeInUp" data-wow-delay="0.2s">
        <div className="row">
          <div className="col-lg-6">
            <img id="abtimg" src={saly} alt="" />
          </div>
          <div className="col-lg-6">
            <h1 className="areaser">About us</h1>
            <p className="abttext">
            MancMint is a commune for every kind of niche, where members can find new opportunities for work and network with like-minded people. We also offer free masterclasses held by industry experts for our members to upskill and stay updated. Additionally, we have paid cohorts/workshops that help in better understanding of skills!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
