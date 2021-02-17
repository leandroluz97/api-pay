import React, { useState } from "react"
import Cbutton from "../../Ui/cButton/Cbutton"
import "./Contact.css"
import Ready from "../../Ui/Ready/Ready"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: {
      type: "name",
      value: "",
      validation: "required",
      valid: false,
      error: null /* "Invalid name! Eg.: Justin Smith"*/,
    },
    email: {
      type: "email",
      value: "",
      validation: "required",
      valid: false,
      error: null /*"Invalid email! Eg.: justinsmith@gmail.com"*/,
    },
    company: {
      type: "company",
      value: "",
      validation: "required",
      valid: false,
      error: null /*"Invalid Company name! Eg.: microsoft"*/,
    },
    title: {
      type: "title",
      value: "",
      validation: "required",
      valid: false,
      error: null /*"Invalid name! Eg.: Justin Smith"*/,
    },
    message: {
      type: "message",
      value: "",
      validation: "required",
      valid: false,
      error: null /*"Invalid name! Eg.: Justin Smith"*/,
    },
  })
  const [disabled, setDisabled] = useState(false)

  //chech va
  const checkValidity = (value, type) => {
    let valid = false
    let error = "This field can't be empty"

    if (value.length > 0) {
      valid = true
      error = ""
    }
    //test email
    if (
      type === "email" &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ) {
      valid = false
      error = "Please enter a valid email"
    }

    return { valid, error }
  }

  const handleValidation = (e, type) => {
    //new copy of all state
    const allData = { ...formData }

    //defing the value
    allData[type].value = e.target.value

    //check validity
    const validationResult = checkValidity(allData[type].value, type)
    allData[type].valid = validationResult.valid
    allData[type].error = validationResult.error

    //sisabled submit btn
    let allValid = []
    for (const key in allData) {
      allValid.push(allData[key].valid)
    }
    let disabled = allValid.every((el) => el === true)

    setFormData(allData)
    setDisabled(disabled)
  }
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
                <div className='f-group'>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className={formData.name.error ? "c-error" : null}
                    placeholder='Name'
                    value={formData.name.value}
                    onChange={(e) => handleValidation(e, "name")}
                  />
                  <span>{formData.name.error}</span>
                </div>
                <div className='f-group'>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className={formData.email.error ? "c-error" : null}
                    placeholder='Email Address'
                    value={formData.email.value}
                    onChange={(e) => handleValidation(e, "email")}
                  />
                  <span>{formData.email.error}</span>
                </div>
                <div className='f-group'>
                  <input
                    type='text'
                    name='company'
                    id='company'
                    className={formData.company.error ? "c-error" : null}
                    placeholder='Company Name'
                    value={formData.company.value}
                    onChange={(e) => handleValidation(e, "company")}
                  />
                  <span>{formData.company.error}</span>
                </div>
                <div className='f-group'>
                  <input
                    type='text'
                    name='title'
                    id='title'
                    className={formData.title.error ? "c-error" : null}
                    placeholder='Title'
                    value={formData.title.value}
                    onChange={(e) => handleValidation(e, "title")}
                  />
                  <span>{formData.title.error}</span>
                </div>
                <div className='f-group'>
                  <textarea
                    name='sms'
                    id='sms'
                    cols='30'
                    rows='4'
                    placeholder='Message'
                    className={formData.message.error ? "c-error" : null}
                    value={formData.message.value}
                    onChange={(e) => handleValidation(e, "message")}
                  ></textarea>
                  <span>{formData.message.error}</span>
                </div>
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
                <Cbutton disable={!disabled}>Submit</Cbutton>
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
      <Ready />
    </section>
  )
}

export default Contact
