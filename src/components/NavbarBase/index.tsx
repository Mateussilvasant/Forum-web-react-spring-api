import React from "react";
import { FiSearch } from "react-icons/fi";
import "./index.css";



const NavbarBase = (props: {children : React.ReactNode}) => {
  return (
    <header>
      <nav className="navbar-home">
        {props.children}
      </nav>
    </header>
  );
};

export default NavbarBase;
