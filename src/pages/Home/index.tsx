import React from "react";
import "./index.css";
import SidebarBase from "../../components/SidebarBase";
import Topicos from "../../components/Topicos";
import NavbarBase from "../../components/NavbarBase";
import { NavbarOutContent } from "../../components/Navbar-Out";
import { SidebarOut } from "../../components/Sidebar-Out";

const Home = () => {
  return (
    <div className="init-page">
      <SidebarBase children={<SidebarOut />} />
      <div className="main-container">
        <main className="container">
          <NavbarBase children={<NavbarOutContent />} />
          <Topicos topicos={[]} />
        </main>
        <footer></footer>
      </div>
    </div>
  );
};

export default Home;
