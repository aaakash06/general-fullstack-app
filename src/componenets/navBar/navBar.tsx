"use client";
import React from "react";
import Links from "./links";
import styles from "./styles.module.css";
import Image from "next/image";
import { createContext, useState, useContext } from "react";

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

// const variants = {
//   hidden: {opacity:0 , x:10},
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "-100%" },

// }

export const NavContext = createContext({});
const NavBar = () => {
  const handleMenu = () => {
    setIsOpen((curr) => !curr);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContext.Provider value={{ isOpen, setIsOpen, handleMenu }}>
      <div className={`${styles.container} poppins`}>
        <h1 className={`${styles.logo} roboto`}> ε0</h1>

        <div className={styles.linkBar}>
          <Links ></Links>
        </div>

        <Image
          className={styles.menu}
          onClick={handleMenu}
          src="/menu.png"
          width={23}
          height={23}
          alt="menu"
        ></Image>
        {isOpen && (
          <div
            
            className={styles.outer}
          >
            <div className={styles.mobileNav}>
              <Links></Links>
            </div>
          </div>
        )}
      </div>
    </NavContext.Provider>
  );
};

export default NavBar;
