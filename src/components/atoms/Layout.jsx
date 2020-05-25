import React from "react"

const Layout = ({ children }) => {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 1113, padding: `0 30px` }}>
      {children}
    </div>
  )
}

export default Layout
