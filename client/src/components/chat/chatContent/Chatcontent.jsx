import React, { Component, createRef, useEffect, useState, useContext, useRef } from "react";
import ChatContext from "../../../context/chat/ChatContext";
import ScrollToBottom from "react-scroll-to-bottom";
import "./ChatContent.css";
import axios from "axios";

import Avatar from "../chatList/Avatar";

import AuthContext from "../../../context/Auth/AuthContext";

const Chatcontent = React.memo(({ socket }) => {
  const context1 = useContext(AuthContext);
  const { userdata, userData } = context1;
  const context2 = useContext(ChatContext);
  const { user, setchatuser } = context2;
  const socketRef = useRef(null);
  const username1 = userdata.username;
  const username2 = user
  const sortedUsernames = [username1, username2].sort((a, b) => a.localeCompare(b));

  // Concatenate the sorted usernames to create the room name
  const room = sortedUsernames.join('-');
  const [username, setUsername] = useState("");
  
  const [showChat, setShowChat] = useState(false);

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username1,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    console.log('receive_msg');
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
      // console.log(data)
    });
  },[socket]);

  return (
    <div className="main__chatcontent">
        <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar
              isOnline="active"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
            />
            <p>{user}</p>
          </div>
        </div>

        <div className="blocks">
          <div className="settings">
            <button className="btn-nobg">
              <i className="fa fa-cog"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="content__body">
        <ScrollToBottom className="chat_items">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username1 === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <button className="addFiles">
            <i className="fa fa-plus"></i>
          </button>
          <input
           type="text"
           value={currentMessage}
            placeholder="Type a message here"
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}

          />
          <button className="btnSendMsg" id="sendMsgBtn" onClick={sendMessage}>
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
     
    </div>
  );
})

export default Chatcontent;