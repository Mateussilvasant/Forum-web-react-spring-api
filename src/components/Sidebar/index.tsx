import React, {useEffect} from 'react';
import './index.css';
import {FaBookReader,FaComments} from 'react-icons/fa';
import { IconType, IconBaseProps } from 'react-icons/lib';
import { OpcaoItem } from '../OpcaoItemSidebar';
import { OpcaoSidebar } from '../../interfaces/OpcaoSidebar';


const SidebarComponent = (props : {posicao : number}) =>{

    const opcoes : OpcaoSidebar[] = [
      {
        valor : "Meus tópicos", 
        path : "", 
        icone : <FaBookReader className="icon-item" size={20}/>
      },
      {
        valor : "Meus Comentários", 
        path : "",
        icone : <FaComments className="icon-item" size={20}/>
      }
    ];

    function renderizarOpcao(opcao : OpcaoSidebar, indice : number, posicaoAtivada : number){

      if(indice === posicaoAtivada){
        return  <OpcaoItem ativo={true} opcao={opcao}/>;
      } else {
        return  <OpcaoItem ativo={false} opcao={opcao}/>;
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
