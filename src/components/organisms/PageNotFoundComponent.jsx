import React from "react"
import { Link } from "gatsby"
import Image from "../atoms/Image"

import styles from "./pageNotFoundComponent.module.css"

const PageNotFoundComponent = () => {
  return (
    <section className={styles.pageNotFoundSection}>
      <Image
        imgsrc="404.png"
        imgAlt="Bidr 404 image"
        stylesImage={styles.pageNotFoundImage}
      />
      <Link to="/" className={styles.pageNotFoundLink}>
        Retournez à la page d'accueil
      </Link>
    </section>
  )
}

export default PageNotFoundComponent
