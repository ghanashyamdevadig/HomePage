import React from "react";
import './Card.css'

export default function Card() {
  return (
    <div className="main-card">
        <img
            className="card-logo"
            src={require("../Assets/Images/Moo-Beyond-Logo-Final 1.png")}
            alt=""
          />
      <img
        className="card-box"
        src={require("../Assets/Images/Rectangle 225.png")}
        alt=""
      />
      
    </div>
  );
}
