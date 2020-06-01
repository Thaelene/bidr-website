import React from "react"
import { Helmet } from "react-helmet"

import Hero from "../components/organisms/Hero"
import TextImage from "../components/organisms/TextImage"
import MainForm from "../components/organisms/MainForm"
import Footer from "../components/organisms/Footer"

const App = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bidr - votre experience gamifiée d’enchères en live</title>
        <meta
          name="description"
          content="Bidr. est une application mobile d'enchères vous permettant de remporter vos produits préférés à petit prix. Saurez-vous miser au bon moment pour repartir avec le lot convoité par des milliers d'autres biderz ?
Découvrez chaque semaine les marques du moment et prenez part à l’enchère pour espérer acheter des produits exclusifs pour presque rien."
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bidr.fr/" />
        <meta
          property="og:title"
          content="Bidr - votre experience gamifiée d’enchères en live"
        />
        <meta
          property="og:description"
          content="Bidr. est une application mobile d'enchères vous permettant de remporter vos produits préférés à petit prix. Saurez-vous miser au bon moment pour repartir avec le lot convoité par des milliers d'autres biderz ?
          Découvrez chaque semaine les marques du moment et prenez part à l’enchère pour espérer acheter des produits exclusifs pour presque rien."
        />
        <meta property="og:image" content="/thumbnail.png" />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bidr.fr/" />
        <meta
          property="twitter:title"
          content="Bidr - votre experience gamifiée d’enchères en live"
        />
        <meta
          property="twitter:description"
          content="Bidr. est une application mobile d'enchères vous permettant de remporter vos produits préférés à petit prix. Saurez-vous miser au bon moment pour repartir avec le lot convoité par des milliers d'autres biderz ?
          Découvrez chaque semaine les marques du moment et prenez part à l’enchère pour espérer acheter des produits exclusifs pour presque rien."
        />
        <meta property="twitter:image" content="/thumbnail.png" />
        <link rel="canonical" href="https://bidr.fr" />
      </Helmet>
      <Hero />
      <TextImage
        imgPosition="left"
        subtitle="Les dernières tendances"
        title="De nouvelles enchères toutes les semaines"
        text="Avec Bidr, découvrez chaque semaine les marques du moment et prenez part à l’enchère pour espérer repartir avec des produits exclusifs pour presque rien.  "
      />
      <TextImage
        imgPosition="right"
        subtitle="L'animation"
        title="Notre animateur vedette veillera au grain"
        text="Chaque événement a lieu en direct, l’animateur sera en charge du bon déroulement de l’enchère et se fera un plaisir de vous informer sur les produits."
      />
      <MainForm />
      <Footer />
    </div>
  )
}

export default App
