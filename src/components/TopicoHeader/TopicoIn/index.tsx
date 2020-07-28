import React, { Fragment } from 'react'
import './index.css'
import '../index.css'
import TopicoResumido from '../../ListaTopicos/types/TopicoResumido';
import { FaComments } from 'react-icons/fa';

export const TopicoIn = (props : {topico : TopicoResumido}) =>{
    return (
        <Fragment>
            <article className="topico-container">
                <strong>Autor: Eu</strong>
                <small>{props.topico.dataCriacao}</small>
                    <div className="topic-content">
                        <h1>{props.topico.titulo}</h1>
                        <p>{props.topico.conteudo}</p>
                            <section className="link-section">
                                <a href="/">Visualizar</a>
                            </section>
                            <section className="comment-section">
                                <FaComments className="icon-comment" color="#03a5fc" size={15} />
                                <small>{props.topico.qtdComentarios} comentários.</small>
                            </section>
                     </div>
            </article>
        </Fragment>
    );
}

export type TopicoIn = ReturnType<typeof TopicoIn>;