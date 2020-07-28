import React from "react";
import "../index.css";
import TopicoResumido from "../types/TopicoResumido";
import { TopicoOut } from "../../TopicoHeader/TopicoOut";

export const TopicosOut = (props: { topicos: TopicoResumido[]}) => {
  return (
    <section className="content">
      {props.topicos.map((topico: TopicoResumido) => (
          <TopicoOut topico={topico} key={topico.idTopico}/>
      ))}
    </section>
  );
};
