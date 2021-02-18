import React from "react"
import { Link } from "react-router-dom"
import "./Button.css"

const Button = (props) => {
  return (
    <Link className='btn' to='/contact'>
      {props.children}
    </Link>
  )
}

export default Button
