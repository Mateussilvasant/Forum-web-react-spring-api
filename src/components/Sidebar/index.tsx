import React from 'react';
import './index.css';
import {FaBookReader,FaComments} from 'react-icons/fa';
import { IconType, IconBaseProps } from 'react-icons/lib';
import { ItemSidebar } from '../ItemSidebar';
import { OpcaoSidebar } from '../../interfaces/OpcaoSidebar';


const SidebarComponent = (props : {posicao : number}) =>{

    const opcoes : OpcaoSidebar[] = [
      {
        valor : "Meus tópicos", 
        path : "", 
        icone : <FaBookReader size={16}/>
      },
      {
        valor : "Meus Comentários", 
        path : "",
        icone : <FaComments size={16}/>
      }
    ];

    function renderizarOpcao(opcao : OpcaoSidebar, indice : number, posicaoAtivada : number){

      if(indice === posicaoAtivada){
        return  <ItemSidebar key={opcao.valor} ativo={true} opcao={opcao}/>
      } else {
        return  <ItemSidebar  key={opcao.valor} ativo={false} opcao={opcao}/>
      }

    }

    return (
        <aside className="sidebar">
          <ul>
            {opcoes.map((opcao : OpcaoSidebar, indice : number) => (
              renderizarOpcao(opcao,indice,props.posicao)
            ))}
          </ul>
        </aside>
    );
};

export default SidebarComponent;
