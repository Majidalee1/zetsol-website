import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Offerings from './components/Offerings'
import Achievements from './components/Achievements'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Partners />
      <Offerings />
      <Achievements />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
