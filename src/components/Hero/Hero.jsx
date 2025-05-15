import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Gleyson Souza</h1>
          <p className={styles.description}>
          Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por dados e tecnologia,
          comprometido com aprendizado e inovação.
          </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contate-me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
