import React, { useState } from "react"
import "./Header.css"
import { IoMdMenu } from "react-icons/io"
import { IconContext } from "react-icons"
import SlideBar from "./SliderBar/SlideBar"
import Button from "../Ui/Button/Button"
import { Link } from "react-router-dom"

const Header = (props) => {
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState(false)
  const handleSideMenu = () => {
    setOpen(!open)
  }

  const addHeaderBackgroung = (e) => {
    if (window.scrollY > 80) {
      setHeight(true)
    } else {
      setHeight(false)
    }
  }
  window.addEventListener("scroll", addHeaderBackgroung)

  return (
    <IconContext.Provider value={{ className: "header__menu" }}>
      <header className={height ? "header header--animation" : "header"}>
        <div className='header__container'>
          <div
            className={
              height
                ? "header__wrapper header__wrapper--animation"
                : "header__wrapper"
            }
          >
            <div className='header__logo--box'>
              <Link to='/' onClick={props.handleScrollTop}>
                <img
                  className='header__logo'
                  src='./images/logo_pay_api.svg'
                  alt='Pay Api logo'
                />
              </Link>
            </div>

            <nav className='header__nav'>
              <ul className='header__list'>
                <li className='header__item'>
                  <Link to='/pricing' onClick={props.handleScrollTop}>
                    Pricing
                  </Link>
                </li>
                <li className='header__item'>
                  <Link to='/about' onClick={props.handleScrollTop}>
                    About
                  </Link>
                </li>
                <li className='header__item'>
                  <Link to='/contact' onClick={props.handleScrollTop}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className='header__burger' onClick={handleSideMenu}>
              <IoMdMenu />
            </div>

            <div className='header__btn'>
              <Button>Schedule a Demo</Button>
            </div>
          </div>
        </div>
        <SlideBar
          show={open}
          clicked={handleSideMenu}
          scroll={props.handleScrollTop}
        />
      </header>
    </IconContext.Provider>
  )
}

export default Header
