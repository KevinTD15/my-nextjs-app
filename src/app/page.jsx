import Image from "next/image";
import styles from "./home.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Bitcoin</h1>
        <p className={styles.description}>Lorem, ipsum dolor</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brand}>
          <Image src="" alt="" className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/giphy.webp"
          alt=""
          className={styles.heroImg}
          unoptimized
          fill
        />
      </div>
    </div>
  );
}

export default HomePage;
