import React from "react";
import "./Cards.css";

const Cards = props => (
    
    <div className="card"  onClick={() => props.handleClick(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content"></div>
 
  </div>
       
);

export default Cards;