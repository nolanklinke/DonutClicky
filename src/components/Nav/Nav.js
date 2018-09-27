import React from "react";
import "./Nav.css";

const Nav = props => (
  <footer className="footer">
      <a className="navbar-brand" href="https://nolanklinke.github.io/DonutClicky/">
      <img src="https://www.clker.com/cliparts/c/2/6/a/1436305922514847544donut_strawberry_sprinkles-th.png" width="30" height="30" className="d-inline-block align-top" alt=""></img>
      {props.title}
      </a>
    </footer>
  );
        
 

export default Nav;