import React from "react"

import Hero from "../components/organisms/Hero"
import TextImage from "../components/organisms/TextImage"
import MainForm from "../components/organisms/MainForm"
import Footer from "../components/organisms/Footer"

const App = () => {
  return (
    <div>
      <Hero />
      <TextImage
        imgPosition="left"
        img="auctionnerHammer.png"
        imgAlt="Auctionner's hammer in Bidr"
        subtitle="Les dernières tendances"
        title="De nouvelles enchères toutes les semaines"
        text="Avec Bidr, découvrez chaque semaine les marques du moment et prenez part à l’enchère pour espérer repartir avec des produits exclusifs pour presque rien.  "
      />
      <TextImage
        imgPosition="right"
        img="host.png"
        imgAlt="Bidr's host"
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
