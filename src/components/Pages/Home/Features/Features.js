import React from "react"
import "./Features.css"
const Features = () => {
  return (
    <section className='features'>
      <div className='features__container'>
        <div className='features__wrapper'>
          <div className='features__row'>
            <div className='features__box'>
              <img
                src='./images/ide.svg'
                alt='ide'
                className='feature--img feature--img-1'
              />
            </div>
            <div className='features__box'>
              <h2 className='features__title features__title--1 '>
                Easy to implement
              </h2>
              <p className=' features__copy features__copy--1'>
                Our API comes with just a few lines of code. You’ll be up and
                running in no time. We built our documentation page to integrate
                payments functionality with ease.
              </p>
            </div>
          </div>
          <div className='features__row'>
            <div className='features__box'>
              <img
                src='./images/phone_group.svg'
                alt='iphone group'
                className='feature--img feature--img-2'
              />
            </div>
            <div className='features__box'>
              <h2 className='features__title features__title--2'>
                Simple UI &amp; UX
              </h2>
              <p className='features__copy features__copy--2'>
                Our pre-built form is easy to integrate in your app or website’s
                checkout flow and designed to optimize conversion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
