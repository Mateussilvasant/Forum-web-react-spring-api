import React, {useState} from 'react';
import "./index.css";
import {FiSearch} from 'react-icons/fi';
import SidebarComponent from '../../components/Sidebar'
import NavbarComponent from '../../components/Navbar';
import TopicoResumido from '../../interfaces/TopicoResumido';
import ListaTopicos from '../../components/ListaTopicos';


const Home = () => {

   const listaTopicos : TopicoResumido[]  = [
      {
         idTopico : 1,
         titulo : "ReactJS um breve Tutorial",
         conteudo : "O React balbalbalbalblabalbalbalblablalbalblaballba",
         dataCriacao : "12/02/2019",
         nomeCriador : "Mateus",         
         qtdComentarios : 10
      },
      {
         idTopico : 8,
         titulo : "ReactJS um breve Tutorial",
         conteudo : "O React balbalbalbfdsfdasfdsafdas\nalblabalbalbalblablalbal\nblaballbfdsafdafdafdasfdasfdasa",
         dataCriacao : "12/02/2020",
         nomeCriador : "Mateus",         
         qtdComentarios : 5
      },
      {
         idTopico : 9,
         titulo : "ReactJS um breve Tutorial",
         conteudo : "O React balbalbalfdsafdsafdsafdaskfdjfjdjdfj\nbalblabalbalbalblablalbal\nblaballbfdsafdafdafdasfdasfdasa",
         dataCriacao : "12/02/2020",
         nomeCriador : "Mateus",         
         qtdComentarios : 5
      },
      {
         idTopico : 10,
         titulo : "ReactJS um breve Tutorial",
         conteudo : "O React balbalbalbalblabalbalbalblablalbal\nblaballbfdsafdafdafdasfdasfdasa",
         dataCriacao : "12/02/2020",
         nomeCriador : "Mateus",         
         qtdComentarios : 5
      },
      {
         idTopico : 11,
         titulo : "ReactJS um breve Tutorial",
         conteudo : "O React balbalbalbfdsfdasfdsafdas\nalblabalbalbalblablalbal\nblaballbfdsafdafdafdasfdasfdasa",
         dataCriacao : "12/02/2020",
         nomeCriador : "Mateus",         
         qtdComentarios : 5
      },
      {
         idTopico : 12,
         titulo : "ReactJS um breve Tutorial",
         conteudo : "O React balbalbalfdsafdsafdsafdaskfdjfjdjdfj\nbalblabalbalbalblablalbal\nblaballbfdsafdafdafdasfdasfdasa",
         dataCriacao : "12/02/2020",
         nomeCriador : "Mateus",         
         qtdComentarios : 5
      }
   ];
   

   const [getTopicos, setTopicos] = useState<TopicoResumido[]>(listaTopicos);   


     return ( 
        <div className="init-page">
         <SidebarComponent/>
         <div className="main-container">
         <NavbarComponent/>
           <main className="container">
               <ListaTopicos topicos={getTopicos}/>
           </main>
           <footer>
           </footer>
         </div>
        </div>  
     );
 }

 export default Home;