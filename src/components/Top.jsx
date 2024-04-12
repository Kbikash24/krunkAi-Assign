import React from "react";
import './style.css'

const Top = () => {
  return (
    <div className="top">
      <div className="top-left">
        <div className="icon"><img src="public\images\chatbot.png" alt="" /></div>
        <div className="title">
          <div className="top-name"><h1>Timpu </h1><div className="vector-1"></div></div>
       
          <h2>Chat assistant</h2>
        </div>
      </div>

      <div className="top-right">
        <div className="status"><div className="online"></div></div>
        <div className="text"> <h1>Online</h1></div>
       
      </div>
    </div>
  );
};

export default Top;
