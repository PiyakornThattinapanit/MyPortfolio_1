import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skill from './components/skill/Skill'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
        <Header />
        <Nav />
        <About />
        <Skill/>
        <Services/>
        <Testimonials />
        {/* <Footer /> */}
        <Contact />

    </div>
  )}
export default App;