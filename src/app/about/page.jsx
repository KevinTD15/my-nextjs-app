import Image from "next/image";
import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About BTC</h2>
        <h1 className={styles.title}>Criptomoneda descentralizada</h1>
        <p className={styles.desc}>
          El bitcoin es una moneda virtual e intangible (criptodivisa) concebida
          en 2009. El término se aplica también al protocolo y a la red P2P que
          lo sustenta. Generalmente se usa 'Bitcoin' para referirse a la red o
          al protocolo y 'bitcoin' para referirse a las unidades monetarias.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>54499.20</h1>
            <p>Current value</p>
          </div>
          <div className={styles.box}>
            <h1>54499.20</h1>
            <p>Current value</p>
          </div>
          <div className={styles.box}>
            <h1>54499.20</h1>
            <p>Current value</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/aboutPage.jpg"
          alt="picture of btc"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
}

export default About;
