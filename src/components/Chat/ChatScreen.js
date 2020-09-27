import React from "react";
import Message from "./Message";
import "./ChatScreen.css";

function ChatScreen() {
  const datas = [{ name: "Brian", message: "Hello", time: "Tue, 18 Aug 2020" }];
  return (
    <div className="ChatScreen">
      {datas.map((data) => (
        <Message message={data} />
      ))}
    </div>
  );
}

export default ChatScreen;
