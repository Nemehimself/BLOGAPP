"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

export const AuthLinks = () => {

  const [open, setOpen] = useState(false);

  const {status} = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>Create Post</Link>
          <span className={styles.link} onClick={signOut}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen (!open)}>
        <div
          className={styles.line}
          style={{ transform: open ? "rotate(-45deg)" : "rotate(0)" }}
        ></div>
        <div
          className={styles.line}
          style={{ opacity: open ? 0 : 1, transform: open ? "translateX(20px)" : "translateX(0)" }}
        ></div>
        <div
          className={styles.line}
          style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }}
        ></div>
      </div>
      {open && (
        <div className={styles.dropdownMenu}>
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>

          {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/post">Post</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
        </div>
      )}
    </>
  );
};
