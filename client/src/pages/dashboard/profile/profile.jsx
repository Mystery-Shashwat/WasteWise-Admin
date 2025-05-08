import React, { useContext } from "react";
import "./profile.css";
import AuthContext from "../../../context/Auth/AuthContext";
import profileimg from "../../../img/profileimg.png";
import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaFacebookF,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function ProfilePage() {
  const context1 = useContext(AuthContext);
  const { userdata } = context1;
  return (
    <div className="profile" style={{ backgroundColor: "#eee" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card profilecard">
              <img className="profileimg" src={profileimg} alt="" />
              <div className="card-body">
                <h5 className="card-title">{userdata.name}</h5>
                <p className="card-text designation">Web Developer</p>
                <p className="card-text address">
                  Connaught Place, Delhi, India
                </p>
                <button href="#" className="btn btn-primary">
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-8 profiledetails">
            <div className="card">
              <div className="card-body userdetails">
                <div className="profquery">
                  <h5 className="profheading">Full Name</h5>
                  <p className="profvalue">{userdata.name}</p>
                </div>
                <hr />
                <div className="profquery">
                  <h5 className="profheading">Email</h5>
                  <p className="profvalue">{userdata.email}</p>
                </div>
                <hr />
                <div className="profquery">
                  <h5 className="profheading">Mobile No</h5>
                  <p className="profvalue">87787877688</p>
                </div>
                <hr />
                <div className="profquery">
                  <h5 className="profheading">Address</h5>
                  <p className="profvalue">Delhi</p>
                </div>
                <hr />
                <div className="profquery">
                  <h5 className="profheading">Date Of Birth</h5>
                  <p className="profvalue">30/09/2000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row profrow">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body userdetails">
                <div className="userlinks">
                  <FaGlobe size={23} />
                  <div className="linksanchor">
                    <a href="mancmint.com">Website</a>
                  </div>
                </div>
                <hr />
                <div className="userlinks">
                  <FaGithub size={23} />
                  <div className="linksanchor">
                    <a href="mancmint.com">Github</a>
                  </div>
                </div>
                <hr />
                <div className="userlinks">
                  <FaTwitter size={23} />
                  <div className="linksanchor">
                    <a href="mancmint.com">Twitter</a>
                  </div>
                </div>
                <hr />
                <div className="userlinks">
                  <FaInstagram size={23} />
                  <div className="linksanchor">
                    <a href="mancmint.com">Instagram</a>
                  </div>
                </div>
                <hr />
                <div className="userlinks">
                  <FaFacebookF size={23} />
                  <div className="linksanchor">
                    <a href="mancmint.com">Facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
