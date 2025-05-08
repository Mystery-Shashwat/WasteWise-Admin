import React from "react";
import "./Creator.css";
import Marquee from "react-fast-marquee";
import image1 from "../../img/Rectangle 96.png";
import image2 from "../../img/image 40.png";
import image3 from "../../img/image 42.png";
import image4 from "../../img/image 35.png";
import image5 from "../../img/image 37.png";
import image6 from "../../img/image 36.png";
import image7 from "../../img/Accenture-logo.png";
import image8 from "../../img/image 41.png";
import image9 from "../../img/image 38.png";
import image10 from "../../img/image 39 .png";



export default function Creators() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,

    
  ];
  return (
    <div style={{ width: "100%",marginTop:"4rem" }} id="mx-auto creator" className="wow fadeInUp" data-wow-delay="0.1s">
        <div className="creators container text-center wow fadeInUp" data-wow-delay="0.2s">
        <h3>Members from:</h3>
    <div className="marquee-container">
      <Marquee pauseOnClick={true} autoFill={true} iterationCount="infinite" speed={120}className="marquee" >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </Marquee>
    </div>
    </div>
    </div>
  );
}
