import React from "react"

import styles from "./animationWrapper.module.css"

const AnimationWrapper = ({ children, imgPosition }) => {
  return (
    <div
      className={[styles[`${imgPosition}Image`], styles.textImageWrapper].join(
        " "
      )}
    >
      {children}
    </div>
  )
}

export default AnimationWrapper
