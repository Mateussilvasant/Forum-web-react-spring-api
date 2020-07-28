import React from "react";
import "./index.css";
import { NavbarIn } from "./Navbar-In";
import { NavbarOut } from "./Navbar-Out";


const NavbarBase = (props: {children : NavbarIn | NavbarOut}) => {
  return (
    <header>
      <nav className="navbar-home">
        {props.children}
      </nav>
    </header>
  );
};

export default NavbarBase;
