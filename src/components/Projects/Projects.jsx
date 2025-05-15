import React, { useState } from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { getImageUrl } from "../../utils";

export const Projects = () => {
 const [modalImage, setModalImage] = useState(null);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projetos</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard
            key={id}
            project={project}
            onImageClick={() => setModalImage(getImageUrl(project.imageSrc))}
          />
        ))}
      </div>
      {modalImage && (
        <div className={styles.modalOverlay} onClick={() => setModalImage(null)}>
          <img src={modalImage} alt="Imagem do Projeto" className={styles.modalImage} />
        </div>
      )}
    </section>
  );
};
