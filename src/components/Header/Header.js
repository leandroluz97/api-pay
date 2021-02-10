import React from "react"
import "./Header.css"
import { IoMdMenu } from "react-icons/io"
import { IconContext } from "react-icons"
import SlideBar from "./SliderBar/SlideBar"

const Header = () => {
  return (
    <IconContext.Provider value={{ className: "header__menu" }}>
      <header className='header'>
        <div className='header__container'>
          <div className='header__wrapper'>
            <a href='#'>
              <img
                className='header__logo'
                src='./images/logo_pay_api.svg'
                alt='Pay Api logo'
              />
            </a>

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

            <div className='header__burger'>
              <IoMdMenu />
            </div>
          </div>
        </div>
        <SlideBar />
      </header>
    </IconContext.Provider>
  )
}

export default Header
