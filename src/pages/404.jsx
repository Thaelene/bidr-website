import React from "react"

import Layout from "../components/atoms/Layout"
import Header from "../components/molecules/Header"
import PageNotFoundComponent from "../components/organisms/PageNotFoundComponent"

const PageNotFound = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Layout>
        <Header />
        <PageNotFoundComponent />
      </Layout>
    </div>
  )
}

export default PageNotFound
