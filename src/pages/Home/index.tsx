import React, {useState} from 'react';
import "./index.css";
import {FiSearch} from 'react-icons/fi';
import SidebarComponent from '../../components/Sidebar'
import NavbarComponent from '../../components/Navbar';



const Home = () => {

   interface TopicoResumido{
      idTopico : number,
      titulo : string,
      conteudo : string,
      dataCriacao : string,
      nomeCriador : string,
      qtdComentarios : number
   }

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
        <div className="home">
         <SidebarComponent/>
         <div className="content-home">
         <NavbarComponent/>
           <main className="container">
             <section className="content">
              <ul>
               {getTopicos.map((topico : TopicoResumido) => (
                  <li className="topico-container" key={topico.idTopico}>
                        <strong>{topico.nomeCriador}</strong>
                        <p>{topico.dataCriacao}</p>
                        <div className="topic-content">
                           <h1>{topico.titulo}</h1>
                           <pre>{topico.conteudo}</pre>
                           <a href="/">Leia mais...</a>
                           <section>
                              <small>{topico.qtdComentarios}</small>
                              <p>Comentários</p>   
                           </section>
                        </div>
                        <hr></hr> 
                  </li> 
               ))}
               </ul>
               </section>
           </main>
           <footer>
           </footer>
         </div>

         
        </div>  
     );
 }

 export default Home;