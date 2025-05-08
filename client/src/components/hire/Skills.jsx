import React from "react";
import "./Skills.css";
import fulltime from "../../img/icons/FullTime.png";
import illustrator from "../../img/icons/Illustrator.png";
import onsitework from "../../img/icons/OnSiteWork.png";
import photoshop from "../../img/icons/Photoshop.png";
import figma from "../../img/icons/Figma.png";

import communication from "../../img/icons/Communiction.png";
import english from "../../img/icons/English.png";
import javascript from "../../img/icons/JavaScript.png";
import reacticon from "../../img/icons/ReactJS.png";
import seo from "../../img/icons/SEO.png";
import gst from "../../img/icons/GST.png";
import email from "../../img/icons/EmailMarketing.png";
import linkedin from "../../img/icons/LinkedIn.png";

export const Communication = () => (
  <div className="skills communication">
    <img src={communication} alt="" />
    Communication Skills
  </div>
);
export const English = () => (
  <div className="skills english">
    <img src={english} alt="" />
    English
  </div>
);
export const JavaScript = () => (
  <div className="skills js">
    <img src={javascript} alt="" />
    JavaScript
  </div>
);
export const ReactJS = () => (
  <div className="skills reactjs">
    <img src={reacticon} alt="" />
    React JS
  </div>
);
export const SEO = () => (
  <div className="skills seo">
    <img src={seo} alt="" />
    SEO
  </div>
);
export const GST = () => (
  <div className="skills gst">
    <img src={gst} alt="" />
    GST Returns
  </div>
);
export const Email = () => (
  <div className="skills email">
    <img src={email} alt="" />
    E-mail Marketing
  </div>
);
export const LinkedIn = () => (
  <div className="skills linkedin">
    <img src={linkedin} alt="" />
    LinkedIn Marketing
  </div>
);
export const FullTime = () => (
  <div className="skills ft">
    <img src={fulltime} alt="" />
    Full Time
  </div>
);

export const OnSiteWork = () => (
  <div className="skills onsite">
    <img src={onsitework} alt="" />
    On-Site Work
  </div>
);

export const Photoshop = () => (
  <div className="skills photoshop">
    <img src={photoshop} alt="" />
    Photoshop
  </div>
);

export const Illustrator = () => (
  <div className="skills illu">
    <img src={illustrator} alt="" />
    Illustrator
  </div>
);

export const Figma = () => (
  <div className="skills figma">
    <img src={figma} alt="" />
    Figma
  </div>
);
