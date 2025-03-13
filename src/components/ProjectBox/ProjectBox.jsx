import React from "react"
import styles from "./ProjectBox.module.css"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

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
    <motion.div
      whileHover={{
        scale: 1.15,
        backdropFilter: "blur(10px)",
        zIndex: 9,
        boxShadow: "10px 10px 20px rgba(255, 255, 255, 0.23)",
      }}
      initial={{
        scale: 1,
        backdropFilter: "none",
        zIndex: 0,
        boxShadow: "none",
      }}
      transition={{ duration: 0.4 }}
      className={styles.main}
    >
      <div className={styles.imgContainer}>
        {img !== "nodata" ? (
          <img
            src={img}
            alt="project"
            className={styles.image}
            draggable={false}
            loading="lazy"
          />
        ) : (
          <div
            className={styles.image}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            No preview available
          </div>
        )}
        {img2 && (
          <img
            src={img2}
            alt="project"
            className={styles.image}
            draggable={false}
            loading="lazy"
          />
        )}
        {img3 && (
          <img
            src={img3}
            alt="preview"
            className={styles.image}
            draggable={false}
            loading="lazy"
          />
        )}
      </div>
      <div className={styles.projectTitle}>{title}</div>

      <div className={styles.projectTechnologies}>
        {technologies.join(", ")}
      </div>

      <div className={styles.projectDescription}>{description}</div>

      <div className={styles.buttonContainer}>
        {websiteUrl || githubCode ? (
          <>
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
          </>
        ) : (
          <p className={styles.restrictedMessage}>
            Access to this project is restricted.
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectBox
