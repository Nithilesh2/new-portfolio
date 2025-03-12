import React from "react"
import styles from "./SkillsBox.module.css"

const SkillsBox = ({ title, skills }) => {
  return (
    <div className={styles.main}>
      <div className={styles.top}>{title}</div>
      <div className={styles.bottom}>
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </div>
  )
}

export default SkillsBox
