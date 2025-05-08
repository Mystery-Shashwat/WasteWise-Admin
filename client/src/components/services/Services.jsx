import React from "react";
import ser1 from "../../img/1ser.jpg";
import ser2 from "../../img/2ser.jpg";
import ser3 from "../../img/3ser.jpg";
import ser4 from "../../img/4ser.jpg";
import ser5 from "../../img/5ser.jpg";
import ser6 from "../../img/6ser.jpg";
import WOW from 'wowjs';
import { useEffect } from 'react';

import "./Services.css";

export default function Services() {
  // useEffect(() => {
  //   const wow = new WOW.WOW();
  //   wow.init();
  // }, []);
  return (
    <div id="services">
      <div className="container-fluid  wow fadeInUp"  data-wow-delay=".1s">
        <h1 className="areaser text-center jumbotron">Why<b> Choose </b> Us!?</h1>
        <div className="row ">
          <div className="col-lg-6 col-md-12  wow fadeInUp" data-wow-delay="0.1s">
            <div className="servicebox">
              <div className="row service-box">
                <div className="text-center col-lg-4 col-md-12">
                  <img className="sericon" src={ser1} alt="" />
                </div>
                <div className="text-center sv-1 col-lg-8 col-md-12 ">
                  <h1 className="my-2 serhead">Manc Feed</h1>
                  <p className="sertext">
                    Exclusive Feed of all the MancMint members to share their journey, ideas and explore the world.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="col-lg-6 col-md-12  wow fadeInUp " data-wow-delay="0.1s">
            <div className="servicebox">
              <div className="row service-box">
                <div className="text-center col-lg-4 col-md-12">
                  <img className="sericon" src={ser4} alt="" />
                </div>
                <div className="text-center sv-1 col-lg-8 col-md-12  "  >
                  <h1 className="my-2 serhead">MancLetters</h1>
                  <p className="sertext">
                  Exclusive Newsletters for our members, to keep them updated with events, workshops, all kinds of industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12  wow fadeInUp " data-wow-delay="0.1s">
            <div className="servicebox">
              <div className="row service-box">
                <div className="text-center col-lg-4 col-md-12">
                  <img className="sericon" src={ser5} alt="" />
                </div>
                <div className="text-center sv-1 col-lg-8 col-md-12  " >
                  <h1 className="my-2 serhead">Interactive Communities</h1>
                  <p className="sertext">
                    Our community caters all kinds of niche and all age groups. You can find great opportunities for work, and network with like minded people!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12  wow fadeInUp " data-wow-delay="0.1s">
            <div className="servicebox">
              <div className="row service-box">
                <div className="text-center col-lg-4 col-md-12">
                  <img className="sericon" src={ser6} alt="" />
                </div>
                <div className="text-center sv-1 col-lg-8 col-md-12  "  >
                  <h1 className="my-2 serhead">Practical learning</h1>
                  <p className="sertext">
                    We will be providing cohorts/workshop based learning programs, where you will be trained by experts, and given recognized Certificates to help build a strong resume.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
