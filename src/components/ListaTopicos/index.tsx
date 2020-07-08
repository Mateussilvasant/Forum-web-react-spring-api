import React from 'react';
import TopicoResumido from '../../interfaces/TopicoResumido';


const ListaTopicos = (props : {topicos : TopicoResumido[]}) =>{
    return (
        <section className="content">
        {props.topicos.map((topico : TopicoResumido) => (
            <article className="topico-container" key={topico.idTopico}>
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
            </article> 
         ))}
        </section>
    );
}

export default ListaTopicos;