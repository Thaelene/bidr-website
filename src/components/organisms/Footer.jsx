import React from "react"
import { Link } from "gatsby"

import Layout from "../atoms/Layout"
import Image from "../atoms/Image"

import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer>
      <Layout>
        <div className={styles.footerContainer}>
          <div className={styles.footerLeft}>
            <Image
              imgsrc="logo-bidr.png"
              imgAlt="Bidr logo"
              stylesImage={styles.footerImage}
            />
            <span>© Copyright 2020 Bidr.fr</span>
            <span>Tous droits réservés.</span>
          </div>
          <div className={styles.footerRight}>
            <h3>
              Vous êtes entrepreneur et souhaitez mettre en avant votre produit
              ?
            </h3>
            <div className={styles.footerContact}>
              <p>Contactez-nous par mail :&nbsp;</p>
              <a href="mailto:contact-pro@bidr.fr?subject=Prise%20de%20contact">
                contact-pro@bidr.fr
              </a>
            </div>
            <div className={styles.footerContact}>
              <p>Prenez rendez-vous :&nbsp;</p>
              <a
                href="https://calendly.com/bidr/15min?month=2020-05"
                target="_blank"
                rel="noreferrer"
              >
                vérifier les disponibilités
              </a>
            </div>
          </div>
        </div>
      </Layout>
      <div className={styles.footerDivider}>
        <Layout>
          <nav className={styles.footerCredentials}>
            <ul>
              <li className={styles.footerListItem}>
                <Link to="/legals/" className={styles.footerBtnInternal}>
                  Mentions Légales
                </Link>
              </li>
              <li>
                <a
                  href="https://twitter.com/bidr_app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    imgsrc="icon-twitter.png"
                    imgAlt="Bidr's twitter account"
                    stylesImage={styles.footerIcon}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/bidr.fr?igshid=1v1ssv6ueokrs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    imgsrc="icon-instagram.png"
                    imgAlt="Bidr's instagram account"
                    stylesImage={styles.footerIcon}
                  />
                </a>
              </li>
            </ul>
          </nav>
        </Layout>
      </div>
    </footer>
  )
}

export default Footer
