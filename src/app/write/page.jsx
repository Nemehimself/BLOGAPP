"use client";

import Image from "next/image";
import styles from "./write.module.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

export default function WritePage() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />

      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/add.png" alt="Add" width={30} height={30} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt="Add" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="Add" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="Add" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill className={styles.textArea} theme="bubble" value={value} onChange={setValue} placeholder="Tell your story..." />
      </div>
      <button className={styles.publish}>Create</button>
    </div>
  );
}
