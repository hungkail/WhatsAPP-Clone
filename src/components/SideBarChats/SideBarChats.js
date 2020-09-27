import React, { useEffect, useState } from "react";
import SideBarChat from "./SideBarChat";
import "./SideBarChats.css";
function SideBarChats() {
  const [chatRooms, setChatRooms] = useState([]);
  const datas = [
    { room: "1", lastMessage: "Hii", Avatar: "1234" },
    { room: "2", lastMessage: "Hii", Avatar: "1234" },
    { room: "3", lastMessage: "Hii", Avatar: "1234" },
    { room: "4", lastMessage: "Hii", Avatar: "1234" },
    { room: "5", lastMessage: "Hii", Avatar: "1234" },
    { room: "6", lastMessage: "Hii", Avatar: "1234" },
    { room: "7", lastMessage: "Hii", Avatar: "1234" },
    { room: "8", lastMessage: "Hii", Avatar: "1234" },
    { room: "9", lastMessage: "Hii", Avatar: "1234" },
    { room: "10", lastMessage: "Hii", Avatar: "1234" },
    { room: "11", lastMessage: "Hii", Avatar: "1234" },
  ];
  useEffect(() => {
    setChatRooms(datas);
  }, []);
  return (
    <div className="SideBarChats">
      {chatRooms.map((room) => (
        <SideBarChat room={room} />
      ))}
    </div>
  );
}

export default SideBarChats;
