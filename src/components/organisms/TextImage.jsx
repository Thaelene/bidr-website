import React from "react"

import Image from "../atoms/Image"
import Layout from "../atoms/Layout"
import InformationsText from "../atoms/InformationsText"

import styles from "./textImage.module.css"

import Reveal from "react-reveal/Reveal"

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
            <InformationsText subtitle={subtitle} title={title} text={text} />
          </div>
          <div className={styles.textImageWrapper}>
            <Reveal effect="scaleUp" style={{ width: "100%" }}>
              <Image
                imgsrc={img}
                imgAlt={imgAlt}
                stylesImage={styles.stylesImage}
              />
            </Reveal>
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default TextImage
