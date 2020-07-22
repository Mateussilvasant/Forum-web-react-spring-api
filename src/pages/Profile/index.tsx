import React, {useState} from 'react';
import "./index.css";
import SidebarBase from '../../components/SidebarBase'
import TopicoResumido from '../../components/Topicos/types/TopicoResumido';
import Topicos from '../../components/Topicos';
import { NavbarInContent } from '../../components/Navbar-In';
import NavbarBase from '../../components/NavbarBase';
import { SidebarIn } from '../../components/Sidebar-In';


const Profile = () => {

   const listaTopicos : TopicoResumido[]  = [
      {
         idTopico : 1,
         titulo : "ReactJS um breve Tutorial",
         conteudo : "O React balbalbalbalblabalbalbalblablalbalblaballba",
         dataCriacao : "12/02/2019",
         nomeCriador : "Mateus Silva",         
         qtdComentarios : 10
      },
      {
         idTopico : 8,
         titulo : "React Native: Mobile",
         conteudo : "O React balbalbalbfdsfdasfdsafdas\nalblabalbalbalblablalbal\nblaballbfdsafdafdafdasfdasfdasa",
         dataCriacao : "12/02/2020",
         nomeCriador : "Mateus Silva",         
         qtdComentarios : 5
      },
      {
         idTopico : 9,
         titulo : "Springboot: Backend",
         conteudo : "O React balbalbalfdsafdsafdsafdaskfdjfjdjdfj\nbalblabalbalbalblablalbal\nblaballbfdsafdafdafdasfdasfdasa",
         dataCriacao : "12/02/2020",
         nomeCriador : "Mateus Silva",         
         qtdComentarios : 5
      },
      {
         idTopico : 10,
         titulo : "O mundo do Javascript ",
         conteudo : "O React balbalbalbalblabalbalbalblablalbal\nblaballbfdsafdafdafdasfdasfdasa",
         dataCriacao : "12/02/2020",
         nomeCriador : "Mateus Silva",         
         qtdComentarios : 5
      },
      {
         idTopico : 11,
         titulo : "A mágia do Typescript",
         conteudo : "O React balbalbalbfdsfdasfdsafdas\nalblabalbalbalblablalbal\nblaballbfdsafdafdafdasfdasfdasa",
         dataCriacao : "12/02/2020",
         nomeCriador : "Mateus Silva",         
         qtdComentarios : 5
      },
      {
         idTopico : 12,
         titulo : "Tudo que você precisa saber sobre o mundo do Desenvolvimento",
         conteudo : "O React balbalbalfdsafdsafdsafdaskfdjfjdjdfj\nbalblabalbalbalblablalbal\nblaballbfdsafdafdafdasfdasfdasa",
         dataCriacao : "12/02/2020",
         nomeCriador : "Mateus Silva",         
         qtdComentarios : 5
      }
   ];
   
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