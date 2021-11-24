import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


export const SidebarData = [
  {
    title: <span><span><span>Accueil</span></span></span>,
    path: "/ulpage",
    icon: <AiIcons.AiFillHome/>,
    cName: "nav-text",
  },
  

  {
    title: <span><span><span>Articles </span></span></span>,
    path: "/ulpage",
    icon: <AiIcons.AiFillAppstore />,
    cName: "nav-text",
  },
  
  {
    title: <span><span><span>Pannier</span></span></span>,
    path: "/ulpage/:id/:id",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },

  {
    title: <span><span><span><span><span>Sortir</span></span></span></span></span>,
    path: "/",
    icon: <AiIcons.AiOutlineLogout />,
    cName: "nav-text",
  },
];



