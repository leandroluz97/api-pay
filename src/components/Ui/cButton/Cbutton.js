import React from "react"
import "./Cbutton.css"
const cButton = (props) => {
  return (
    <button className='c-button' disabled={props.disable}>
      {props.children}
    </button>
  )
}

export default cButton
