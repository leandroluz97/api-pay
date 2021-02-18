import React from "react"
import "./App.css"
import Header from "../src/components/Header/Header"
import Home from "./components/Pages/Home/Home"
import Footer from "./components/Footer/Footer"
import Pricing from "./components/Pages/Pricing/Pricing"
import About from "./components/Pages/About/About"
import Contact from "./components/Pages/Contact/Contact"
import { Switch, Route, Link } from "react-router-dom"

const App = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    })
  }
  return (
    <>
      <Header handleScrollTop={handleScrollTop} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/pricing' component={Pricing} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer handleScrollTop={handleScrollTop} />
    </>
  )
}

export default App
