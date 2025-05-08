import React from "react";

const Services = (props) => {
  return (
    <div className="d-flex p-2 align-items-center service">
      <img
        src={props.img}
        alt=""
        height={130}
        width={130}
        className="img-fluid m-4"
      />
      <div className="details">
        <span className="badge bg-primary">{props.category}</span>
        <div
          className="heading my-2"
          style={{ fontSize: "20px", fontWeight: "500" }}
        >
          {props.heading}
          <span>{props.headingDesc}</span>
        </div>
        <div
          className="length mt-2"
          style={{ fontWeight: "600", color: "var(--primary)" }}
        >
          {getDuration(props)}
        </div>
        <div className="progress mt-3 my-auto" style={{ height: "8px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: props.progress, background: props.progressColor }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="more-options"></div>
    </div>
  );
};

function getDuration(props) {
  if (props.length.episodes) {
    return (
      <div>
        <img src="/images/icons/clock.png" alt="" className="me-2 my-auto" />
        {props.length.episodes} episodes
      </div>
    );
  } else if (props.length.profiles) {
    return (
      <div className="d-flex">
        {props.length.profiles.map((path, index) => {
          if (path.includes("+") && path.length < 10) {
            return (
              <div
                className="rounded-circle bg-dark text-light position-relative border border-2 border-white d-flex justify-content-center align-items-center"
                style={{ left: `${index * -10}px`,height:"35px", width:"35px" }}
              >
                {path}
              </div>
            );
          } else {
            return (
              <img
                src={path}
                alt="profile"
                className="rounded-circle position-relative border border-white  border-2"
                height={35}
                width={35}
                style={{ left: `${index * -10}px`,objectFit: "cover" }}
                key={index}
              />
            );
          }
        })}
      </div>
    );
  } else if (props.length.time) {
    return (
      <div>
        <img src="/images/icons/clock.png" alt="" className="me-2 my-auto" />
        {props.length.time} Hrs
      </div>
    );
  }
}

export default Services;
