import React, { useEffect } from "react"
import styles from "./NotFound.module.css"
import video from "../../assets/video/error.mp4"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 5000)
  })
  return (
    <div className={styles.notFoundContainer}>
      <video autoPlay loop muted className={styles.notFoundVideo}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}

export default NotFound
