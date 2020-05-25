import React from "react"

const InformationsText = ({ subtitle, title, text, style }) => {
  return (
    <div className={style}>
      <h4>{subtitle}</h4>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default InformationsText
