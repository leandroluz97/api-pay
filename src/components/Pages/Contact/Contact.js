import React from "react"
import Cbutton from "../../Ui/cButton/Cbutton"
import "./Contact.css"
const Contact = () => {
  return (
    <section className='contact'>
      <div className='contact__container'>
        <div className='contact__wrapper'>
          <h2 className='contact__title'>
            Submit a help request and we’ll get in touch shortly.
          </h2>
          <div className='contact__content'>
            <div className='c-group'>
              <form className='contact__form'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='contact__name'
                  placeholder='Name'
                />

                <input
                  type='email'
                  name='email'
                  id='email'
                  className='contact__email'
                  placeholder='Email Address'
                />

                <input
                  type='text'
                  name='company'
                  id='company'
                  className='company'
                  placeholder='Company Name'
                />

                <input
                  type='text'
                  name='title'
                  id='title'
                  className='title'
                  placeholder='Email Address'
                />

                <textarea
                  name='sms'
                  id='sms'
                  cols='30'
                  rows='4'
                  placeholder='Message'
                ></textarea>

                <div className='contact__check-group'>
                  <input
                    type='checkbox'
                    id='checkbox'
                    name='checkbox'
                    value='checkbox'
                    className='checkbox'
                  />
                  <label htmlFor='checkbox'>
                    Stay up-to-date with company announcements and updates to
                    our API
                  </label>
                </div>
                <Cbutton>Submit</Cbutton>
              </form>
            </div>
            <div className='contact__logo'>
              <h2 className='contact__logo-title'>
                Join thousands of innovators already building with us
              </h2>
              <div className='contact__logos'>
                <img src='./images/tesla_dark.svg' alt='logo tesla'></img>
                <img
                  src='./images/microsoft_dark.svg'
                  alt='logo microsoft'
                ></img>
                <img src='./images/hp_dark.svg' alt='logo hp'></img>
                <img src='./images/oracle_dark.svg' alt='logo oracle'></img>
                <img src='./images/google_dark.svg' alt='logo google'></img>
                <img src='./images/nvidia_dark.svg' alt='logo nvidia'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
