import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import navlogo from '../../img/navlogo.png'
import { useState, useEffect } from 'react'
const Navbar = () => {
  const [show, setshow] = useState(true)
  const [showlog, setShowlog] = useState(false);
  let navigate = useNavigate();
  const handleclick = () => {
    setshow(!show);
    // console.log("heuygu");
  }

  const movsignin = () => {
    navigate("/signin")
    setshow(false)
  }
  const logout = () => {
   
    navigate("/dashboard")
  }
  useEffect(() => {

    const abd = localStorage.getItem('token');
    if (abd)
      setShowlog(true)
 
     


  }, [])


  return (
      <nav className='home-nav'>
        <img className="nav-logo" src={navlogo} alt='' />
        <h3 className="nav--logo_text">MancMint</h3>
        <div>
          <ul id='navbar' className={show ? "#navbar active" : "#navbar"}>
            <li> <a className='active' href='/'> Home</a></li>
            <li> <a href='/'> Cohort</a></li>
            <li> <a href='/'> Community</a></li>
            <li> <a href='/pricing'> Pricing</a></li>
            {!showlog ? <button onClick={movsignin} className='nav-btn'>Login/SignUp</button> :
              <button onClick={logout} className='nav-btn'>Dashboard</button>}
          </ul>
        </div>
        <div id='mobile' onClick={handleclick}>
          <i id="bar" className={show ? "fas fa-times" : "fas fa-bars"}></i>

        </div>

      </nav>
      
  )
}

export default Navbar
