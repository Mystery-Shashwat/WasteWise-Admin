import React from "react";
import "./css/pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-box">
      <div className="heading">
        <h1>
          MancMint <span>Plus</span>
        </h1>
        <h1>
          Experience Growth with <br /> MancMint
        </h1>
      </div>
      <div className="our_services">
        <div className="service">
          <h4>1 on 1 Consultation</h4>
          <p>
            You will be having 1 on 1 interaction with our guests and guided by
            our experts when in need for upping your content game, or finding
            ways to monetize your skills
          </p>
        </div>
        <div className="service">
          <h4>Access to all Cohorts</h4>
          <p>
            You will be having access to all the courses, with no extra cost.
            The validity may vary from plan to plan
          </p>
        </div>
        <div className="service">
          <h4>Paid Communities</h4>
          <p>
            Exclusive Communities for our plus members on Stock markets &
            Crypto, Designing, Web3 and Startups
          </p>
        </div>
        <div className="service">
          <h4>Free Access to events</h4>
          <p>Free Access to all MancMint offline events and meetups</p>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center w-100">
        <button className="primary-button mt-4">Know more</button>
      </div>
      <div className="my-5 py-3 pb-5">
        <hr />
      </div>
      <div className="plans">
        <div className="starter">
          <h6 className="m-0">START</h6>
          <h1>Free</h1>
          <ul>
            <li className="my-3">
              <img
                src="/images/icons/green tick icon.png"
                alt=""
                height={"25px"}
                className="me-2"
              />
              Community access for upskilling in all niches
            </li>
            <li className="my-3">
              <img
                src="/images/icons/green tick icon.png"
                alt=""
                height={"25px"}
                className="me-2"
              />
              MancFeed for networking with other members
            </li>
            <li className="my-3">
              <img
                src="/images/icons/green tick icon.png"
                alt=""
                height={"25px"}
                className="me-2"
              />
              Unlimited access to Free Masterclasses
            </li>
            <li className="my-3">
              <img
                src="/images/icons/green tick icon.png"
                alt=""
                height={"25px"}
                className="me-2"
              />
              Exclusive MancMint Newsletter access
            </li>
            <li className="my-3">
              <img
                src="/images/icons/green tick icon.png"
                alt=""
                height={"25px"}
                className="me-2"
              />
              mCoins as redeemable rewards
            </li>
          </ul>
        </div>
        <div className="plus">
          <span>PLUS</span>
          <h1>
            Rs. 9299 <span> /Year</span>
          </h1>
          <p>Everything from Free Plan + add ons</p>
          <ul>
            <li className="my-3">
              <img
                src="/images/icons/green tick icon.png"
                alt=""
                height={"25px"}
                className="me-2"
              />
              1 on 1 Consultation by the top 1%
            </li>
            <li className="my-3">
              <img
                src="/images/icons/green tick icon.png"
                alt=""
                height={"25px"}
                className="me-2"
              />
              Access to all cohort
            </li>
            <li className="my-3">
              <img
                src="/images/icons/green tick icon.png"
                alt=""
                height={"25px"}
                className="me-2"
              />
              Exclusive access in paid communities
            </li>
            <li className="my-3">
              <img
                src="/images/icons/green tick icon.png"
                alt=""
                height={"25px"}
                className="me-2"
              />
              Access to all future offline events and meetups
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <button className="primary-button mt-5">Buy Now</button>
        <h4 className="mt-4 mb-5" style={{ "font-weight": "400" }}>
          To know more{" "}
          <span style={{ "font-weight": "600" }}> Book a Free call</span>
        </h4>
      </div>
      <div className="contact-form-wrapper d-flex justify-content-center mb-5" >
        <form action="#" className="contact-form">
          <div>
            <input
              type="text"
              className="form-control rounded border-white mb-3 form-input"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              className="form-control rounded border-white mb-3 form-input"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              type="email"
              className="form-control rounded border-white mb-3 form-input"
              placeholder="Contact number"
              required
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button type="submit" className="p-2 border-0 text-light rounded-1 fw-bolder" style={{maxWidth:"150px",width:"150px",background:"#2a2524"}}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Pricing;
