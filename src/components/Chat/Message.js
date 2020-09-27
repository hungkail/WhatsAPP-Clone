import React from "react";
import "./Message.css";
function Message(props) {
  return (
    <div className="message">
      <div className="message__name">{props.message.name}</div>
      <div className="message__content">
        {props.message.message}
        {props.message.time}
      </div>
    </div>
  );
}

export default Message;
