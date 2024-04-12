import React from "react";
import "./style.css";
import "./hero.css";
import { BsSliders2 } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="hero">
      <div className="top-left">
        <div className="left-text">
          <p>
            Hi Sam! I am your personal shopping assistant , how can i help you
            today ?
          </p>
        </div>
        <div className="time">
          <p>4:45 PM</p>
        </div>
      </div>
      <div className="top-rght">
        <div className="text">
          <p>I am looking for a hand bag, with long strap .</p>
        </div>
        <div className="time">
          <p>4:46 PM</p>
        </div>
      </div>
      <div className="tags">
        <div className="tags-text">
          <p>Popular tags for handbag</p>
        </div>
        <div className=" tag-buttons">
          <button className="btn-1">
            {" "}
            <p>Clutch</p>{" "}
          </button>
          <button className="btn-2">
            {" "}
            <p>Fabric Lining</p>
          </button>
          <button className="btn-2">Baggit</button>
          <div className="box">
            <button className="btn-4">Multi</button>
            <FaAngleRight />
          </div>
        </div>
      </div>
      <div className="display">
        <div className="text-box">
          <div className="txt-b">
            <div className="img">
              <img src="src\assets\images\bag.jpeg"></img>{" "}
              <div className="img-text">
                <div className="bag"> <p>Bags of Timpu</p> <div className="vector-2"></div></div>
                
                <div className="items-details"> <p className="products">1123 products</p><FaAngleRight /></div>
                
              </div>
            </div>
            <div className="btm-text">
              <p>Or set filter and help us choose the best bag for you.</p>
            </div>
          </div>
          <div className="txt-time">
            <p>4:48 PM</p>
          </div>
        </div>
        <div className="filter-box">
          <div className="filter-box-top">
            <input placeholder="Select filters"></input>
            <div className="filter-icon">
              <BsSliders2 className="icn" />
              Filters
            </div>
          </div>
          <div className="filter-sec"><div className="sec-1"><p>Stop-Long</p><MdClose /></div>
          <div className="sec-2"><p>Color</p><MdClose /></div>
          <div className="sec-2"><p>Size</p><MdClose /></div>
          <div className="sec-2"><p>Brand</p><MdClose /></div>
          <div className="sec-2"><p>Material</p><MdClose /></div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
