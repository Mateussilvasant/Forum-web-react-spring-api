import { OpcaoSidebar } from "../ItemSidebar/types/OpcaoSidebar";
import { FaBookReader, FaComments } from "react-icons/fa";
import React from "react";

export const opcoesSidebar: OpcaoSidebar[] = [
    {
      valor: "Meus tópicos",
      path: "",
      icone: <FaBookReader size={16} />,
    },
    {
      valor: "Meus Comentários",
      path: "",
      icone: <FaComments size={16} />,
    },
];