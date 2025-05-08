import React, { Component, useContext, useEffect, useState} from "react";
import Avatar from "./Avatar";
import Chatcontent from "../chatContent/Chatcontent";
import ChatContext from "../../../context/chat/ChatContext";
import authContext from "../../../context/Auth/AuthContext";
import socket from "socket.io-client";
import io from "socket.io-client";
const ChatListItems = (props) => {
  const context1 = useContext(authContext);
  const { userdata, userData } = context1;
  const context2 = useContext(ChatContext);
  const { user, setchatuser } = context2;
  const socket = props.socket
  // const socket = io.connect("http://localhost:3001");
  console.log(context2);
  const username1 = userdata.username;
  const username2 = user;
  console.log("usernames " + username1 + " " + username2);
  const sortedUsernames = [username1, username2].sort((a, b) =>
    a.localeCompare(b)
  );
  const roomName = sortedUsernames.join("-");
  const [showChat, setShowChat] = useState(false);
  const selectChat = (e) => {
    setchatuser(props.username || props.name);
  };
  console.log("roomname " + roomName);
  const joinRoom = () => {
    console.log('Join room function called now!'+roomName);
    if (roomName !== "") {
      socket.emit("join_room", roomName);
      setShowChat(true);
    }
  };
  useEffect(() => {
    socket.emit("join_room", roomName);
    setShowChat(true);
  },[roomName])
  return (
    <>
      <div
        style={{ animationDelay: `0.${props.animationDelay}s` }}
        onClick={function (event) {
          selectChat();
          joinRoom();
        }}
        className={`chatlist__item ${props.active ? props.active : ""} `}
      >
        <Avatar
          image={props.image ? props.image : "http://placehold.it/80x80"}
          isOnline={props.isOnline}
        />

        <div
          className="userMeta"
          onClick={() => {
            console.log("tushar3");
          }}
        >
          <p>{props.name}</p>
          {/* <span className="activeTime">32 mins ago</span> */}
        </div>
      </div>
    </>
  );
};
export default ChatListItems;
