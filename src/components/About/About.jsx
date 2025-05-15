import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre Mim</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                Olá! 👋<br />
                Me chamo Gleyson, sou estudante do 5º período de Análise e Desenvolvimento de Sistemas, com formação técnica em Edificações pelo IFPE.<br />
                Tenho direcionado minha trajetória para a área de tecnologia, com foco em ciência de dados e inteligência artificial.<br />
                Já atuei em projetos acadêmicos voltados à saúde pública, criando dashboards interativos com Python, além de desenvolver sites responsivos utilizando Vue e React.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
