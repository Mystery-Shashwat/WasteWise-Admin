/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import WOW from "wowjs";
import Homepage from "./pages/homepage/Homepage";
import SignUp from "./pages/signUp/SignUp";
import SignIn from "./pages/signIn/SignIn";
import Navbar from "./components/navbar/Navbar";
// import Alert from "../src/components/Alert";
import Footer from "./components/footer/Footer";

// Dashboard components
import D_Navbar from "./components/dashboard/Navbar/D_Navbar";
import Overview from "./pages/dashboard/overview/GCrequests";
import { useEffect, useState } from "react";

import Mints from "./pages/dashboard/mints/Mints";
import Payments from "./pages/dashboard/payments/Payments";
import Pricing from "./pages/pricing/Pricing";
import WeatherTracker from "./pages/dashboard/weatherTracker/WeatherTracker";
import Chatcomponent from "./components/chat/Chatcomponent";
import AuthState from "./context/Auth/AuthState";
import D_Communities from "./pages/dashboard/communities/D_Communities";
import SetChatUserState from "./context/chat/SetChatUserState";
import ProfilePage from "./pages/dashboard/profile/profile";
import SmartDustbinLocations from "./pages/pickUpLocations/SmartDustbinLocations";

function App() {

  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const { pathname } = useLocation();
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
    if (pathname.startsWith("/dashboard"))
      document.title = "Mancmint - Dashbaord";
  }, [pathname]);

  return (
    <div className="main-box">
      <AuthState>
        <SetChatUserState>
          <div className="client">
        
            <Routes>
              <Route
                exact
                path="/"
                element={<D_Navbar/>}
              />
              <Route
                path="/signup"
                element={<SignUp showalert={showalert} />}
              />
              <Route
                path="/signin"
                element={<SignIn showalert={showalert} />}
              />
              <Route
                path="/pricing"
                element={<Pricing showalert={showalert} />}
              />
            </Routes>
          </div>
          <div className="dashboard">
            {/* Dashboard*/}
            {pathname.startsWith("/dashboard") && <D_Navbar />}
            <Routes>
              <Route exact path="/dashboard/trackPickUp" element={<Overview />} />
              <Route exact path="/dashboard/analytics" element={<Mints />} />
              <Route exact path="/dashboard/rewards" element={<Payments />} />
              <Route
                exact
                path="/dashboard/support"
                element={<Chatcomponent />}
              />
              <Route
                exact
                path="/dashboard/communities"
                element={<D_Communities />}
              />
              <Route exact path="/dashboard/weatherTracker" element={<WeatherTracker />} />
              <Route
                exact
                path="/dashboard/profile"
                element={<ProfilePage />}
              />
              <Route
                exact
                path="/dashboard/picupLocations"
                element={<SmartDustbinLocations/>}
              />
            </Routes>
          </div>
        </SetChatUserState>
      </AuthState>
    </div>
  );
}

export default App;
