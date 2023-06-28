import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const Contact = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.contactTitle}>Get In Touch With Us</h1>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/cont.png" alt="" fill={true} className={styles.image} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <textarea
            placeholder="Message"
            cols="30"
            rows="6"
            className={styles.textArea}
          ></textarea>
          <Button url="/contact" title="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
