import React from "react"

import Image from "../atoms/Image"

import styles from "./hostAnimation.module.css"

const HostAnimation = ({ img, imgAlt }) => {
  return (
    <div className={styles.textImageWrapper}>
      <Image imgsrc={img} imgAlt={imgAlt} stylesImage={styles.stylesImage} />
    </div>
  )
}

export default HostAnimation
