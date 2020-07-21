import React from "react";
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
