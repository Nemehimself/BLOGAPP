"use client";

import { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

export const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);


  return (
    <div className={styles.container} onClick={toggle}
    style={
        theme === "dark" ? { background: "#ffffff" } : { background: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div
        className={styles.toggleBall}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "#ffffff" }
        }
      ></div>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  );
};
