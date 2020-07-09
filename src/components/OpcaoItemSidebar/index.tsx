import React from 'react';
import { FaBookReader } from 'react-icons/fa';
import { OpcaoSidebar } from '../../interfaces/OpcaoSidebar';

export const OpcaoItem = (props : {ativo : boolean, opcao : OpcaoSidebar}) =>{
    
    function opcaoNormal(){
        return <div className="buttonItem">{props.opcao.icone}<button>{props.opcao.valor}</button></div>
    }

    function opcaoAtivada(){
        return <div className="buttonItem buttonSelect">{props.opcao.icone}<button>{props.opcao.valor}</button></div>
    }

    return (
        <li>
            {props.ativo ? opcaoAtivada() : opcaoNormal()};
        </li>
    )
}
