import React from 'react';
import TopicoResumido from '../../interfaces/TopicoResumido';
import {FaComment} from 'react-icons/fa';
import './index.css';


const ListaTopicos = (props : {topicos : TopicoResumido[]}) =>{
    return (
        <section className="content">
        {props.topicos.map((topico : TopicoResumido) => (
            <article className="topico-container" key={topico.idTopico}>
                  <strong>{topico.nomeCriador}</strong>
                  <p>{topico.dataCriacao}</p>
                  <div className="topic-content">
                     <h1>{topico.titulo}</h1>
                     <p>{topico.conteudo}</p>
                     <a href="/">Leia mais...</a>
                     <section>
                         <FaComment size={15}/>  
                        <small>{topico.qtdComentarios}</small>
                     </section>
                  </div>
                </article> 
         ))}
        </section>
    );
}

export default ListaTopicos;