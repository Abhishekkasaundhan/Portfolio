import React from 'react'
import './head.css'
import CTA from './CTA'
import ME from '../../assets/ME1.jpg'
import HeaderSocials from './HeadSocials'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I'm</h5>
        <h1>Abhishek Kasaundhan</h1>
        <h5 className="text-light">a Full Stack Developer</h5>
        <CTA/>
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll down</a>

      </div>
    </header>
  )
}

export default Header