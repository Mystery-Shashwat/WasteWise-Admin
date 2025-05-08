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
            {loading ? (<Spinner />) : (<div className='overview'>
                <div className="overview-box1">
                    <div className="overview-box1-text">   <h1>Welcome {UserName(userdata.name)} </h1> <span>{currentDate}</span></div>
                    <div className="payments-box1-search overview-box1-search">
                        <div className="form">
                            <i className="fa fa-search"></i>
                            <input
                                type="text"
                                className="form-control form-input"
                                placeholder="Search"
                            ></input>
                        </div>
                    </div>
                </div>
                <div className="overview-box2   ">
                    <div className="container">
                        <div className="overview-join  ">
                            <div className="over-join-txt">
                                <h5>Reach out to <br /> more people!</h5>
                                <p>Want to upskill yourself, and grow your <br /> network? Join our exclusive masterclass <br /> and community!</p>
                                <button className='nav-btn'>Join now</button>
                            </div>
                            <div className="over-join-img"> <img alt="" src={img2} /></div>
                        </div>
                    </div>

                    <div className="overview-chat">
                        <h3>Chats</h3>
                        <div className="chat-box">
                            <div className="chat-display1 chat-flex">
                                <img src={img3} alt="" />
                                <div className="chats">
                                    <h6> Shashank</h6>
                                    <p> Hey! What going on bro.</p>
                                </div>
                                <p className='chats-time'> 12h</p>
                            </div>
                            <div className="chat-display1 chat-flex" style={{ backgroundColor: " rgba(21, 148, 212, 1)", color: "white" }}>
                                <img src={img3} alt="" />
                                <div className="chats">
                                    <h6> Tushar</h6>
                                    <p> Hey! What going on bro.</p>
                                </div>
                                <p className='chats-time'> 12h</p>
                            </div>
                            <div className="chat-display1 chat-flex">
                                <img src={img3} alt="" />
                                <div className="chats">
                                    <h6> Ashmit</h6>
                                    <p> Hey! What going on bro.</p>
                                </div>
                                <p className='chats-time'> 12h</p>
                            </div>
                        </div>
                    </div>
                </div>
                <i class="bi bi-search"></i>
                <div className="overview-box3">
                    <div className="overview-box4">

                        <div className="skill-box">
                            <div className="skill-text">
                                <h6>Your Skills</h6>
                                <img src={menu} alt="" />
                            </div>
                            <div className="skills">
                                <div className="skillss">
                                    <img src={rect1} className='skillsimg' alt='' />
                                    <div className="skills-txt">
                                        <div className="skills-txt1">Motion Design... &nbsp; <img alt="" src={right} /> </div>
                                        <p>Expert</p>
                                    </div>
                                </div>
                                <div className="skillss">
                                    <img src={rect2} className='skillsimg' alt='' />
                                    <div className="skills-txt">
                                        <div className="skills-txt1">UI/UX Designer&nbsp; &nbsp; <img alt="" src={right} /> </div>
                                        <p>Beginner</p>
                                    </div>
                                </div>
                                <div className="skillss">
                                    <img src={rect3} className='skillsimg' alt='' />
                                    <div className="skills-txt">
                                        <div className="skills-txt1">Photoshop &emsp;   &emsp;     <img alt="" src={right} /> </div>
                                        <p>Intermediate</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="your-skill-box">
                            <div className="skill-text">
                                <h6>Skill Score</h6>
                                <img src={menu} alt="" />
                            </div>
                            <Skillgraph className='skill-graph-txt' />
                            <button className='nav-btn'>Take test Again</button>
                        </div>

                    </div>
                    <div className="overview-box5">
                        <div className="previous-box">
                            <Experiencegraph />
                        </div>
                        <div className="earned-box">
                            <h6>Your earned</h6>
                            <div className="box-score">
                                <div className="score">520</div> <div className="score-txt">mCoin</div>
                            </div>
                            <div className="score-txt2">Redeem your mCoins with <br /> our exclusive store</div>
                            <button>Redeem Now!</button>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Overview