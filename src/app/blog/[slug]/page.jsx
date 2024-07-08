import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";

function SinglePost() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/luna.jpg" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Swordmaster`s youngest son</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="/luna.jpg"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Luna</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>lorem ipsun</div>
      </div>
    </div>
  );
}

export default SinglePost;
