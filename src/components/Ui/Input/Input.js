import React from "react"
import "./Input.css"
const Input = (props) => {
  return (
    <form
      className='form'
      style={{ marginLeft: props.ml, marginRight: props.mr }}
    >
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
