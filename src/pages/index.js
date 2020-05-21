import React from "react"

import Hero from "../components/organisms/Hero"
import TextImage from "../components/organisms/TextImage"

const App = () => {
  return (
    <div>
      <Hero />
      <TextImage imgPosition="right" />
      <p> Welcome to Bidr!</p>
    </div>
  )
}

export default App
