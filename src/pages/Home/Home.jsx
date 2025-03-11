import React from "react"
import styles from "./Home.module.css"
import Navbar from "../../components/Navbar/Navbar"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import ProjectBox from "../../components/ProjectBox/ProjectBox"
import portfolioImg from "../../assets/protfolioImg.png"
import budgetTrackerImg from "../../assets/budgetTrackerImg.png"
import budgetTrackerMobile from "../../assets/budgetTrackerMobile.jpg"
import budgetTrackerMobile2 from "../../assets/budgetTrackerMobile1.jpg"
import budgetTrackerMobile3 from "../../assets/budgetTrackerMobile2.jpg"
import GoToTop from "../../components/GoToTop/GoToTop"

const Home = () => {
  const handleOpen = (link) => {
    if (link) {
      window.open(link, "_blank")
    }
  }
  return (
    <>
      <div className={styles.social}>
        <div className={styles.sideLine} />
        <div className={styles.socialMedia1}>
          <FaGithub
            size={26}
            onClick={() => handleOpen("https://github.com/Nithilesh2/")}
          />
        </div>
        <div className={styles.socialMedia2}>
          <FaLinkedin
            size={26}
            onClick={() =>
              handleOpen("https://www.linkedin.com/in/bejagam-nithilesh/")
            }
          />
        </div>
        <div className={styles.socialMedia3}>
          <FaInstagram size={26} onClick={() => handleOpen()} />
        </div>
      </div>
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
        <section className={styles.sectionTwo}>
          <div className={styles.content}>
            <span className={styles.sectionTwoTop}>
              <h3 className={styles.sectionTwoParaOne}># Projects</h3>
              <div className={styles.viewAll}>view all ~~&gt;</div>
            </span>
          </div>
          <div className={styles.projects}>
            <ProjectBox
              img={portfolioImg}
              title="Portfolio"
              description="A hacker-themed portfolio website showcasing my skills and projects."
              technologies={["React", "CSS"]}
              githubCode="https://github.com/Nithilesh2/new-portfolio"
              websiteUrl="https://nithilesh.vercel.app/"
            />

            <ProjectBox
              img={budgetTrackerImg}
              title="Budget Tracker (Website)"
              description="A web-based budget tracker to manage expenses efficiently."
              technologies={[
                "React",
                "Context API",
                "MongoDB",
                "Axios",
                "Chart.js",
              ]}
              githubCode="https://github.com/Nithilesh2/budgetTracker"
              websiteUrl="https://2024-budgettracker.netlify.app/"
            />

            <ProjectBox
              img={budgetTrackerMobile}
              img2={budgetTrackerMobile2}
              img3={budgetTrackerMobile3}
              title="Budget Tracker (Mobile App)"
              description="A mobile app for tracking income and expenses on the go."
              technologies={[
                "React Native",
                "Expo",
                "Firebase",
                "Reanimated",
                "Chart Kit",
              ]}
              githubCode="https://github.com/Nithilesh2/rn-budget-tracker"
              websiteUrl=""
            />
          </div>
        </section>
      </div>
      <GoToTop />
    </>
  )
}

export default Home
