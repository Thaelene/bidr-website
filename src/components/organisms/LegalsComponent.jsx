import React from "react"

import styles from "./legalsComponent.module.css"

const LegalsComponent = () => {
  return (
    <section className={styles.LegalsComponentSection}>
      <div>
        <h3>1. Présentation du site internet</h3>
        <p>
          En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la
          confiance dans l'économie numérique, il est précisé aux utilisateurs
          du site internet{" "}
          <a href="https://www.bidr.fr" className={styles.cta}>
            https://www.bidr.fr
          </a>{" "}
          l'identité des différents intervenants dans le cadre de sa réalisation
          et de son suivi :
        </p>
        <p>
          <span>Propriétaire :</span> SAS Bidr – 27 bis rue du progrès 93100
          Montreuil
        </p>
        <p>
          <span>Responsable publication :</span> Hélène Ta - helene.ta@hetic.net
        </p>
        <p className={styles.innerParagraph}>
          Le responsable publication est une personne physique ou une personne
          morale.
        </p>
        <p>
          <span>Développement :</span> Hélène Ta - helene.ta@hetic.net
        </p>
        <p>
          <span>Hébergeur :</span> Netlify – 610 22nd Street, Suite 315 CA 94107
          San Francisco +1 844-899-7312
        </p>
        <p>
          <span>Délégué à la protection des données :</span> Hélène Ta -
          helene.ta@hetic.net
        </p>
      </div>
      <div>
        <h3>2. Cookies</h3>
        <p>Notre site internet n'utilise pas de cookies de navigation.</p>
      </div>
      <div>
        <h3>3. Propriété intellectuelle</h3>
        <p>
          Toute représentation totale ou partielle de ce site, par quelque
          personne que ce soit, sans l'autorisation expresse de l'éditeur du
          site est interdite et constituerait une contrefaçon sanctionnée par
          les articles du Code de la propriété intellectuelle.
        </p>
      </div>
    </section>
  )
}

export default LegalsComponent
