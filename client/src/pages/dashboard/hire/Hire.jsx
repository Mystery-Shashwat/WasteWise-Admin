import React, { useState, useEffect } from "react";
import hireavatar from "../../../img/icons/hireavatar.png";
import {
  FullTime,
  OnSiteWork,
  Photoshop,
  Illustrator,
  Figma,
  LinkedIn,
  GST,
  Email,
  SEO,
  ReactJS,
  JavaScript,
  English,
  Communication,
} from "../../../components/hire/Skills";

import "./hire.css";

const Hire = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDateAndDay = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const formattedDate = now.toLocaleDateString(undefined, options);

      setCurrentDate(formattedDate);
    };

    updateDateAndDay();
    const interval = setInterval(updateDateAndDay, 1000 * 60); // Update every minute

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="https://shashan-k-weather-app.netlify.app/"
        title="External Page"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default Hire;
