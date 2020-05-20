import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import styles from "./header.module.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Bidr.-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <header>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Bidr.'s logo"
        className={styles.image}
      />
    </header>
  )
}

export default Header
