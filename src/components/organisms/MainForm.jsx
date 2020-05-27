import React from "react"

import Layout from "../atoms/Layout"
import InformationsText from "../atoms/InformationsText"
import Image from "../atoms/Image"

import styles from "./mainForm.module.css"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const MainForm = () => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, email: e.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log({ state })
    const form = event.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => alert("welcome"))
      .catch(error => alert(error))
  }
  return (
    <section className={styles.mainFormSection}>
      <Layout>
        <div className={styles.mainFormContainer}>
          <InformationsText
            subtitle="Système d'enchère"
            title="Le prix grimpe par clique, saisissez le moment opportun !"
            text="Gràce à vos Zbabz, surenchérissez afin de montrer aux autres participants que vous ne laisserez pas partir le produit aussi facilement."
            style={styles.mainFormInformations}
          />
          <div className={styles.mainFormImageWrapper}>
            <Image
              imgsrc="Zbabz-button.png"
              imgAlt="Bid CTA surrounded by Zbabz"
              stylesImage={styles.mainFormImage}
            />
          </div>
          <form
            className={styles.mainFormForm}
            method="post"
            name="preinscription campaign bottom"
            netlify-honeypot="bot-field"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="form-name"
              value="preinscription campaign bottom"
            />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <label className={styles.mainFormLabel}>
              <input
                type="email"
                name="email"
                placeholder="Mon adresse mail"
                className={styles.mainFormInput}
                onChange={handleChange}
              />
            </label>
            <button type="submit" className={styles.mainFormButton}>
              Je me préinscris
            </button>
          </form>
        </div>
      </Layout>
    </section>
  )
}

export default MainForm
