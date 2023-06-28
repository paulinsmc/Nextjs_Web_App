"use client";

import React, { useContext } from "react";
import styles from "./darkModeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  const { mode, toggle } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "0px" } : { right: "0px" }}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
