import React from 'react';
import './index.css';
import SidebarComponent from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import Topicos from '../../components/Topicos';

const Home = () =>{
    return (
        <div className="init-page">
        <SidebarComponent posicao={0}/>
           <div className="main-container">
              <Navbar/>
                 <main className="container">
                    <Topicos topicos={[]}/>
                 </main>
                  <footer>
                 </footer>
           </div>
       </div>  
    );
}

export default Home;