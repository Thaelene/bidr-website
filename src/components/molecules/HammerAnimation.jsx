import React from "react"

import Image from "../atoms/Image"

import styles from "./hammerAnimation.module.css"

const HammerAnimation = ({ img, imgAlt }) => {
  return (
    <div className={styles.textImageWrapper}>
      <Image imgsrc={img} imgAlt={imgAlt} stylesImage={styles.stylesImage} />
    </div>
  )
}

export default HammerAnimation
