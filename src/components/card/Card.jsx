import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill  className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>14.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        </Link>

        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium at
          tenetur nisi quisquam praesentium eveniet iusto aliquid sed unde, qui
          iste, consequatur ex neque provident eligendi natus, rerum molestiae.
          Fugiat veniam explicabo accusamus fuga in deleniti, corrupti nulla
          expedita voluptate quis dolore ipsa, voluptas ullam et eum tempora
          itaque doloribus!
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
}
