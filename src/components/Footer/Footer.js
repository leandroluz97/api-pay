import React from "react"
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai"
import "./Footer.css"
import { IconContext } from "react-icons"

const Footer = () => {
  return (
    <IconContext.Provider value={{ className: "react__icons" }}>
      <footer className='footer'>
        <div className='footer__container'>
          <div className='footer__wrapper'>
            <div className='footer__logo--box'>
              <a href='#'>
                <img
                  className='footer__logo'
                  src='./images/logo_pay_api_white.svg'
                  alt='Pay Api logo'
                />
              </a>
            </div>

            <nav className='footer__nav'>
              <ul className='footer__list'>
                <li className='footer__item'>
                  <a href='#'>Pricing</a>
                </li>
                <li className='footer__item'>
                  <a href='#'>About</a>
                </li>
                <li className='footer__item'>
                  <a href='#'>Contact</a>
                </li>
              </ul>
            </nav>

            <div className='footer__icons'>
              <div className='footer__icon'>
                <AiFillFacebook />
              </div>

              <div className='footer__icon'>
                <AiOutlineTwitter />
              </div>
              <div className='footer__icon'>
                <AiFillLinkedin />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </IconContext.Provider>
  )
}

export default Footer
