import React from "react";
import TopicoResumido from "./types/TopicoResumido";
import { FaComments } from "react-icons/fa";
import "./index.css";

const Topicos = (props: { topicos: TopicoResumido[] }) => {
  return (
    <section className="content">
      {props.topicos.map((topico: TopicoResumido) => (
        <article className="topico-container" key={topico.idTopico}>
          <strong>{topico.nomeCriador}</strong>
          <small>{topico.dataCriacao}</small>
          <div className="topic-content">
            <h1>{topico.titulo}</h1>
            <p>{topico.conteudo}</p>
            <section className="link-section">
              <a href="/">Leia mais...</a>
            </section>
            <section className="comment-section">
              <FaComments className="icon-comment" color="#03a5fc" size={15} />
              <small>{topico.qtdComentarios} comentários.</small>
            </section>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Topicos;
