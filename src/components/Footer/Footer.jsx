import React from "react"
import styles from "./Footer.module.css"
import { FaGithub, FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <h3 className={styles.name}>Bejagam Nithilesh</h3>
        <p className={styles.email}>sunnybnithilesh@gmail.com</p>
        <p className={styles.role}>Web Developer & App Developer</p>
      </div>

      <div className={styles.right}>
        <h4>Media</h4>
        <div className={styles.icons}>
          <a
            href="https://github.com/Nithilesh2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://discord.com/channels/761480615211302963/761480615211302966"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
          </a>
          <a
            href="https://www.linkedin.com/in/bejagam-nithilesh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/_nithilesh_guptha_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <p className={styles.copyright}>© Copyright 2025. Made by Nithilesh</p>
    </footer>
  )
}

export default Footer
