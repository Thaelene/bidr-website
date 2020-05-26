import React from "react"

import Header from "../components/molecules/Header"
import Layout from "../components/atoms/Layout"
import LegalsComponent from "../components/organisms/LegalsComponent"

const Legals = () => {
  return (
    <section>
      <Layout>
        <Header />
        <LegalsComponent />
      </Layout>
    </section>
  )
}

export default Legals
