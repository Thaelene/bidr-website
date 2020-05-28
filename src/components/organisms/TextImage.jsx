import React from "react"

import Layout from "../atoms/Layout"
import InformationsText from "../atoms/InformationsText"
import HammerAnimation from "../molecules/HammerAnimation"
import HostAnimation from "../molecules/HostAnimation"

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
            <InformationsText subtitle={subtitle} title={title} text={text} />
          </div>

          {
            (imgPosition = "left" ? (
              <HammerAnimation img={img} imgAlt={imgAlt} />
            ) : (
              <HostAnimation img={img} imgAlt={imgAlt} />
            ))
          }
        </div>
      </Layout>
    </section>
  )
}

export default TextImage
