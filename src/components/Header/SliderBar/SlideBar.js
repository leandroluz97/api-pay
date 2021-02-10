import React from "react"
import "./SlideBar.css"
import { IoMdClose } from "react-icons/io"
import { IconContext } from "react-icons"
import Button from "../../Ui/Button/Button"

const SlideBar = () => {
  return (
    <IconContext.Provider value={{ className: "s-header__menu" }}>
      <nav className='s-header__nav'>
        <div className='s-header__close'>
          <IoMdClose />
        </div>
        <ul className='s-header__list'>
          <li className='s-header__item'>
            <a href='#'>Pricing</a>
          </li>
          <li className='s-header__item'>
            <a href='#'>About</a>
          </li>
          <li className='s-header__item'>
            <a href='#'>Contact</a>
          </li>
          <li className='s-header__btn'>
            <Button>Schedule a Demo</Button>
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
  )
}

export default SlideBar
