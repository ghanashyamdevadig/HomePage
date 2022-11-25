import React from "react";
import "./Card.css"
export default function ({contents}) {
  return (
    <div className="card-contr">
      <div className="card-image">
        <img className="card-logo" src={require("../../Assets/Images/Moo-Beyond-Logo-Final 1.png")}/>
      </div>
      <div className="card-contents">
       <p className="card-text"> {contents}</p>
      </div>
    </div>
  );
}
