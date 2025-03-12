import React from "react"
import styles from "./Projects.module.css"
import Navbar from "../../components/Navbar/Navbar"
import ProjectBox from "../../components/ProjectBox/ProjectBox"
import portfolioImg from "../../assets/protfolioImg.png"
import budgetTrackerImg from "../../assets/budgetTrackerImg.png"
import exclusive from "../../assets/24exclusive.png"
import recipefinder from "../../assets/recipefinder.png"
import weather from "../../assets/weather.png"
import snakewatergungame from "../../assets/snakewatergame.png"
import courseprovider from "../../assets/courseprovider.png"
import quiz from "../../assets/quiz.png"
import cardpayment from "../../assets/paymentgateway.png"
import tempconverter from "../../assets/temperatureconverter.png"
import calculator from "../../assets/calculator.png"
import budgetTrackerMobile from "../../assets/budgetTrackerMobile.jpg"
import budgetTrackerMobile3 from "../../assets/budgetTrackerMobile2.jpg"
import groceriesMobile from "../../assets/groceriesMobile1.jpg"
import groceriesMobile1 from "../../assets/groceriesMobile2.jpg"
import GoToTop from "../../components/GoToTop/GoToTop"

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.one}>
          /<span>Projects</span>
          <p>List of my Projects</p>
        </div>
        <div className={styles.website}>
          <span className={styles.sectionTwoParaOne}># Websites</span>
          <div className={styles.bottom}>
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
              title="Budget Tracker"
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
              img={exclusive}
              title="24Exclusive (E-Commerce Website)"
              description="A feature-rich e-commerce website offering seamless shopping experiences."
              technologies={[
                "React",
                "Context API",
                "MongoDB",
                "Axios",
                "MUI",
                "React Router",
              ]}
              githubCode="https://github.com/Nithilesh2/e-commerce"
              websiteUrl="https://24exclusive.netlify.app/"
            />
            <ProjectBox
              img={recipefinder}
              title="Recipe Finder"
              description="A web app to discover delicious recipes based on ingredients and cuisine preferences."
              technologies={[
                "React",
                "React Router",
                "Axios",
                "React Toastify",
                "React Spinners",
              ]}
              githubCode="https://github.com/Nithilesh2/Recipe-Finder"
              websiteUrl="https://2024-recipefinder.netlify.app/"
            />
            <ProjectBox
              img={weather}
              title="Weather Forecast"
              description="A simple weather app providing real-time weather data, forecasts, and current location-based updates."
              technologies={[
                "HTML",
                "CSS",
                "JavaScript",
                "OpenWeather API",
                "Geolocation API",
              ]}
              githubCode="https://github.com/Nithilesh2/Weather"
              websiteUrl="https://2023-weather-forecast.netlify.app/"
            />
            <ProjectBox
              img={snakewatergungame}
              title="Snake, Water, and Gun Game"
              description="A fun and interactive game where you can play against a bot or a friend in the classic Snake, Water, and Gun challenge."
              technologies={["HTML", "CSS", "JavaScript", "Lottie Animations"]}
              githubCode="https://github.com/Nithilesh2/snake_water_gun_game"
              websiteUrl="https://snake-water-gun-and-game.netlify.app/"
            />
            <ProjectBox
              img={courseprovider}
              title="Course Provider Platform"
              description="An educational platform offering various courses with interactive features and email integration."
              technologies={[
                "React",
                "React Router",
                "Bootstrap",
                "MDB React UI Kit",
                "Axios",
                "React Icons",
                "React Type Animation",
                "EmailJS",
                "Font Awesome",
              ]}
              githubCode="https://github.com/Nithilesh2/pp-p1"
              websiteUrl="https://2024-govardhan.netlify.app/"
            />
            <ProjectBox
              img={quiz}
              title="True or False Quiz"
              description="An engaging quiz game where users answer true or false questions to test their knowledge."
              technologies={["React", "React Router", "JavaScript", "CSS"]}
              githubCode="https://github.com/Nithilesh2/quiz"
              websiteUrl="https://trueorfalse-2024.netlify.app/"
            />
            <ProjectBox
              img={cardpayment}
              title="Card Payment Gateway"
              description="A simulated card payment gateway UI with an interactive credit card input form."
              technologies={["HTML", "CSS", "JavaScript", "FontAwesome"]}
              githubCode="https://github.com/Nithilesh2/card-payment"
              websiteUrl="https://card-payment.netlify.app/"
            />
            <ProjectBox
              img={tempconverter}
              title="Temperature Converter"
              description="A simple temperature converter to switch between Celsius and Fahrenheit effortlessly."
              technologies={["HTML", "CSS", "JavaScript"]}
              githubCode="https://github.com/Nithilesh2/temperature-converter"
              websiteUrl="https://temperature-converter2023.netlify.app/"
            />
            <ProjectBox
              img={calculator}
              title="Calculator"
              description="A simple and responsive calculator with basic arithmetic operations."
              technologies={["HTML", "CSS", "JavaScript", "Ionicons"]}
              githubCode="https://github.com/Nithilesh2/calculator2024"
              websiteUrl="https://2024-calci.netlify.app/"
            />
          </div>
        </div>

        <div className={styles.website}>
          <span className={styles.sectionTwoParaOne}># Mobile Apps</span>
          <div className={styles.bottom}>
            <ProjectBox
              img={budgetTrackerMobile}
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
              websiteUrl="https://drive.google.com/file/d/1NzFRzSZCkdUnumpmYBflrUoUp_aL7u66/view?usp=sharing"
            />
            <ProjectBox
              img={groceriesMobile}
              img3={groceriesMobile1}
              title="Groceries App"
              description="A mobile application for ordering groceries with a seamless user experience, navigation, and animations."
              technologies={[
                "React Native",
                "Expo",
                "Expo Router",
                "React Navigation",
                "React Native Paper",
                "Reanimated",
                "Reanimated Carousel",
                "React Native Gesture Handler",
                "React Native Webview",
                "React Native Toast Message",
              ]}
            />
          </div>
        </div>
      </div>
      <GoToTop />
    </>
  )
}

export default Projects
