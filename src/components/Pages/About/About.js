import React from "react"
import "./About.css"
import Ready from "../../Ui/Ready/Ready"
const About = () => {
  return (
    <>
      <section className='about'>
        <div className='about__container'>
          <div className='about__wrapper'>
            <h2 className='about__title'>
              We empower innovators by delivering access to the financial system
            </h2>
            <div className='about__box'>
              <h3 className='about__heading'>Our Vision</h3>
              <p className='about__copy'>
                Our main goal is to build beautiful consumer experiences along
                with developer-friendly infrastructure. The result is an
                intelligent tool that gives everyone the ability to create
                amazing products that solve big problems. We are deeply focused
                on democratizing financial services through technology.
              </p>
            </div>
            <div className='about__box'>
              <h3 className='about__heading'>Our Business</h3>
              <p className='about__copy'>
                At the core of our platform is the technical infrastructure APIs
                that connect consumers. Our innovative product provides key
                insights for businesses and individuals, as well as robust
                reporting for traditional financial institutions and developers.
              </p>
            </div>

            <div className='about__image'></div>

            <div className='about__box about__box--stats'>
              <div className='about__stats'>
                <p className='about__stats-title'>Team Members</p>
                <p className='about__stats-number'>300+</p>
              </div>
              <div className='about__stats'>
                <p className='about__stats-title'>Offices in the US</p>
                <p className='about__stats-number'>3</p>
              </div>
              <div className='about__stats'>
                <p className='about__stats-title'>Transactions analyzed</p>
                <p className='about__stats-number'>10M+</p>
              </div>
            </div>

            <div className='about__box'>
              <h3 className='about__heading'>The Culture</h3>
              <p className='about__copy'>
                We strongly believe there's always an opportunity to learn from
                each other outside of day-to-day work, whether it's company-wide
                offsites, internal hackathons, or co-worker meetups. We always
                value cross-team collaboration and diversity of thought, no
                matter the job title.
              </p>
            </div>
            <div className='about__box'>
              <h3 className='about__heading'>The People</h3>
              <p className='about__copy'>
                We're all passionate about building a more efficient and
                inclusive financial infrastructure together. At PayAPI, we have
                diverse backgrounds and skills.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Ready />
    </>
  )
}

export default About
