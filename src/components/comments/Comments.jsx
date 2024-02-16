import Link from "next/link"
import styles from "./comments.module.css"
import Image from "next/image"

export const Comments = () => {

    const status = "authenticated"
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
{status === "authenticated" ? (
<div className={styles.write}>
<textarea className={styles.input} placeholder="Write a comment..." />
<button className={styles.button}>Send</button>
</div>
) : (
<Link href="/login">Login to write a comment</Link>)}

<div className={styles.comments}>
<div className={styles.comment}>
<div className={styles.user}>
    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}/>
    <div className={styles.userInfo}>
        <span className={styles.username}>John Doe</span>
        <span className={styles.date}>15.02.2024</span>
    </div>
</div>
<p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium natus cum id incidunt nulla! Eaque in eveniet, dolore sequi animi, autem atque, ipsa placeat deleniti maxime tempora sapiente sint?
</p>
</div>

<div className={styles.comment}>
<div className={styles.user}>
    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}/>
    <div className={styles.userInfo}>
        <span className={styles.username}>John Doe</span>
        <span className={styles.date}>15.02.2024</span>
    </div>
</div>
<p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium natus cum id incidunt nulla! Eaque in eveniet, dolore sequi animi, autem atque, ipsa placeat deleniti maxime tempora sapiente sint?
</p>
</div>

<div className={styles.comment}>
<div className={styles.user}>
    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}/>
    <div className={styles.userInfo}>
        <span className={styles.username}>John Doe</span>
        <span className={styles.date}>15.02.2024</span>
    </div>
</div>
<p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium natus cum id incidunt nulla! Eaque in eveniet, dolore sequi animi, autem atque, ipsa placeat deleniti maxime tempora sapiente sint?
</p>
</div>

<div className={styles.comment}>
<div className={styles.user}>
    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}/>
    <div className={styles.userInfo}>
        <span className={styles.username}>John Doe</span>
        <span className={styles.date}>15.02.2024</span>
    </div>
</div>
<p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium natus cum id incidunt nulla! Eaque in eveniet, dolore sequi animi, autem atque, ipsa placeat deleniti maxime tempora sapiente sint?
</p>
</div>
</div>
    </div>
  )
}
