import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiFillSafetyCertificate, AiOutlineFundProjectionScreen, AiFillContacts } from 'react-icons/ai';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
        <span>Home</span>
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
        <span>About</span>
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <AiOutlineBook />
        <span>Experience</span>
      </a>
      <a href="#certifications" onClick={() => setActiveNav('#certifications')} className={activeNav === '#certifications' ? 'active' : ''}>
        <AiFillSafetyCertificate />
        <span>Certifications</span>
      </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <AiOutlineFundProjectionScreen />
        <span>Projects</span>
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <AiFillContacts />
        <span>Contact</span>
      </a>
    </nav>
  );
}

export default Nav;
