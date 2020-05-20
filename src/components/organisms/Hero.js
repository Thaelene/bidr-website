import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

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
  return (
    <section>
      <Header />
      <div>
        <div>
          <h1>Vos produits préférés à petit prix</h1>
          <p>
            Saurez-vous miser au bon moment pour repartir avec le lot convoité
            par des milliers d’autres biderz ?
          </p>
          <a href="#">bloups lien url</a>
          <form>
            <label>
              <input
                type="email"
                name="email"
                placeholder="Votre adresse email"
              />
            </label>
            <button type="submit">Se préinscrire</button>
          </form>
        </div>
        <div>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Mockup of Bidr app on iPhone with a lot of zbabs"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
