import React from "react"

import styles from "./animationWrapper.module.css"

const AnimationWrapper = ({ children }) => {
  return <div className={styles.textImageWrapper}>{children}</div>
}

export default AnimationWrapper
