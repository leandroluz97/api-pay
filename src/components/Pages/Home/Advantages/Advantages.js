import React from "react"
import Advantage from "./Advantage/Advantage"
import "./Advantages.css"

const Advantages = () => {
  const advantage = [
    {
      id: 1,
      img: "./images/personal_finance.svg",
      title: "Personal Finances",
      copyright:
        "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. ",
    },
    {
      id: 2,
      img: "./images/banking.svg",
      title: "Banking & Coverage",
      copyright:
        "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts. ",
    },
    {
      id: 3,
      img: "./images/consumer.svg",
      title: "Consumer Payments",
      copyright:
        "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account. ",
    },
  ]

  return (
    <section className='advantages'>
      <div className='advantages__container'>
        <div className='advantages__wrapper'>
          {advantage.map((advantage, index) => {
            return <Advantage key={advantage.id} {...advantage} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Advantages
