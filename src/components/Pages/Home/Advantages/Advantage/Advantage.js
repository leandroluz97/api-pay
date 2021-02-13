import React from "react"
import "./Advantage.css"

const Advantage = (props) => {
  return (
    <div className='advantage'>
      <img src={props.img} alt='icon' className='advantage__img' />
      <h3 className='advantage__title'>{props.title}</h3>
      <p className='advantage__copy'>{props.copyright}</p>
    </div>
  )
}

export default Advantage
