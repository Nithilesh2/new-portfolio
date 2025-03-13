import React from "react"
import styles from "./SkillsBox.module.css"

const SkillsBox = ({ title, icon, skills }) => {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        {title} {icon}
      </div>
      <div className={styles.bottom}>
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </div>
  )
}

export default SkillsBox
