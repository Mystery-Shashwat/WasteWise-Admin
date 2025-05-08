import React, { Component, useContext, useEffect } from "react";
import "./ChatBody.css";
import io from "socket.io-client";
import Chatlist from "../chatList/Chatlist";
import Chatcontent from "../chatContent/Chatcontent";
import AuthContext from "../../../context/Auth/AuthContext";
const socket = io.connect("http://localhost:3001");

const ChatBody = () => {
  console.log("heyyy")
  const context = useContext(AuthContext);
  const { userdata, userData, loading, fetchuser } = context;
  // useEffect(() => {
  //  fetchuser()
  // }, [])
  
  return (
    <div className="main__chatbody">
      <Chatlist socket={socket} />
      <Chatcontent socket={socket} />
    </div>
  );
}
export default ChatBody