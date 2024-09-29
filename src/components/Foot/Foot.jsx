import React from 'react'
import './foot.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const Foot = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Abhishek_kasaundhan</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#certifications'>Certifications</a></li>
        <li><a href='#portfolio'>Project</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://github.com/Abhishekkasaundhan' target='_blank'><BsGithub/></a>
        <a href='https://www.linkedin.com/in/abhishek-kasaundhan/' target='_blank'><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; AbhishekKasaundhan. All rights reserved</small>
      </div>
     </footer>
  )
}

export default Foot