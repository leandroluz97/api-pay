import React from "react"
import "./App.css"
import Header from "../src/components/Header/Header"
import Home from "./components/Pages/Home/Home"
import Footer from "./components/Footer/Footer"
import Pricing from "./components/Pages/Pricing/Pricing"
const App = () => {
  return (
    <div>
      <Header />
      {/* <Home />*/}
      <Pricing />
      {/* <Footer />*/}
    </div>
  )
}

export default App
