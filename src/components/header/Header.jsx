import React from 'react'
import './Header.css'
import  CTA from './CTA'
import Piyakorn7 from '../../assets/piyakorn7.PNG'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
        <div className='container header_container'>
            <h5>Hello I'm</h5>
            <h1>Piyakorn thattinapanit</h1>
            <h5 className='text-light'>Frontend Devoloper (Internship)</h5>
            <CTA />
            <HeaderSocials/>

            <div className='piyakorn'>
                <img src={Piyakorn7} alt=""/>
            </div>

            <a href='#contact' className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )}
export default Header