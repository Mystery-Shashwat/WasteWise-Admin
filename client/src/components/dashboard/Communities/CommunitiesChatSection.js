import { css } from "@emotion/css";
import React, { useEffect, useState, useContext, useRef } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./CommunitiesChatSection.css";

import AuthContext from "../../../context/Auth/AuthContext";

const ROOT_CSS = css({
  height: "calc(100vh - 10em)",
});

const CommunitiesChatSection = ({ socket, chatHistory, community }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const { userdata } = useContext(AuthContext);
  const { username } = userdata;
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: community,
        user: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
        username: username,
        message: currentMessage,
        currentUser: true,
      };
      await socket.emit("send_community_message", messageData);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_community_message", (msg) => {
      setMessageList((list) => [...list, msg]);
    });
  }, [messageList]);

  return (
    <div className="px-3 overflow-auto">
      <ScrollToBottom className={ROOT_CSS} followButtonClassName="loader">
        {chatHistory.map((messageContent, index) => {
          return (
            <div
              key={index}
              className={`d-flex flex-column ${
                messageContent.currentUser
                  ? "align-items-end text-end"
                  : "align-items-start"
              } p-3 rounded-3 my-2`}
              style={{ background: "#fff" }}
            >
              <div className="d-flex">
                <img
                  style={{ height: 26, width: 26 }}
                  className="rounded-circle"
                  src={messageContent.user}
                  alt=""
                />
                <p className="mx-2">{messageContent.username}</p>
              </div>
              <div className="mt-2 fw-bold" style={{ maxWidth: "500px" }}>
                <p>{messageContent.message}</p>
              </div>
            </div>
          );
        })}
      </ScrollToBottom>
      <div
        className="content__footer"
        style={{ width: "-webkit-fill-available" }}
      >
        <div className="sendNewMessage">
          <input
            type="text"
            value={currentMessage}
            placeholder="Type a message here"
            className="outline-none"
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <button
            className="btnSendMsg rounded-circle"
            id="sendMsgBtn"
            onClick={sendMessage}
          >
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunitiesChatSection;
