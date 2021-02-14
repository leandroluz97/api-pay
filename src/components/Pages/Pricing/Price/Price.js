import React from "react"
import Sbutton from "../../../Ui/Sbutton/Sbutton"
import "./Price.css"
import { IoMdCheckmark } from "react-icons/io"
import { IconContext } from "react-icons"

const Price = () => {
  return (
    <IconContext.Provider value={{ className: "price__check" }}>
      <section className='price'>
        <div className='price__container'>
          <div className='price__wrapper'>
            <h2 className='price__title'>Pricing</h2>
            <div className='price__cards'>
              <div className='price__card'>
                <h3 className='price__card-title'>Free Plan</h3>
                <p className='price__card-copy'>
                  Build and test using our core set of products with up to 100
                  API requests
                </p>
                <p className='price__card-price'>$0.00</p>
                <ul className='price__card-list'>
                  <li className='price__card-item'>
                    <span className='card__icon'>
                      <IoMdCheckmark />
                    </span>
                    Transactions
                  </li>
                  <li className='price__card-item'>
                    <span className='card__icon'>
                      <IoMdCheckmark />
                    </span>
                    Auth
                  </li>
                  <li className='price__card-item'>
                    <span className='card__icon'>
                      <IoMdCheckmark />
                    </span>
                    Identity
                  </li>
                  <li className='price__card-item price__disable'>
                    <span className='card__icon'>&nbsp; &nbsp;</span>
                    Investments
                  </li>
                  <li className='price__card-item price__disable'>
                    <span className='card__icon'>&nbsp; &nbsp; </span>
                    Assets
                  </li>
                  <li className='price__card-item price__disable'>
                    <span className='card__icon'>&nbsp; &nbsp;</span>
                    Liabilities
                  </li>
                  <li className='price__card-item price__disable'>
                    <span className='card__icon'>&nbsp; &nbsp;</span>
                    Income
                  </li>
                </ul>
                <div className='price__card-btn'>
                  <Sbutton dark>Request Access</Sbutton>
                </div>
              </div>

              <div className='price__card'>
                <h3 className='price__card-title'>Basic Plan</h3>
                <p className='price__card-copy'>
                  Launch your project with unlimited requests and no contractual
                  minimums
                </p>
                <p className='price__card-price'>$249.00</p>
                <ul className='price__card-list'>
                  <li className='price__card-item'>
                    <span className='card__icon'>
                      <IoMdCheckmark />
                    </span>
                    Transactions
                  </li>
                  <li className='price__card-item'>
                    <span className='card__icon'>
                      <IoMdCheckmark />
                    </span>
                    Auth
                  </li>
                  <li className='price__card-item '>
                    <span className='card__icon'>
                      <IoMdCheckmark />
                    </span>
                    Identity
                  </li>
                  <li className='price__card-item'>
                    <span className='card__icon'>
                      <IoMdCheckmark />
                    </span>
                    Investments
                  </li>
                  <li className='price__card-item'>
                    <span className='card__icon'>
                      <IoMdCheckmark />
                    </span>
                    Assets
                  </li>
                  <li className='price__card-item price__disable'>
                    <span className='card__icon'>&nbsp; &nbsp; &nbsp;</span>
                    Liabilities
                  </li>
                  <li className='price__card-item price__disable'>
                    <span className='card__icon'>&nbsp; &nbsp; &nbsp;</span>
                    Income
                  </li>
                </ul>
                <div className='price__card-btn'>
                  <Sbutton dark>Request Access</Sbutton>
                </div>
              </div>

              <div className='price__card'>
                <h3 className='price__card-title'>Premium Plan</h3>
                <p className='price__card-copy'>
                  Get tailored solutions, volume pricing, and dedicated support
                  for your team
                </p>
                <p className='price__card-price'>$499.00</p>
                <ul className='price__card-list'>
                  <li className='price__card-item'>
                    <span className='card__icon'>
                      <IoMdCheckmark />
                    </span>
                    Transactions
                  </li>
                  <li className='price__card-item'>
                    <span className='card__icon'>
                      <IoMdCheckmark />
                    </span>
                    Auth
                  </li>
                  <li className='price__card-item'>
                    <span className='card__icon'>
                      <IoMdCheckmark />
                    </span>
                    Identity
                  </li>
                  <li className='price__card-item'>
                    <span className='card__icon'>
                      <IoMdCheckmark />
                    </span>
                    Investments
                  </li>
                  <li className='price__card-item'>
                    <span className='card__icon'>
                      <IoMdCheckmark />
                    </span>
                    Assets
                  </li>
                  <li className='price__card-item'>
                    <span className='card__icon'>
                      <IoMdCheckmark />
                    </span>
                    Liabilities
                  </li>
                  <li className='price__card-item'>
                    <span className='card__icon'>
                      <IoMdCheckmark />
                    </span>
                    Income
                  </li>
                </ul>
                <div className='price__card-btn'>
                  <Sbutton dark>Request Access</Sbutton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </IconContext.Provider>
  )
}

export default Price
