import React from 'react';
import TopicoResumido from '../types/TopicoResumido';
import { TopicoIn } from '../../TopicoHeader/TopicoIn';

export const TopicosIn = (props: { topicos: TopicoResumido[]}) => {
    return (
      <section className="content">
        {props.topicos.map((topico: TopicoResumido) => (
            <TopicoIn topico={topico} key={topico.idTopico}/>
        ))}
      </section>
    );
  };