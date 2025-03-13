import React, { useEffect, useRef, useState } from "react"
import emailjs from "emailjs-com"
import styles from "./Home.module.css"
import Navbar from "../../components/Navbar/Navbar"
import { FaGithub, FaInstagram, FaLinkedin, FaStar } from "react-icons/fa"
import { Database, Wrench, Code, Cloud, Monitor, Languages } from "lucide-react"
import ProjectBox from "../../components/ProjectBox/ProjectBox"
import portfolioImg from "../../assets/protfolioImg.png"
import budgetTrackerImg from "../../assets/budgetTrackerImg.png"
import budgetTrackerMobile from "../../assets/budgetTrackerMobile.jpg"
import budgetTrackerMobile2 from "../../assets/budgetTrackerMobile1.jpg"
import budgetTrackerMobile3 from "../../assets/budgetTrackerMobile2.jpg"
import GoToTop from "../../components/GoToTop/GoToTop"
import SkillsBox from "../../components/SkillsBox/SkillsBox"
import Footer from "../../components/Footer/Footer"
import AboutWork from "../../components/AboutWork/AboutWork"
// import { PiLightbulbBold } from "react-icons/pi"
import { useLocation, useNavigate } from "react-router-dom"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const Home = () => {
  const [isSent, setIsSent] = useState(false)
  const handleOpen = (link) => {
    if (link) {
      window.open(link, "_blank")
    }
  }
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }, [location.pathname])

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const section = document.getElementById(location.state.scrollTo)
        if (section) {
          section.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [location])

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSent(true)

    emailjs
      .sendForm(
        "service_anvnrzp",
        "template_d0h60jh",
        form.current,
        "PixE8S-7pHeZ6vNBj"
      )
      .then(
        () => {
          setIsSent(false)
          e.target.reset()
        },
        (error) => {
          setIsSent(false)
          console.error("Email send error:", error.text)
        }
      )
  }

  const goToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
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
          <div className={styles.socialMedia2}>
            <FaLinkedin
              size={26}
              onClick={() =>
                handleOpen("https://www.linkedin.com/in/bejagam-nithilesh/")
              }
            />
          </div>
          <div className={styles.socialMedia3}>
            <FaInstagram
              size={26}
              onClick={() =>
                handleOpen("https://www.instagram.com/_nithilesh_guptha_/")
              }
            />
          </div>
          {/* <div className={styles.socialMedia4}>
            <PiLightbulbBold
              size={26}
              onClick={() =>
                handleOpen("https://www.instagram.com/_nithilesh_guptha_/")
              }
            />
          </div> */}
        </div>
      </div>
      <Navbar />
      <div className={styles.main}>
        <motion.section
          id="home"
          className={styles.sectionOne}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
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
            <button
              type="button"
              className={styles.button}
              onClick={() => goToSection("contact")}
            >
              # Contact me !
            </button>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: false }}
          id="projects"
          className={styles.sectionTwo}
        >
          <div className={styles.content}>
            <span className={styles.sectionTwoTop}>
              <h3 className={styles.sectionTwoParaOne}># Projects</h3>
              <div
                className={styles.viewAll}
                onClick={() => navigate("/view-projects")}
                style={{
                  cursor: "default",
                }}
              >
                view all ~~&gt;
              </div>
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
              websiteUrl="https://drive.google.com/file/d/1wUkoc5UiFE14iJZGHvqewhS41OdhKxor/view?usp=drive_link"
            />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: false }}
          id="skills"
          className={styles.sectionThree}
        >
          <div className={styles.content}>
            <span className={styles.sectionTwoTop}>
              <h3 className={styles.sectionTwoParaOne}># Tech Stack</h3>
            </span>
          </div>
          <div className={styles.sectionThreeBottom}>
            <div className={styles.sectionThreeLeft}>
              <div className={styles.box1} />
              <div className={styles.box2} />
              <div className={styles.box3}>
                {Array.from({ length: 16 }, (_, index) => (
                  <div key={index} className={styles.dot} />
                ))}
              </div>
              <div className={styles.box4}></div>
              <div className={styles.box5}>
                {Array.from({ length: 9 }, (_, index) => (
                  <div key={index} className={styles.dot} />
                ))}
              </div>
            </div>
            <div className={styles.sectionThreeRight}>
              <SkillsBox
                title="Databases"
                icon={<Database />}
                skills={["MongoDB", "MySQL", "Firebase"]}
              />
              <SkillsBox
                title="Tools"
                icon={<Wrench />}
                skills={["Git", "Postman", "Figma"]}
              />
              <SkillsBox
                title="Technologies"
                icon={<Code />}
                skills={["React.js", "React Native", "Node.js", "Expo"]}
              />
              <SkillsBox
                title="Cloud Services"
                icon={<Cloud />}
                skills={["Firebase", "Vercel", "Netlify"]}
              />
              <SkillsBox
                title="Operating Systems"
                icon={<Monitor />}
                skills={["Windows", "Linux", "MacOS"]}
              />
              <SkillsBox
                title="Languages"
                icon={<Languages />}
                skills={["JavaScript", "Python", "C", "Java", "HTML", "CSS"]}
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: false }}
          id="aboutMe"
          className={styles.sectionFour}
        >
          <div className={styles.content}>
            <span className={styles.sectionTwoTop}>
              <h3 className={styles.sectionTwoParaOne}># About me</h3>
            </span>
          </div>
          <div className={styles.sectionFourBottom}>
            <div className={styles.academicsContainer}>
              <h4
                className={styles.sectionTwoParaOne}
                style={{ textAlign: "center", marginBottom: "1rem" }}
              >
                Academics
              </h4>
              <p>
                I am currently pursuing a{" "}
                <strong>
                  B.Tech in Computer Science and Engineering (CSE)
                </strong>{" "}
                at
                <strong> IARE College</strong>, Dundigal, Hyderabad, Telangana
                (2021 - 2025).
              </p>
            </div>

            <div className={styles.webDevelopmentContainer}>
              <h4
                className={styles.sectionTwoParaOne}
                style={{ textAlign: "center", marginBottom: "1rem" }}
              >
                Web Development
              </h4>
              <p>
                I'm a passionate web developer who loves crafting user-friendly
                experiences. I've built E-commerce sites and custom admin
                panels.
              </p>
            </div>

            <div className={styles.appDevelopmentContainer}>
              <h4
                className={styles.sectionTwoParaOne}
                style={{ textAlign: "center", marginBottom: "1rem" }}
              >
                App Development
              </h4>
              <p>
                I love building mobile apps with React Native and Android
                development in VS Code. I focus on efficiency, user experience,
                and constantly learning the latest trends.
              </p>
            </div>

            <div className={styles.funFactsContainer}>
              <h4
                className={styles.sectionTwoParaOne}
                style={{ textAlign: "center", marginBottom: "1rem" }}
              >
                Facts About Me
              </h4>
              <ul>
                <li>Chai (tea) is my go-to drink.</li>
                <li>I enjoy drawing and sketching in my free time.</li>
                <li>Not really a dog or cat person—just neutral.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: false }}
          id="communtiy"
          className={styles.sectionFour}
        >
          <div className={styles.content}>
            <span className={styles.sectionTwoTop}>
              <h3 className={styles.sectionTwoParaOne}>
                # Community & Network
              </h3>
            </span>
          </div>
          <div className={styles.sectionSixBottom}>
            <AboutWork
              icon={FaGithub}
              title={2}
              description="GitHub Followers"
            />
            <AboutWork
              icon={FaStar}
              title={50}
              description="GitHub Repositories"
            />
            <AboutWork
              icon={FaLinkedin}
              title={1400}
              description="LinkedIn Impressions"
            />
            <AboutWork
              icon={FaLinkedin}
              title={175}
              description="LinkedIn Connections"
            />
            <AboutWork
              icon={FaInstagram}
              title={300}
              description="Instagram Followers"
            />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: false }}
          id="contact"
          className={styles.sectionFive}
        >
          <div
            className={styles.content}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span className={styles.sectionTwoTop} style={{ marginLeft: "0" }}>
              <h3 className={styles.sectionTwoParaOne}># Contact</h3>
            </span>

            <div className={styles.sectionFiveBottom}>
              <p className={styles.contactDescription}>
                I’m interested in freelance opportunities. However, if you have
                other request or question, don’t hesitate to contact me
              </p>

              <form
                ref={form}
                className={styles.contactForm}
                onSubmit={sendEmail}
              >
                <div className={styles.contactFormInputs}>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  required
                  name="message"
                ></textarea>
                <button type="submit">
                  {isSent ? "Sending Message..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </motion.section>

        <Footer />
      </div>
      <div className={styles.mail}>
        <a href="mailto:sunnybnithilesh@gmail.com" className={styles.mailLink}>
          sunnybnithilesh@gmail.com
        </a>
      </div>
      <GoToTop />
    </>
  )
}

export default Home
