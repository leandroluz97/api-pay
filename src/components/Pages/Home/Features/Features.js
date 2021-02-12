import React from "react"

const Features = () => {
  return (
    <section className='features'>
      <div className='features__container'>
        <div className='features__wrapper'>
          <div className='features__row'>
            <div className='features__box'>
              <img src='./images/ide.svg' alt='ide' className='feature--img' />
            </div>
            <div className='features__box'>
              <h2 className='features__title'>Easy to implement</h2>
              <p className='features__copy'>
                Our API comes with just a few lines of code. You’ll be up and
                running in no time. We built our documentation page to integrate
                payments functionality with ease.
              </p>
            </div>
          </div>
          <div className='features__row'>
            <div className='features__box'></div>
            <div className='features__box'>
              <img
                src='./images/phone_group.svg'
                alt='ide'
                className='feature--img'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
