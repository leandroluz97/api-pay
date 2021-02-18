import React from "react"
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai"
import "./Footer.css"
import { Link } from "react-router-dom"
import { IconContext } from "react-icons"

const Footer = (props) => {
  return (
    <IconContext.Provider value={{ className: "react__icons" }}>
      <footer className='footer'>
        <div className='footer__container'>
          <div className='footer__wrapper'>
            <div className='footer__logo--box'>
              <Link to='/' onClick={props.handleScrollTop}>
                <img
                  className='footer__logo'
                  src='./images/logo_pay_api_white.svg'
                  alt='Pay Api logo'
                />
              </Link>
            </div>

            <nav className='footer__nav'>
              <ul className='footer__list'>
                <li className='footer__item'>
                  <Link to='/pricing' onClick={props.handleScrollTop}>
                    Pricing
                  </Link>
                </li>
                <li className='footer__item'>
                  <Link to='/about' onClick={props.handleScrollTop}>
                    About
                  </Link>
                </li>
                <li className='footer__item'>
                  <Link to='/contact' onClick={props.handleScrollTop}>
                    Contact
                  </Link>
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
