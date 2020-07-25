import React, {useState} from 'react';
import "./index.css";
import SidebarBase from '../../components/SidebarBase'
import TopicoResumido from '../../components/Topicos/types/TopicoResumido';
import Topicos from '../../components/Topicos';
import { NavbarInContent } from '../../components/Navbar-In';
import NavbarBase from '../../components/NavbarBase';
import { SidebarIn } from '../../components/Sidebar-In';
import { listaTopicos } from '../../mocks/topicos';


const Profile = () => {

   const [getTopicos, setTopicos] = useState<TopicoResumido[]>(listaTopicos);   

     return ( 
        <div className="init-page">
            <SidebarBase children={<SidebarIn posicao={0} />}/>            
            <div className="main-container">
               <NavbarBase children={<NavbarInContent/>}/>
                  <main className="container">
                     <Topicos topicos={getTopicos}/>
                  </main>
                  <footer>
                  </footer>
            </div>
        </div>  
     );
 }

 export default Profile;