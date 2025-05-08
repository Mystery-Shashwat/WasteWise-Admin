import React from "react";
import joinimg from "../../img/Saly-13.png";
import "./Join.css";

export default function Join() {
  return (
    <div id="joinbox" className=" wow fadeInUp" data-wow-delay=".1s">
      <div className="join container">
        <div className="row ">
          <div className="col-lg-6 col-md-12">
            <img
              className="joinimg mx-auto"
              width="350px"
              height="350px"
              
              src={joinimg}
              alt="join"
            />
          </div>
          <div className="col-lg-6 col-md-12 row-join">
            <h3 className="jointext">
              Grow with the <b>MancMint</b> community and upskill yourself!
            </h3>
            <button className="joinbtn btn-lg btn-dark btn">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
