"use client";

import React from "react";
import styles from "./GlobalContainer.module.css";
import { usePathname } from "next/navigation";

interface GlobalContainerProps {
  children: React.ReactNode;
}

const GlobalContainer: React.FC<GlobalContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default GlobalContainer;