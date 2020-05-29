import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./header.module.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-bidr.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <header>
      <Link to="/">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Bidr.'s logo"
          className={styles.image}
        />
      </Link>
    </header>
  )
}

export default Header
