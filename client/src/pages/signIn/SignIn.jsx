import React from 'react'
import './SignIn.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import imglogin from '../../img/Saly-14.png';
import Spinner from '../../components/spinner/Spinner'
import { useState } from "react";
import view from '../../img/view-hide.png';
import AuthContext from '../../context/Auth/AuthContext';
import { useContext } from "react";
const SignIn = (props) => {
    const host = "https://mancmint.onrender.com/api/auth/user-login"
    const [passwordShown, setPasswordShown] = useState(false);
    const [loading, setloading] = useState(false);
   
    // props.showalert("Logged-in Successfully", "success")
    const navigate = useNavigate();
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const movesignup = () => {
        navigate("/signup")
    }
   
    const [credentials, setcredentials] = useState({ email: "", password: "" })

    const onchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const submit = async (e) => {
        setloading(true)
        e.preventDefault();
        axios.post(host, credentials)
            .then(function (response) {
                console.log(response.data.userDetails.name);
                // userData(response.data.userDetails)
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("email",response.data.userDetails.email)
                setloading(false)
                navigate("/dashboard");
                props.showalert("Logged-in Successfully", "success")
                // window.location.reload(false);
            })
            .catch(function (error) {
                console.log(error);
                setloading(false)
                props.showalert("Invalid details", "danger")
            });
    }
    return (
        <div className='signin-bx-1 fl-r'>
            <div className="signin-bx-2">
                <div className="signin-txt-bx ">
                    <div className="sign-in-txt-1">  Oh? <br /> Hello there</div>
                    <div className="sign-in-txt-2"> New user? Please <b onClick={movesignup}>Register </b></div>
                </div>
                <div className="signin-img1"> <img alt=''  src={imglogin} /></div>
            </div>
            <div className="signin-bx-3">
                <div className="signin-signup">
                    <form action="" className="sign-in-form">
                        <div className="input-field">

                            <input type="email" name="email" value={credentials.email} placeholder="Enter Email ID" onChange={onchange} />
                        </div>
                        <div className="input-field">

                            <input type={passwordShown ? "text" : "password"} value={credentials.password} name="password" onChange={onchange} placeholder="Password" /><span><img className='viewpass' onClick={togglePasswordVisiblity} alt='' src={view} /></span>
                        </div>
                        <Link to="" class="forget-text">Forgot password? </Link>
                        {loading ? <Spinner /> : <button onClick={submit}>SignIn</button>}
                    </form></div>
            </div>
        </div>
    )
}

export default SignIn