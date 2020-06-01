import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../atoms/Layout"
import Image from "../atoms/Image"
import Header from "../molecules/Header"

import styles from "./hero.module.css"

import Reveal from "react-reveal/Reveal"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Hero-main.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, email: e.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!validateEmail(state.email)) return
    const form = event.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        email: state.email,
      }),
    })
      .then(() => {
        setState({
          ...state,
          success: true,
        })
      })
      .catch(error => alert(error))
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
            {/* <p className={styles.heroText}>
              Saurez-vous miser au bon moment pour repartir avec le lot convoité
              par des milliers d’autres Biderz ?
            </p> */}
            <p className={styles.heroText}>
              <span className={styles.heroTextSpan}>
                Bidr arrive très prochainement avec des offres uniques.
              </span>
              Pour bénéficier de Zbabs gratuits et d'autres surprises dès sa
              sortie sur AppStore ou Android Store, inscrivez-vous !
            </p>
            <form
              className={styles.heroForm}
              name="preinscription campaign"
              method="post"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="form-name"
                value="preinscription campaign"
              />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <label className={styles.heroLabel}>
                <input
                  type="email"
                  name="email"
                  placeholder="Votre adresse mail"
                  className={styles.heroInput}
                  onChange={handleChange}
                />
                {state.success && (
                  <p className={styles.heroInputSuccess}>
                    Bravo, vous êtes désormais inscrit•e pour profiter en
                    exclusivité des offres de Bidr.
                  </p>
                )}
              </label>
              <button type="submit" className={styles.heroButton}>
                Je réserve ma place
              </button>
            </form>
          </div>

          <div className={styles.imageContainer}>
            <Reveal effect="appearRtoL heroImageProps ">
              <Image
                imgsrc="crown02.png"
                imgAlt="Couronne de champion"
                stylesImage=""
              />
            </Reveal>
            <Reveal effect="appearLtoR heroImageProps">
              <Image
                imgsrc="losange02.png"
                imgAlt="Losange façon diamant"
                stylesImage=""
              />
            </Reveal>
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
