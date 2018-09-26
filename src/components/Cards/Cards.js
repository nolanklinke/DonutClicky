import React from "react";
import "./Cards.css";

const Cards = props => (
    
    <div className="card">
    <div className="img-container">
      {/* <img alt={props.name} src={props.image} /> */}
    </div>
    <div className="content"></div>
    {/* <span onClick={() => props.removeFriend(props.id)} className="remove"></span> */}
  </div>
       
);

export default Cards;