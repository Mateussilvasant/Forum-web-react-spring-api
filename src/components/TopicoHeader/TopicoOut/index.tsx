import React, { Fragment } from 'react'
import TopicoResumido from '../../ListaTopicos/types/TopicoResumido'
import { FaComments } from 'react-icons/fa';
import '../index.css'
import './index.css'

export const TopicoOut = (props : {topico : TopicoResumido}) =>{
    return (
        <Fragment>
        <article className="topico-container">
            <strong>Autor: {props.topico.nomeCriador}</strong>
            <small>{props.topico.dataCriacao}</small>
                <div className="topic-content">
                    <h1>{props.topico.titulo}</h1>
                    <p>{props.topico.conteudo}</p>
                        <section className="link-section">
                            <a href="/">Leia mais...</a>
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

export type TopicoOut = ReturnType<typeof TopicoOut>