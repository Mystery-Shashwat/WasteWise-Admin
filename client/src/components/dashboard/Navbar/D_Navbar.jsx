import React, { useContext, useState } from "react";
import "./css/Navbar.css";
import ThemeContext from "../../../context/Theme/ThemeContext";
import {
  FaChartLine,
  FaChartBar,
  FaWallet,
} from "react-icons/fa";
import navlogo from "../../../img/navlogo.png";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import AuthContext from "../../../context/Auth/AuthContext";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { CgTrack } from "react-icons/cg";
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
          <div
            className="navbar__logo"
            style={{ cursor: "pointer", display: "flex", flexDirection: "row" }}
          >
            <p style={{ marginRight: "10px" }}>
              <b>WasteWise</b>
            </p>
            <img src={navlogo} onClick={movehome} alt="Logo" />
          </div>
          <ul className="navbar__links nav-set">
            <li>
              <Link to="/dashboard/trackPickUp" onClick={handleclick}>
                <FaChartLine />
                Track PickUps
              </Link>
            </li>

            <li>
              <Link to="/dashboard/weatherTracker" onClick={handleclick}>
                <TiWeatherPartlySunny />
                Weather-Forcasting
              </Link>
            </li>
            <li>
              <Link to="/dashboard/picupLocations" onClick={handleclick}>
                <CgTrack />
                PickUp Locations
              </Link>
            </li>
            <li>
              <Link to="/dashboard/analytics" onClick={handleclick}>
                <FaChartBar />
                Analytics
              </Link>
            </li>
            <li>
              <Link to="/dashboard/support" onClick={handleclick}>
                <IoMdHelpCircleOutline />
                Help & Support
              </Link>
            </li>
            <li>
              <Link to="/dashboard/rewards" onClick={handleclick}>
                <FaWallet />
                Rewards & Credits
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
