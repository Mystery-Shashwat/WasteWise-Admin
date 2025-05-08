import React, { useState, useEffect, useContext } from 'react';
import './Overview.css'

import img2 from '../../../img/overjoin.png'
import img3 from '../../../img/avatar.png';
import searchimg from '../../../img/search-0nvd.png'
import menu from '../../../img/menu-5.png'
import rect1 from '../../../img/Rectangle Copy.png'
import AuthContext from '../../../context/Auth/AuthContext';
import rect2 from '../../../img/Rectangle Copy1.png'
import rect3 from '../../../img/Rectangle Copy2.png'
import right from '../../../img/small-right.png'
import Skillgraph from '../../../components/dashboard/overview/Skillgraph';
import Experiencegraph from '../../../components/dashboard/overview/Experiencegraph';
import Spinner from '../../../components/spinner/Spinner_2';
import axios from 'axios';
const Overview = () => {
    const host = "https://mancmint.onrender.com/api/auth/getdetails";
    const [currentDate, setCurrentDate] = useState('');
    
    const [currentDay, setCurrentDay] = useState('');
    const context = useContext(AuthContext);
    const { userdata, userData,loading,fetchuser } = context;

    const UserName = (name) => {
        const lastNameIndex = name.indexOf(" ");
        return name.slice(0, lastNameIndex);
    }
  


    useEffect(() => {
        fetchuser();
        //    console.log(localStorage.getItem("email"))
        // const email = localStorage.getItem("email");
        // axios.post(host, { email })
        //     .then(function (response) {
        //         console.log(response.data.data.name);
        //         userData(response.data.data)
        //         setLoading(false);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //         setLoading(false);

        //     });
        const updateDateAndDay = () => {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = now.toLocaleDateString(undefined, options);
            const formattedDay = now.toLocaleDateString(undefined, { weekday: 'long' });
            setCurrentDate(formattedDate);
            setCurrentDay(formattedDay);

        };

        updateDateAndDay();
        const interval = setInterval(updateDateAndDay, 1000 * 60); // Update every minute

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className="container" style={{ marginTop: loading ? "31%" : "" }}>
            
        </div>
    )
}

export default Overview