import React from "react";
import "./App.css";
import SideBar from "./SideBar";

function App() {
  return (
    <div className={"app"}>
      <div className="app__body">
        {/* SideBar */}
        <SideBar></SideBar>
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;
