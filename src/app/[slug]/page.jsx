import React from "react";
import styles from "./singlePage.module.css";
import { Menu } from "@/components/menu/Menu";
import Image from "next/image";
import { Comments } from "@/components/comments/Comments";

export default function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, modi? </h1>
        <div className={styles.user}>
        <div className={styles.userImageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.avatar}/>
        </div>
        <div className={styles.userTextContainer}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}>15.02.2024</span>
        </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
      </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
        <div className={styles.description}>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium natus cum id incidunt nulla! Eaque in eveniet, dolore sequi animi, autem atque, ipsa placeat deleniti maxime tempora sapiente sint?
            </p>
            <h2 className={styles.subTitle}>
                Lorem ipsum dolor sit amet 
            </h2>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium natus cum id incidunt nulla! Eaque in eveniet, dolore sequi animi, autem atque, ipsa placeat deleniti maxime tempora sapiente sint?
            </p>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium natus cum id incidunt nulla! Eaque in eveniet, dolore sequi animi, autem atque, ipsa placeat deleniti maxime tempora sapiente sint?
            </p>
        </div>
        <div className={styles.comment}>
            <Comments />
        </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
