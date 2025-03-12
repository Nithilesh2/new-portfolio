import React from "react"
import styles from "./AboutWork.module.css"
import CountUp from "react-countup";

// eslint-disable-next-line no-unused-vars
const AboutWork = ({ icon: Icon, title, description }) => {
  return (
    <div className={styles.main}>
      <div className={styles.titleAndIcon}>
        <Icon size={28} />
        <h1>
          <CountUp start={0} end={title} duration={6} separator="," />+
        </h1>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  )
}

export default AboutWork
