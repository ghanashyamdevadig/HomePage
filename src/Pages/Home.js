import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="body-cntr">
      <div className="header-cntr">
        <div className="header-img">
          <img
            className="header-logo"
            src={require("../Assets/Images/Moo-Beyond-Logo-Final 1.png")}
            alt=""
          />
          <ul className="nav-bar">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PRODUCTS</li>
            <li>CONTACT US</li>
          </ul>
          <img
            className="header"
            src={require("../Assets/Images/Rectangle 1.png")}
            alt=""
          />
        </div>
        <div className="main-container">
          <img
            className="maim-backg-img"
            src={require("../Assets/Images/Mask Group.png")}
            alt=""
          />
          <img
            className="milkCan-left"
            src={require("../Assets/Images/Untitled-1 2.png")}
            alt=""
          />
          <img
            className="milkCan-right"
            src={require("../Assets/Images/Untitled-1 3.png")}
            alt=""
          />
        </div>
      </div>
      <div className="main-cntr-bottom">
        <img
          className="main-cntr-btm"
          src={require("../Assets/Images/Rectangle 220.png")}
          alt=""
        />
        <div className="gee-order">
          <img
            className="gee-box"
            src={require("../Assets/Images/gee-box.png")}
            alt=""
          />

          <img
            className="order-now"
            src={require("../Assets/Images/CTA.png")}
            alt=""
          />
        </div>
        <img
          className="text-box"
          src={require("../Assets/Images/Indias No 1.png")}
          alt=""
        />
        <img
          className="seal-box"
          src={require("../Assets/Images/gheeSeal.png")}
          alt=""
        />
      </div>
      <div className="text">
        <img
          className="organic-text"
          src={require("../Assets/Images/100% Certified Organic.png")}
          alt=""
        />
        <img
          className="long-text"
          src={require("../Assets/Images/Long-text.png")}
          alt=""
        />
      </div>
      <div className="card">
        <p>Card</p>
      </div>

      <div className="green-cntr">
      <img
          className="green-box"
          src={require("../Assets/Images/Rectangle 218.png")}
          alt=""
        />
          <img
          className="young-male"
          src={require("../Assets/Images/young-male.png")}
          alt=""
        />
          <img
          className="rectangle-box"
          src={require("../Assets/Images/Rectangle 235.png")}
          alt=""
        />
         <img
          className="man-ghee"
          src={require("../Assets/Images/man-with-ghee.png")}
          alt=""
        />
        <img
          className="mother-daug"
          src={require("../Assets/Images/mother-doughter.png")}
          alt=""
        />
        
      </div>
    </div>
  );
}
