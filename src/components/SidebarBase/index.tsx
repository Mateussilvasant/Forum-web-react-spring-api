import React from "react";
import "./index.css";
import { ItemSidebar } from "../ItemSidebar";
import { OpcaoSidebar } from "../ItemSidebar/types/OpcaoSidebar";
import { SidebarOut } from "./Sidebar-Out";
import { SidebarIn } from "./Sidebar-In";

const SidebarBase = (props: { children : SidebarOut | SidebarIn}) => {
  return (
    <aside className="sidebar">
          {props.children}
    </aside>
  );
};

export function itemsFactory(opcao: OpcaoSidebar,indice: number, posicaoAtivada: number) {
  if (indice === posicaoAtivada) {
    return <ItemSidebar key={opcao.valor} ativo={true} opcao={opcao} />;
  } else {
    return <ItemSidebar key={opcao.valor} ativo={false} opcao={opcao} />;
  }
}

export default SidebarBase;
