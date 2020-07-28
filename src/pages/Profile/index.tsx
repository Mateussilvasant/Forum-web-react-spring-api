import React, {useState} from 'react';
import "./index.css";
import SidebarBase from '../../components/SidebarBase'
import TopicoResumido from '../../components/ListaTopicos/types/TopicoResumido';
import { NavbarInContent } from '../../components/NavbarBase/Navbar-In';
import NavbarBase from '../../components/NavbarBase';
import { SidebarIn } from '../../components/SidebarBase/Sidebar-In';
import { topicos } from '../../mocks/topicos';
import { TopicosIn } from '../../components/ListaTopicos/TopicosIn';


const Profile = () => {

   const [getTopicos, setTopicos] = useState<TopicoResumido[]>(topicos.content);   

     return ( 
        <div className="init-page">
            <SidebarBase children={<SidebarIn posicao={0} />}/>            
            <div className="main-container">
               <NavbarBase children={<NavbarInContent/>}/>
                  <main className="container">
                  <TopicosIn topicos={getTopicos} />
                  </main>
                  <footer>
                  </footer>
            </div>
        </div>  
     );
 }

 export default Profile;