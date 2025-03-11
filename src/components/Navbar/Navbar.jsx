import React, { useState } from "react"
import styles from "./Navbar.module.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={styles.main}>
        <div className={styles.left}></div>
        <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <ul className={`${styles.right} ${isOpen ? styles.open : ""}`}>
          <li className={styles.navData}>&lt;home/&gt;</li>
          <li className={styles.navData}>&lt;projects/&gt;</li>
          <li className={styles.navData}>&lt;about me/&gt;</li>
          <li className={styles.navData}>&lt;contact/&gt;</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
