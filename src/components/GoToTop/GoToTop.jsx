import React, { useState, useEffect } from "react"
import styles from "./GoToTop.module.css"
import { IoIosArrowUp } from "react-icons/io"

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div>
      {isVisible && (
        <button className={styles.goToTop} onClick={scrollToTop}>
          <span className={styles.glitchText}>
            <IoIosArrowUp size={24} />
          </span>
        </button>
      )}
    </div>
  )
}

export default GoToTop
