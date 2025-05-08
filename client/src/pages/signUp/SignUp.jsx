import React from 'react'
import '../signIn/SignIn.css'
import '../signUp/SignUp.css'
import Spinner from '../../components/spinner/Spinner'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import imglogin from '../../img/Saly-14.png';

import { useState } from "react";
import view from '../../img/view-hide.png';
const SignUp = (props) => {
    const host="https://mancmint.onrender.com/api/auth/user-register";
    const navigate = useNavigate();
    const [passwordShown, setPasswordShown] = useState(false);
    const [loading, setloading] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const [credentials, setcredentials] = useState({ name: "", email: "", phone_no: "", password: "" })

    const onchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const submit = async (e) => {
        setloading(true)
        e.preventDefault();
      axios.post(host,credentials)
            .then(  function  (response)  {
                console.log(response.data);
                // console.log(response.data.token);
                // console.log(response.data.data);
                // userData(response.data.userDetails)
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("email",response.data.data.email)
                setloading(false)
                navigate("/dashboard");
                props.showalert("Account Created Successfully", "success")
                // window.location.reload(false);
            })
            .catch(function (error) {
                setloading(false)
                props.showalert("Invalid details", "danger")
            });
    }


    const movesignin = () => {
        navigate("/signin");

    }
    return (
        <div className='signup-bx-1 fl-r'>
            <div className="signup-bx-2">
                <div className="signin-txt-bx ">
                    <div className="sign-in-txt-1">  Oh? <br /> Hello there</div>
                    <div className="sign-in-txt-2"> Already Have an Account ? <br/> <b onClick={movesignin} style={{ cursor: "pointer" }}>Login </b></div>
                </div>
                <div className="signup-img1"> <img alt='' src={imglogin} /></div>
            </div>
            <div className="signup-bx-3">
                <div className="signin-signup">
                    <form action="" className="sign-in-form">
                        <div className="input-field">

                            <input type="text" name="name" value={credentials.name} placeholder="Enter Fullname" onChange={onchange} />
                        </div>
                        <div className="input-field">

                            <input type="email" name="email" value={credentials.email} placeholder="Email ID" onChange={onchange} />
                        </div>
                        <div className="input-field">

                            <input type="number" name="phone_no" value={credentials.phone_no} placeholder="PhoneNo" onChange={onchange} />
                        </div>
                        <div className="input-field">

                            <input type={passwordShown ? "text" : "password"} value={credentials.password} name="password" placeholder="Password" onChange={onchange} /><span><img className='viewpass' onClick={togglePasswordVisiblity} alt='' src={view} /></span>
                        </div>
                        <div className="input-field">

                            <input type="password" placeholder="Confirm Password" />
                        </div>
                    { loading? <Spinner/>:<button onClick={submit}>Register</button>}
                    </form></div>
            </div>
        </div>
    )
}

export default SignUp