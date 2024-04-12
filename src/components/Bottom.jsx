import React from "react";
import { RiAttachment2 } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";
import './bottom.css'

const Bottom = () => {
  return (
    <div className="bottom">
      <div className="btm-top">
        <div className="input-div"><input placeholder="Type your message"></input><GrAttachment className="attach-icon" /></div>
       
       <button className="btm-btn"><FaAngleRight /></button>
      </div>
      <div className="btm-end"><p>Powered by </p><p className="name">Krunk.ai</p><img src="src\assets\images\icon.png" className="imgs"></img></div>
    </div>
  );
};

export default Bottom;
