import React, { useEffect, useState } from "react";
import CommunitiesBadge from "../../../components/dashboard/Communities/CommunityBadge";
import CommunitiesChatSection from "../../../components/dashboard/Communities/CommunitiesChatSection";

import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

const communities = [
  {
    id: 1,
    name: "Startup Club",
    logo: "/images/Business Building.png",
  },
  {
    id: 2,
    name: "Tech Club",
    logo: "/images/Touch ID.png",
  },
  {
    id: 3,
    name: "Finance Club",
    logo: "/images/Cash.png",
  },
  {
    id: 4,
    name: "Design Club",
    logo: "/images/Paint Palette.png",
  },
  {
    id: 5,
    name: "Music Club",
    logo: "/images/Rock Music.png",
  },
  {
    id: 6,
    name: "Growth Club",
    logo: "/images/Sales Performance.png",
  },
  {
    id: 7,
    name: "Coding Club",
    logo: "/images/Raspberry Pi Zero.png",
  },
  {
    id: 8,
    name: "Web3 Club",
    logo: "/images/Firewall.png",
  },
  {
    id: 9,
    name: "Gaming Club",
    logo: "/images/Game Controller.png",
  },
];

const D_Communities = () => {
  const [currentCommunityID, setCurrentCommunityID] = useState(1);
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    if (socket) {
      socket.on("message", (newMessage) => {
        setChatHistory([...chatHistory, newMessage]);
      });
      socket.on("community_joined", (community_history) => {
        setChatHistory(community_history);
      });
      return () => {
        socket.off("message");
        socket.off("community_joined");
      };
    }
  }, [socket]);

  let selectedCommunity = communities.filter(
    (community) => community.id == currentCommunityID
  )[0];

  const joinCommunity = async (community) => {
    setCurrentCommunityID(community.id);
    await socket.emit(
      "join_community",
      `${community.name.replaceAll(" ", "_")}_${community.id}`
    );
  };
  return (
    <div
      className="d-flex overflow-auto"
      style={{ width: "100%", height: "100vh" }}
    >
      <div
        className="d-flex flex-column px-5 overflow-y-auto"
        style={{
          maxWidth: "25em",
          borderRight: "1px solid #f0f0f0",
        }}
      >
        {communities.map((community) => {
          return (
            <CommunitiesBadge
              src={community.logo}
              title={community.name}
              currentCommunity={
                currentCommunityID == community.id ? true : false
              }
              onClick={() => {
                joinCommunity(community);
              }}
            />
          );
        })}
      </div>
      <div style={{ width: "-webkit-fill-available" }}>
        <div className="d-flex flex-column">
          <div className="px-5 py-2 mb-3" style={{ background: "#FFAEF2 " }}>
            <h4>
              <img
                src={selectedCommunity.logo}
                alt="img"
                height={30}
                width={30}
                className="me-2"
              />
              {selectedCommunity.name}
            </h4>
            <div
              className="d-flex justify-content-between ps-4"
              style={{ fontSize: "13px" }}
            >
              <span> 8 online</span>
              <span className="cursor-pointer">View All Members</span>
            </div>
          </div>
          <CommunitiesChatSection
            socket={socket}
            chatHistory={chatHistory}
            community={`${selectedCommunity.name.replaceAll(
              " ",
              "_"
            )}_${currentCommunityID}`}
          />
        </div>
      </div>
    </div>
  );
};

export default D_Communities;
