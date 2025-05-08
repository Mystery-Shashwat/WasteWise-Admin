import React from "react";
import Herosection from "../../components/hero/Herosection";
import Creator from "../../components/creators/Creator";
import About from "../../components/about/About";
import Services from "../../components/services/Services";
import Join from "../../components/join/Join";


import "./Homepage.css";
import VideoUploader from "../../components/Delete/delete";

const Homepage = () => {
  return (
    <>
      <Herosection />
      <Creator />
      <About />
      <Services />
      <Join />
    </>
  );
};

export default Homepage;
