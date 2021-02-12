import React from "react"
import "./WorkWith.css"
import Sbutton from "../../../Ui/Sbutton/Sbutton"

const WorkWith = () => {
  return (
    <section className='work'>
      <div className='work__container'>
        <div className='work__wrapper'>
          <div className='work__logos'>
            <img src='./images/tesla.svg' alt='logo tesla'></img>
            <img src='./images/microsoft.svg' alt='logo microsoft'></img>
            <img src='./images/hp.svg' alt='logo hp'></img>
            <img src='./images/oracle.svg' alt='logo oracle'></img>
            <img src='./images/google.svg' alt='logo google'></img>
            <img src='./images/nvidia.svg' alt='logo nvidia'></img>
          </div>

          <div className='work__content'>
            <h2 className='work__title'>Who we work with</h2>
            <p className='work__copy'>
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.
            </p>
            <div className='work__btn'>
              <Sbutton>About Us</Sbutton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkWith
