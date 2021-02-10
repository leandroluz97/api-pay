import React from "react"
import "./Button.css"

const Button = (props) => {
  return (
    <a className='btn' href='#'>
      {props.children}
    </a>
  )
}

export default Button
