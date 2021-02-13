import React from "react"
import Ready from "../../Ui/Ready/Ready"
import Advantages from "./Advantages/Advantages"
import Features from "./Features/Features"
import Hero from "./Hero/Hero"
import WorkWith from "./WorkWith/WorkWith"
const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <WorkWith />
        <Features />
        <Advantages />
        <Ready />
      </main>
    </>
  )
}

export default Home
