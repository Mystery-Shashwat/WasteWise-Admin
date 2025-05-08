import React from 'react'
import AuthContext from "./AuthContext"
import { useState } from 'react'
import axios from 'axios'
const AuthState = (props) => {
  const host = "https://mancmint.onrender.com/api/auth/getdetails";
  const [currentDate, setCurrentDate] = useState('');
  const [loading, setLoading] = useState(true);
   const [userdata, setuserdata] = useState({})

   const fetchuser = ()=>{
    const email = localStorage.getItem("email");
    axios.post(host, { email })
        .then(function (response) {
            console.log(response.data.data.name);
            userData(response.data.data)
            setLoading(false);
        })
        .catch(function (error) {
            console.log(error);
            setLoading(false);

        });
   }
    const userData = (data)=>{
        console.log("Heyyyy")
        console.log(data)
        setuserdata(data)
    }
  return (  
    <AuthContext.Provider value={{userdata,userData,loading,fetchuser} }>
    {props.children}
</AuthContext.Provider>
  )
}

export default AuthState
