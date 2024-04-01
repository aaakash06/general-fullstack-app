"use client"; 
import { useState } from "react";
import React from "react";
import NavLink from "./navLink";

import styles from './styles.module.css'
import { useContext } from "react";
import { NavContext } from "./navBar";
import { motion } from "framer-motion";
import { contextType, linkType } from "../../lib/interface";
const data: linkType[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" },

];


// const parent = {
//   hidden: { opacity: 0 }
//   , show: { opacity : 1
//   , transition: {
//     delay: 0.2, duration: 1, staggerChildren: .5
//   }
//   }
//   }
//   const child = {
//   hidden: { opacity: 0 , y: 30}
//   , show: { opacity : 1, y:0
//   , transition: {
//      duration: 1, 
//   }
//   }
//   }

const Links = () => {

  const api: contextType= useContext(NavContext); 
     
  const {setIsOpen}= api; 

  const [isSession, setIsSession] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <>
      {data.map((data) => {
        return (
         
              <NavLink key={data.name} data={data} >
          </NavLink>
   
        
         
        );
      })}
{isSession?  isAdmin? <><NavLink  data={{name: "Admin", path:"/admin"}}  ></NavLink><NavLink  data={{name: "Logout", path:"/"}} ></NavLink></>   : <><NavLink   data={{name: "Logout", path:"/"}}  ></NavLink></>
:
<NavLink   setIsSession={setIsSession} data={{name: "Login", path:"/login"}} ></NavLink>

}

    </>
  );
};

export default Links;
