import React from 'react';
import './index.css';
import SidebarComponent from '../../components/Sidebar';
import Topicos from '../../components/Topicos';
import NavbarBase from '../../components/NavbarBase';
import { NavbarOutContent } from '../../components/Navbar-Out';

const Home = () =>{
    return (
        <div className="init-page">
        <SidebarComponent posicao={0}/>
           <div className="main-container">
                 <main className="container">
                 <NavbarBase children={<NavbarOutContent/>}/>
                    <Topicos topicos={[]}/>
                 </main>
                  <footer>
                 </footer>
           </div>
       </div>  
    );
}

export default Home;