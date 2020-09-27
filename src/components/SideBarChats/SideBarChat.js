import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBarChat.css";
function SideBarChat(props) {
  return (
    <div className="SideBarChat">
      <Avatar />
      <div className="SideBarChat__Message">
        <h3>{props.room.room}</h3>
        <p>{props.room.lastMessage}</p>
      </div>
    </div>
  );
}

export default SideBarChat;
