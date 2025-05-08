import React, { useContext, useState } from "react";
import "./css/Navbar.css";
import ThemeContext from "../../../context/Theme/ThemeContext";
import {
  FaChartLine,
  FaChartBar,
  FaRegCompass,
  FaWallet,
  FaBusinessTime,
} from "react-icons/fa";
import navlogo from "../../../img/navlogo.png";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import AuthContext from "../../../context/Auth/AuthContext";
// import { HiOutlineDocumentText } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { CgArrowsV } from "react-icons/cg";

const Navbar = (props) => {
  const context1 = useContext(AuthContext);
  const { userdata } = context1;
  const [openUserActions, SetUserActions] = useState(false);
  const [show, setshow] = useState(false);
  const navigate = useNavigate();
  const handleclick = () => {
    setshow(!show);
  };

  const context = useContext(ThemeContext);
  // theme colours
  const styles = {
    "--primary": context.primary,
    "--darkGrey": context.darkGrey,
    "--lightGrey": context.lightGrey,
  };
  // Log out
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };
  const movehome = () => {
    navigate("/");
  };

  return (
    <>
      {" "}
      <div id="dmobile" onClick={handleclick}>
        <i id="bar" className={show ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <nav className={show ? "navbar nav-set" : "navbar"} style={styles}>
        <section style={{ height: "80vh", width: "100%" }}>
          <div className="navbar__logo" style={{ cursor: "pointer", display:"flex", flexDirection:"row" }}>
            <p style={{marginRight:"10px"}}><b>WasteWise</b></p>
            <img src={navlogo} onClick={movehome} alt="Logo" />
          </div>
          <ul className="navbar__links nav-set">
            <li>
              <Link to="/dashboard" onClick={handleclick}>
                <FaChartLine />
                Track PickUps
              </Link>
            </li>

            <li>
              <Link to="/dashboard/hire" onClick={handleclick}>
                <FaBusinessTime />
                Weather-Forcasting
              </Link>
            </li>
            <li>
              <Link to="/dashboard/payments" onClick={handleclick}>
                <FaWallet />
                Rewards
              </Link>
            </li>
            <li>
              <Link to="/dashboard/analytics" onClick={handleclick}>
                <FaChartBar />
                Analytics
              </Link>
            </li>
            <li>
              <Link to="/dashboard/chats" onClick={handleclick}>
                <FaRegCompass />
                Chat
              </Link>
            </li>

            {/* <li>
              <Link to="/dashboard/communities" onClick={handleclick}>
                <FaRegCompass />
                Communities
              </Link>
            </li> */}
            <li>
              <Link to="/dashboard/profile" onClick={handleclick}>
                <IoSettingsOutline />
                Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard/settings" onClick={handleclick}>
                <IoSettingsOutline />
                Settings
              </Link>
            </li>
          </ul>
        </section>
        <section
          style={{ height: "15vh", display: "flex", alignItems: "center" }}
          className="user_action_section nav-set"
        >
          <div
            className="user_action"
            onClick={() => {
              SetUserActions(!openUserActions);
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
              height={40}
              width={40}
            />
            <div>
              <span style={{ fontSize: "14px" }}>{userdata.name}</span>
              <span style={{ color: context.darkGrey, fontSize: "11px" }}>
                Creator account
              </span>
            </div>
            <CgArrowsV />
          </div>
          {openUserActions && (
            <div className="action_buttons" onClick={logout}>
              <ul>
                <li>
                  <MdOutlineLogout />
                  Log out
                </li>
              </ul>
            </div>
          )}
        </section>
      </nav>
    </>
  );
};

export default Navbar;
