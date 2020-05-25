import React from "react"

import Layout from "../atoms/Layout"
import InformationsText from "../atoms/InformationsText"
import Image from "../atoms/Image"

import styles from "./MainForm.module.css"

const MainForm = () => {
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
          <form className={styles.mainFormForm}>
            <label className={styles.mainFormLabel}>
              <input
                type="email"
                name="email"
                placeholder="Mon adresse mail"
                className={styles.mainFormInput}
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
