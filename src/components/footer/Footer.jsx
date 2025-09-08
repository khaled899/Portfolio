import React from 'react'
import './footer.css'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer id='footer'>

      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Servicces</a></li>
        <li><a href="#portoflio">Portoflio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer-social">
        <a href="https://www.facebook.com/khaled.magdy.714" target='_blank' rel='noreferrer'>
          <FaFacebookF className='icon' />
        </a>
        <a href="https://github.com/khaled899" target='_blank' rel='noreferrer'>
          <FaGithub className='icon' />
        </a>
        <a href="https://www.linkedin.com/in/khaled-magdy-4578a41bb/" target='_blank' rel='noreferrer'>
          <FaLinkedinIn className='icon' />
        </a>

      </div>
      <div className="footer-copyright">
        <small>&copy; Khaled Magdy .All rights reserved </small>
      </div>
    </footer>
  )
}
