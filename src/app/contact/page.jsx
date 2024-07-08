import Image from "next/image";
import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.jpg" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="Phone Number (optional)"></input>
          <textarea cols="30" rows="10" placeholder="Description"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
