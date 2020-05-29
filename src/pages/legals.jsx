import React from "react"
import { Helmet } from "react-helmet"

import Header from "../components/molecules/Header"
import Layout from "../components/atoms/Layout"
import LegalsComponent from "../components/organisms/LegalsComponent"

const Legals = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bidr - Mentions légales</title>
        <meta
          name="description"
          content="Bidr. est une application mobile d'enchères vous permettant de remporter vos produits préférés à petit prix. Saurez-vous miser au bon moment pour repartir avec le lot convoité par des milliers d'autres biderz ?
Découvrez chaque semaine les marques du moment et prenez part à l’enchère pour espérer acheter des produits exclusifs pour presque rien."
        />
        <link rel="canonical" href="https://bidr.fr/legals" />
      </Helmet>
      <Layout>
        <Header />
        <LegalsComponent />
      </Layout>
    </div>
  )
}

export default Legals
