import React from "react"
import "./SlideBar.css"
import { IoMdClose } from "react-icons/io"
import { IconContext } from "react-icons"
import Button from "../../Ui/Button/Button"
import { Link } from "react-router-dom"

const SlideBar = (props) => {
  let show = ["s-header__nav"]
  if (props.show) {
    show = ["s-header__nav s-header__nav--animate"]
  } else {
    show = ["s-header__nav"]
  }

  return (
    <IconContext.Provider value={{ className: "s-header__menu" }}>
      <nav className={show.join(" ")}>
        <div className='s-header__close'>
          <div className='s-header__x' onClick={props.clicked}>
            <IoMdClose />
          </div>
        </div>
        <ul className='s-header__list'>
          <li className='s-header__item' onClick={props.clicked}>
            <Link to='/pricing' onClick={props.scroll}>
              Pricing
            </Link>
          </li>
          <li className='s-header__item' onClick={props.clicked}>
            <Link to='/about' onClick={props.scroll}>
              About
            </Link>
          </li>
          <li className='s-header__item' onClick={props.clicked}>
            <Link to='/contact' onClick={props.scroll}>
              Contact
            </Link>
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
