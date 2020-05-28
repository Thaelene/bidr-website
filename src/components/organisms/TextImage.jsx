import React from "react"

import Layout from "../atoms/Layout"
import Image from "../atoms/Image"
import InformationsText from "../atoms/InformationsText"
import AnimationWrapper from "../atoms/AnimationWrapper"

import styles from "./textImage.module.css"

const TextImage = ({ imgPosition, subtitle, title, text }) => {
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

          {imgPosition === "left" ? (
            <AnimationWrapper>
              <Image
                imgsrc="auctionnerHammer.png"
                imgAlt="Auctionner's hammer in Bidr"
                stylesImage={styles.stylesImage}
              />
            </AnimationWrapper>
          ) : (
            <AnimationWrapper>
              <Image
                imgsrc="host.png"
                imgAlt="Bidr's host"
                stylesImage={styles.stylesImage}
              />
            </AnimationWrapper>
          )}
        </div>
      </Layout>
    </section>
  )
}

export default TextImage
