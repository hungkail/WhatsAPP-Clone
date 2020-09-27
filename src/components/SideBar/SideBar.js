import { Avatar } from "@material-ui/core";
import { DonutLarge, Chat, MoreVert, Search } from "@material-ui/icons";
import React from "react";
import SideBarChats from "../SideBarChats";
import "./SideBar.css";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <DonutLarge />
          <Chat />
          <MoreVert />
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <Search />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        {/* SidebarChat */}
        <SideBarChats />
      </div>
    </div>
  );
}

export default SideBar;
