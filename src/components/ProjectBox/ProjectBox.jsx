import React from "react"
import styles from "./ProjectBox.module.css"

const ProjectBox = ({
  img,
  img2,
  img3,
  title,
  technologies,
  description,
  githubCode,
  websiteUrl,
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.imgContainer}>
        <img
          src={img}
          alt="project"
          className={styles.image}
          draggable={false}
        />
        {img2 && (
          <img
            src={img2}
            alt="project"
            className={styles.image}
            draggable={false}
          />
        )}
        {img3 && (
          <img
            src={img3}
            alt="project"
            className={styles.image}
            draggable={false}
          />
        )}
      </div>
      <div className={styles.projectTitle}>{title}</div>

      <div className={styles.projectTechnologies}>
        {technologies.join(", ")}
      </div>

      <div className={styles.projectDescription}>{description}</div>

      <div className={styles.buttonContainer}>
        {websiteUrl && (
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>Live</button>
          </a>
        )}

        {githubCode && (
          <a href={githubCode} target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>&lt; Code /&gt;</button>
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectBox
