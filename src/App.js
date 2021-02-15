import React from "react"
import "./App.css"
import Header from "../src/components/Header/Header"
import Home from "./components/Pages/Home/Home"
import Footer from "./components/Footer/Footer"
import Pricing from "./components/Pages/Pricing/Pricing"
import About from "./components/Pages/About/About"
import Contact from "./components/Pages/Contact/Contact"
const App = () => {
  return (
    <div>
      <Header />
      {/* <Home />*/}
      {/*<Pricing />*/}
      {/* <About />*/}
      {/* <Footer />*/}
      <Contact />
    </div>
  )
}

export default App
