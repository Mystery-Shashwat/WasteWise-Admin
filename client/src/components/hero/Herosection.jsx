import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState, useEffect } from 'react';
import dashboard from "../../img/dasboard1.png";
import starimg from "../../img/image 31.png";
import WOW from 'wowjs';
import "./Herosection.css";

function Hero() {
  const texts = ['Earning', 'Learning', 'Networking'];
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
   
    let currentIndex = 0;
    const timeout = 1500; // Timeout in milliseconds

    const displayNextText = () => {
      setCurrentText(texts[currentIndex]);
      currentIndex = (currentIndex + 1) % texts.length;
    };

    const timer = setInterval(displayNextText, timeout);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div className="herodiv wow fadeInUp " data-wow-delay=".1s">
        <div className="hero-box">
          <div className="hero-text-box hero-text">
            <h1>{currentText}</h1>
            <h2>Just Got easier! <img className="str-img" alt="" src={starimg} /></h2>
            <p>
            The Tomorrow’s commune for Cohort Learning, Networking,<br/> Earning and finding growth opportunities</p>
          </div>
          <div className=" hero-img">
            <img width={"740px"} src={dashboard} alt="hero section text" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
