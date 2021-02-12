import React from "react"
import "./Sbutton.css"

const Sbutton = (props) => {
  return (
    <a className='sbutton' href='#'>
      {props.children}
    </a>
  )
}

export default Sbutton
