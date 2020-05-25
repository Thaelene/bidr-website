import React from "react"

import Layout from "../atoms/Layout"
import InformationsText from "../atoms/InformationsText"
import Image from "../atoms/Image"

import styles from "./MainForm.module.css"

const MainForm = () => {
  return (
    <section className={styles.MainFormSection}>
      <Layout>
        <div className={styles.MainFormContainer}>
          <InformationsText
            subtitle="Système d'enchère"
            title="Le prix grimpe par clique, saisissez le moment opportun !"
            text="Gràce à vos Zbabz, surenchérissez afin de montrer aux autres participants que vous ne laisserez pas partir le produit aussi facilement."
            style={styles.MainFormInformations}
          />
          <div className={styles.MainFormImageWrapper}>
            <Image
              imgsrc="Zbabz-button.png"
              imgAlt="Bid CTA surrounded by Zbabz"
              stylesImage={styles.MainFormImage}
            />
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default MainForm
