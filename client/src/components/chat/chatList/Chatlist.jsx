import React, { Component, useState,useContext } from "react";
import "./Chatlist.css";

import axios from 'axios'
import ChatListItems from "./ChatListItems";
import avtar2 from "../../../img/Avatar2.png";
import avtar3 from "../../../img/Avatar3.png";
import avtar4 from "../../../img/Avatar4.png";
import avtar5 from "../../../img/Avatar5.png";
import avtar6 from "../../../img/Avatar6.png";
import avtar7 from "../../../img/Avatar7.png";
import avtar8 from "../../../img/Avatar8.png";
import avtar9 from "../../../img/Avatar - Group.png";
import avtar10 from "../../../img/Avatar - Group8.png";

const Chatlist = (props) => {
 
 
  const [username, setUsername] = useState("");
  const [allchatusers, setallchatusers]=useState([
    {
      image:
        avtar2,
      id: 1,
      name: "Tim Hover",
      active: true,
      isOnline: true,
    },
    {
      image:
        avtar3,
      id: 2,
      name: "Ayub Rossi",
      active: false,
      isOnline: false,
    },
    {
      image:
        avtar4,
      id: 3,
      name: "Hamaad Dejesus",
      active: false,
      isOnline: false,
    },
    {
      image:
        avtar9,
      id: 4,
      name: "Eleni Hobbs",
      active: false,
      isOnline: true,
    },
    {
      image:
        avtar6,
      id: 5,
      name: "Elsa Black",
      active: false,
      isOnline: false,
    },
    {
      image: avtar7,

      id: 6,
      name: "Kayley Mellor",
      active: false,
      isOnline: true,
    },
    {
      image: avtar5,

      id: 7,
      name: "Hasan Mcculloch",
      active: false,
      isOnline: true,
    },
    {
      image: avtar5,

      id: 8,
      name: "Autumn Mckee",
      active: false,
      isOnline: false,
    },
    {
      image: avtar10,

      id: 9,
      name: "Allen Woodley",
      active: false,
      isOnline: true,
    },
    {
      image: avtar10,
      id: 10,
      name: "Manpreet David",
      active: false,
      isOnline: true,
    },
  ]);
  const searchUser=()=>{
   

    try {
      const host=`https://mancmint.onrender.com/api/auth/search/${username}`;
      axios.get(host)
            .then(  function  (response)  {
                // console.log(response.data.data[0]);
                setallchatusers(response.data.data)
               
            })
            .catch(function (error) {
               
            });
    } catch (err) {
      
    }
  }
   




  return (
    <div className="main__chatlist">
      {/* <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button> */}
      <div className="chatlist__heading">
        <h2>Messages (10)</h2>
        <button className="btn-nobg">
          <i className="fa fa-ellipsis-h"></i>
        </button>
      </div>
      <div className="chatList__search">
        <div className="search_wrap">
          <input type="text" placeholder="Search Here" required onKeyDown={searchUser}
          onChange={(e) => setUsername(e.target.value)}/>
          <button className="search-btn" onClick={searchUser}>
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="chatlist__items">
        {allchatusers.map((item, index) => {
          return (
            <ChatListItems
              name={item.name}
              username={item.username}
              key={item.id}
              animationDelay={index + 1}
              active={item.active ? "active" : ""}
              isOnline={item.isOnline ? "active" : ""}
              image={avtar2}
              socket = {props.socket}
            />
            
          );
        })}
      </div>
    </div>
  );
}
export default Chatlist;