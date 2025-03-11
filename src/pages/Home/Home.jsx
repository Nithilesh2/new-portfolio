import React from "react"
import styles from "./Home.module.css"
import Navbar from "../../components/Navbar/Navbar"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <section className={styles.sectionOne}>
          <div className={styles.content}>
            <span className={styles.left}>
              <h3 className={styles.paraOne}>WhoAmI</h3>
              <p className={styles.paraTwo}>
                Hey, I'm <span className={styles.highlight}>Nithilesh</span> — a
                passionate{" "}
                <span className={styles.highlight}>
                  Web Developer & App Developer
                </span>
              </p>
              <p className={styles.paraThree}>
                I specialize in{" "}
                <span className={styles.highlight}>React.js</span> for
                interactive web apps and{" "}
                <span className={styles.highlight}>React Native </span>
                for seamless cross-platform mobile experiences. I focus on
                <span className={styles.highlight}> responsive</span>,
                performance and integrating the latest tech for better user
                engagement.
              </p>
            </span>
            <span className={styles.right}>
              <div className={styles.glitchImg}></div>
            </span>
          </div>
          <div className={styles.buttonContainer}>
            <button type="button" className={styles.button}>
              # Contact me !
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
