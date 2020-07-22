import React, { Fragment } from "react";
import { itemsFactory } from "../SidebarBase";
import { OpcaoSidebar } from "../ItemSidebar/types/OpcaoSidebar";
import { opcoesSidebar } from "./opcoes";

export const SidebarIn = (props: { posicao: number }) => {
  return (
    <Fragment>
      <section className="welcome-profile">
        <span>
          Bem vindo, <strong>Mateus Silva</strong>
        </span>
      </section>
      <ul>
        {opcoesSidebar.map((opcao: OpcaoSidebar, indice: number) =>
          itemsFactory(opcao, indice, props.posicao)
        )}
      </ul>
    </Fragment>
  );
};
