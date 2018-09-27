import React from "react";
import "./Header.css";

const Header = props =>  (
    <div className="jumbotron">
        <h1>Donut Clicky Game!</h1>
        <p>{props.message}</p>
        <p>Current Score: {props.score}</p>
        <p>Top Score: {props.topScore}</p>
    </div>
);
         
export default Header;
