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
import SkillsBox from "../../components/SkillsBox/SkillsBox"
import Footer from "../../components/Footer/Footer"

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

        <section className={styles.sectionThree}>
          <div className={styles.content}>
            <span className={styles.sectionTwoTop}>
              <h3 className={styles.sectionTwoParaOne}># Skills</h3>
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
                skills={["MongoDB", "MySQL", "Firebase"]}
              />
              <SkillsBox title="Tools" skills={["Git", "Postman", "Figma"]} />
              <SkillsBox
                title="Technologies"
                skills={["React.js", "React Native", "Node.js", "Expo"]}
              />
              <SkillsBox
                title="Cloud Services"
                skills={["Firebase", "Vercel", "Netlify"]}
              />
              <SkillsBox
                title="Operating Systems"
                skills={["Windows", "Linux", "MacOS"]}
              />
              <SkillsBox
                title="Languages"
                skills={["JavaScript", "Python", "C", "Java", "HTML", "CSS"]}
              />
            </div>
          </div>
        </section>

        <section className={styles.sectionFour}>
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
              <p>
                I completed my <strong>Intermediate (MPC)</strong> from{" "}
                <strong>Impulse Jr. College</strong>, Pragathi Nagar, Hyderabad,
                Telangana (2020 - 2021).
              </p>
              <p>
                My schooling was from{" "}
                <strong>Sri Siddhartha High School</strong>, Siddipet,
                Telangana.
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
                I’m a passionate web developer with hands-on experience in
                frontend development. I’ve worked on projects like building an
                E-commerce website and designing custom admin panels, where I
                applied my skills to create efficient and user-friendly
                solutions. I’m always eager to explore new technologies and
                enhance my expertise in web development.
              </p>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1rem",
                }}
              >
                <button className={styles.viewProjects}>View Projects</button>
              </div>
            </div>

            <div className={styles.appDevelopmentContainer}>
              <h4
                className={styles.sectionTwoParaOne}
                style={{ textAlign: "center", marginBottom: "1rem" }}
              >
                App Development
              </h4>
              <p>
                Passionate about app development, with expertise in React Native
                for cross-platform apps and experience using VS Code for native
                Android development. I enjoy building efficient and
                user-friendly applications while staying updated with the latest
                trends in mobile development. Always eager to learn and improve
                my skills in this ever-evolving field.
              </p>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1rem",
                }}
              >
                <button className={styles.viewProjects}>View Projects</button>
              </div>
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
                <li>When it comes to cooking, Pulihora is my specialty.</li>
                <li>Not really a dog or cat person—just neutral.</li>
                <li>
                  I don’t follow sports, but I love watching sci-fi and Marvel
                  movies.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.sectionFive}>
          <div
            className={styles.content}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span className={styles.sectionTwoTop}>
              <h3 className={styles.sectionTwoParaOne}># Contact</h3>
            </span>

            <div className={styles.sectionFiveBottom}>
              <p className={styles.contactDescription}>
                I’m interested in freelance opportunities. However, if you have
                other request or question, don’t hesitate to contact me
              </p>

              <form className={styles.contactForm}>
                <div className={styles.contactFormInputs}>
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  required
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </section>

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
