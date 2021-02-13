import React from "react"
import Input from "../Input/Input"
import "./Ready.css"

const Ready = () => {
  return (
    <section className='ready'>
      <div className='ready__container'>
        <div className='ready__wrapper'>
          <h2 className='ready__title'>Ready to start?</h2>
          <div className='ready__input'>
            <Input>Schedule a Demo</Input>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ready
