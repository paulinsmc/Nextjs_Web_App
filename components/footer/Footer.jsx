import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        Psoftonic &copy; {new Date().getFullYear()} All Rights Reserved.
      </div>
      <div className={styles.socials}>
        <Image
          src="/1.png"
          alt=""
          width={15}
          height={15}
          className={styles.icons}
        />
        <Image
          src="/2.png"
          alt=""
          width={15}
          height={15}
          className={styles.icons}
        />
        <Image
          src="/3.png"
          alt=""
          width={15}
          height={15}
          className={styles.icons}
        />
        <Image
          src="/4.png"
          alt=""
          width={15}
          height={15}
          className={styles.icons}
        />
      </div>
    </div>
  );
};

export default Footer;
