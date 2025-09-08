import React from 'react'
import './header.css'
import { CTA } from './CTA'
import { HeaderSocial } from './HeaderSocial'



export const Header = () => {
  return (
    <header id='header'>
      <div className='container header-container' >
        <h5>Hello I'm</h5>
        <h1>Khaled <span>Magdy</span></h1>
        <h5 className='text-light'>FrontEnd Developer</h5>
        <CTA />
        <HeaderSocial />
        <a href='#contact' className='scroll-down'>Scroll Down</a>
      </div>

    </header>
  )
}
