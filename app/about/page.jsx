import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/abt.jpg" alt="" fill={true} className={styles.image} />
        <div className={styles.textContainer}>
          <h1 className={styles.title}>About Psoftonic Company</h1>
          <h3 className={styles.desc}>
            Best development platform for the better products design
          </h3>
        </div>
      </div>
      <div className={styles.contents}>
        <h1 className={styles.headText}>Who We Are?</h1>
        <p className={styles.headDesc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          voluptates incidunt quia nam! Dolore, veniam aperiam, eligendi
          similique quod hic pariatur officiis assumenda dignissimos veritatis
          voluptates repellat fuga ad porro accusantium quisquam excepturi
          atque, exercitationem natus impedit? Nulla, ipsa dicta ex
          reprehenderit facere animi soluta at neque sint nisi id, minima
          provident delectus vel doloribus cupiditate voluptas, ipsam ratione!
          Architecto?
        </p>
        <Button url="/portfolio" title="Check Our Portfolio" />
      </div>
    </div>
  );
};

export default About;
