import ".../css/style.css"
import React from 'react'
const header={color:"blue", fontSize:"140px"}
const Inline = () => {
  return (
    <div>
        <h1 className="header" style={header}>Inline Styling</h1>
        </div>
  )
}

export default Inline