import React from "react";
import "./Card.css"

export default function ({contents , image}) {
  return (
    <div className="card-contr">
      <div className="card-image">
        <img className="card-logo" src={image}/>
      </div>
      <div className="card-contents">
       <p className="card-text"> {contents}</p>
      </div>
    </div>
  );
}
