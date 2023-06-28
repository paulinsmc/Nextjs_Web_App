import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <h1 className={styles.title}>
          The best creative design for digital products
        </h1>
        <p className={styles.text}>
          We turn what you think in your mind from ideation into reality using
          the popular modern technologies.
        </p>
        <Button url="/portfolio" title="See Our Works" />
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.png" alt="" fill={true} className={styles.image} />
      </div>
    </div>
  );
}
