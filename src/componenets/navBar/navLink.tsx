"use client";

import Link from "next/link";
import React from "react";
import { contextType, linkType } from "@/lib/interface";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { NavContext } from "./navBar";
import { ContextType } from "react";
import { motion } from "framer-motion";
interface argumentType {
  data: linkType;
  setIsSession?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLink = ({ data, setIsSession }: argumentType) => {
  const api: contextType = useContext(NavContext);

  const { isOpen, setIsOpen } = api;
  const path = usePathname();
  const isActive = path == data.path;

  const handleLinkClick = () => {
    if (isOpen) setIsOpen(false);
    if (data.name == "Login" || data.name == "Logout")
      setIsSession((curr) => !curr);
  };

  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <Link
        className={`  ${styles.linkContainer}       ${
          isActive && styles.active
        }  ${data.name == "Logout" && styles.logout} ${
          data.name == "Login" && styles.logout
        }`}
        href={data.path}
        onClick={handleLinkClick}
      >
        {" "}
        {data.name}{" "}
      </Link>
    </motion.div>
  );
};

export default NavLink;
