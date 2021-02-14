import React from "react"
import "./Sbutton.css"

const Sbutton = (props) => {
  let btnClass = "sbutton"
  if (props.dark) {
    btnClass = "sdark"
  }
  return (
    <a className={btnClass} href='#'>
      {props.children}
    </a>
  )
}

export default Sbutton
