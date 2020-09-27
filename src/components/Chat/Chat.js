import { Avatar } from "@material-ui/core";
import { InsertEmoticon, Mic } from "@material-ui/icons";
import React from "react";
import "./Chat.css";
import ChatScreen from "./ChatScreen";
function Chat() {
  return (
    <div className="Chat">
      {/* Chat header */}
      <div className="Chat__header">
        <Avatar />
        <div className="Chat__headerRight">
          <h3>Room Name</h3>
          <p>Last Seen</p>
        </div>
      </div>
      {/* Chat Screen */}
      <ChatScreen />
      {/* Chat footer */}
      <form className="Chat__footer">
        <InsertEmoticon />
        <input type="text" placeholder="Type a message" />
        <button type="submit"></button>
        <Mic />
      </form>
    </div>
  );
}

export default Chat;
