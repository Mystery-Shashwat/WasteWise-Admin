import React from "react";
import "./Chatcomponent.css";
import { useEffect, useState } from "react";
import ChatBody from "./chatBody/ChatBody";
const Chatcomponent = () => {
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
    <div className="__main">
      <div className="payments-nav">
        <div className="payments-box1">
          <div className="payments-box1-text">
            <h1 className="mainpaymentheading">Personal Messages</h1>{" "}
            <span>{currentDate}</span>
          </div>
          <div className="payments-box1-search">
            <div className="form">
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control form-input"
                placeholder="Search"
              ></input>
            </div>
          </div>
        </div>
      </div>

      <ChatBody />
    </div>
  );
};

export default Chatcomponent;
