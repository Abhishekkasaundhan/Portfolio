import React from 'react'
import Head from './components/Head/Head'
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Certifications from './components/certifications/Certifications'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/Foot/Foot'

const App = () => {
  return (
    <>
    <Head />
    <Nav />
    <About />
    <Experience />
    <Certifications />
    <Portfolio />
    <Contact />
    <Footer />
    

    </>
  )
}

export default App