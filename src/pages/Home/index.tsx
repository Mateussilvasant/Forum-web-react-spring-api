import React from "react";
import "./index.css";
import SidebarBase from "../../components/SidebarBase";
import NavbarBase from "../../components/NavbarBase";
import { SidebarOut } from "../../components/SidebarBase/Sidebar-Out";
import { NavbarOutContent } from "../../components/NavbarBase/Navbar-Out";
import { topicos } from "../../mocks/topicos";
import { TopicosOut } from "../../components/ListaTopicos/TopicosOut";

const Home = () => {
  return (
    <div className="init-page">
      <SidebarBase children={<SidebarOut />} />
      <div className="main-container">
        <main className="container">
          <NavbarBase children={<NavbarOutContent />} />
          <TopicosOut topicos={topicos.content} />
        </main>
        <footer></footer>
      </div>
    </div>
  );
};

export default Home;
