import Image from "next/image";
import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.imgContainer}>
      <Image
        src="https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        fill
      />
    </div>
  );
}

export default About;
