import React from "react"

import Layout from "../atoms/Layout"
import Image from "../atoms/Image"
import InformationsText from "../atoms/InformationsText"
import AnimationWrapper from "../atoms/AnimationWrapper"

import styles from "./textImage.module.css"

import Reveal from "react-reveal/Reveal"

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
            <AnimationWrapper imgPosition="left">
              <div className={styles.animationWrapperLeft}>
                <Reveal effect="rotateL textImageProps">
                  <Image
                    imgsrc="gavel.png"
                    imgAlt="Auctionner's hammer in Bidr"
                    stylesImage={styles.stylesImage}
                  />
                </Reveal>
                <Reveal effect="rotateR textImageProps">
                  <Image
                    imgsrc="gavel_base.png"
                    imgAlt="Auctionner's hammer in Bidr"
                    stylesImage={styles.stylesImage}
                  />
                </Reveal>
              </div>
            </AnimationWrapper>
          ) : (
            <AnimationWrapper imgPosition="right">
              <div style={{ width: "100%" }}>
                <Reveal effect="appearRotateRtoL textImageProps">
                  <Image
                    imgsrc="losange01.png"
                    imgAlt="Losange façon diamant"
                    stylesImage=""
                  />
                </Reveal>
                <Reveal effect="appearRotateLtoR textImageProps">
                  <Image
                    imgsrc="diamond01.png"
                    imgAlt="Diamant en 3D"
                    stylesImage=""
                  />
                </Reveal>
                <Image
                  imgsrc="host.png"
                  imgAlt="Bidr's host"
                  stylesImage={styles.stylesImage}
                />
              </div>
            </AnimationWrapper>
          )}
        </div>
      </Layout>
    </section>
  )
}

export default TextImage
