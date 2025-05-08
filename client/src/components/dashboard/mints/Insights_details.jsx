import React from "react";

const Insights_details = (props) => {
  return (
    <div className="detail">
      <div>
        <img src={`${props.icon}`} alt="icon" className="me-2 my-3" />
        <span>{props.heading}</span>
      </div>
      <h1 className="fw-bold">{props.data}</h1>
      <div class="progress my-3" style={{ height: "2px" }}>
        <div
          class="progress-bar"
          role="progressbar"
          style={{ width: props.progress,background:props.progressColor }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default Insights_details;
