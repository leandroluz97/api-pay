import React from "react"
import "./Input.css"
const Input = (props) => {
  const align = ["form"]
  if (props.right) {
    align.push("right")
  }
  if (props.left) {
    align.push("left")
  }
  return (
    <form className={align.join(" ")}>
      <div className='form__group '>
        <input
          type='email'
          placeholder='Enter Email Address'
          className='form__input'
        ></input>
        <button className='form__btn'>Schedule a Demo</button>
      </div>
    </form>
  )
}

export default Input
