import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../atoms/Layout"
import Header from "../molecules/Header"

import styles from "./textImage.module.css"

const TextImage = ({ imgPosition }) => {
  return (
    <section className={styles[`${imgPosition}Image`]}>
      <p>Super texte gauche</p>
      <p>Super texte droite</p>
    </section>
  )
}

export default TextImage
