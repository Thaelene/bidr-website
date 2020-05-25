import React from "react"

import Image from "../atoms/Image"
import Layout from "../atoms/Layout"

import styles from "./textImage.module.css"

const TextImage = ({ imgPosition, img, imgAlt, subtitle, title, text }) => {
  return (
    <section
      className={[styles[`${imgPosition}Image`], styles.textImageSection].join(
        " "
      )}
    >
      <Layout>
        <div
          className={[
            styles[`${imgPosition}Image`],
            styles.textImageContainer,
          ].join(" ")}
        >
          <div className={styles.textImageContentWrapper}>
            <h4>{subtitle}</h4>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className={styles.textImageWrapper}>
            <Image
              imgsrc={img}
              imgAlt={imgAlt}
              stylesImage={styles.stylesImage}
            />
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default TextImage
