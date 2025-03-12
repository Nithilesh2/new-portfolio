import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (id) => {
    setIsOpen(false)

    if (location.pathname !== "/") {
      navigate("/", { replace: true })
      setTimeout(() => {
        const section = document.getElementById(id)
        if (section) {
          section.scrollIntoView({ behavior: "smooth" })
        }
      }, 100) 
    } else {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.left}></div>
      <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <ul className={`${styles.right} ${isOpen ? styles.open : ""}`}>
        <li className={styles.navData} onClick={() => scrollToSection("home")}>
          &lt;home/&gt;
        </li>
        <li className={styles.navData} onClick={() => scrollToSection("projects")}>
          &lt;projects/&gt;
        </li>
        <li className={styles.navData} onClick={() => scrollToSection("aboutMe")}>
          &lt;about me/&gt;
        </li>
        <li className={styles.navData} onClick={() => scrollToSection("contact")}>
          &lt;contact/&gt;
        </li>
      </ul>
    </div>
  )
}

export default Navbar
