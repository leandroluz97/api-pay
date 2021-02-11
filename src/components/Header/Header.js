import React, { useState } from "react"
import "./Header.css"
import { IoMdMenu } from "react-icons/io"
import { IconContext } from "react-icons"
import SlideBar from "./SliderBar/SlideBar"
import Button from "../Ui/Button/Button"

const Header = () => {
  const [open, setOpen] = useState(false)
  const handleSideMenu = () => {
    setOpen(!open)
  }

  return (
    <IconContext.Provider value={{ className: "header__menu" }}>
      <header className='header'>
        <div className='header__container'>
          <div className='header__wrapper'>
            <div className='header__logo--box'>
              <a href='#'>
                <img
                  className='header__logo'
                  src='./images/logo_pay_api.svg'
                  alt='Pay Api logo'
                />
              </a>
            </div>

            <nav className='header__nav'>
              <ul className='header__list'>
                <li className='header__item'>
                  <a href='#'>Pricing</a>
                </li>
                <li className='header__item'>
                  <a href='#'>About</a>
                </li>
                <li className='header__item'>
                  <a href='#'>Contact</a>
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
        <SlideBar show={open} clicked={handleSideMenu} />
      </header>
    </IconContext.Provider>
  )
}

export default Header
