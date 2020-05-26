import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../atoms/Layout"
import Header from "../molecules/Header"

import styles from "./hero.module.css"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Hero-main.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const handleSubmit = event => {
    event.preventDefault()
  }
  return (
    <section className={styles.heroSection}>
      <Layout>
        <Header />
      </Layout>
      <Layout>
        <div className={styles.heroWrapper}>
          <div className={styles.informations}>
            <h1>Vos produits préférés à petit prix</h1>
            <p className={styles.heroText}>
              Saurez-vous miser au bon moment pour repartir avec le lot convoité
              par des milliers d’autres biderz ?
            </p>
            <form
              className={styles.heroForm}
              name="preinscription campaign"
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <label className={styles.heroLabel}>
                <input
                  type="email"
                  name="bot-field"
                  placeholder="Votre adresse mail"
                  className={styles.heroInput}
                />
              </label>
              <button type="submit" className={styles.heroButton}>
                Se préinscrire
              </button>
            </form>
          </div>

          <div className={styles.imageContainer}>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="Mockup of Bidr app on iPhone with a lot of zbabs"
              className={styles.image}
            />
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default Hero
