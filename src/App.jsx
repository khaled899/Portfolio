import React, { useState } from 'react'
import {Header} from './components/header/Header'
import {About} from './components/about/About'
import {Experience} from './components/experience/Experience'
import {Services} from './components/services/Services'
import {Portfolio} from './components/portfolio/Portfolio'
import {Contact} from './components/contact/Contact'
import {Footer} from './components/footer/Footer'
import {Navi} from './components/navi/Navi'
import { createContext } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
// import { BsToggleOff } from 'react-icons/bs'

export const ThemeContext = createContext(null);




export const App = () => {
  

  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"))

  };
  return (

    <ThemeContext.Provider value={{theme, toggleTheme }}>
    <div id={theme}>
    <div className="switch">
    <label>{theme === 'light' ? 'Light Mode':'Dark Mode'}</label>
    <DarkModeSwitch className='mode'
    onChange={toggleTheme}
    checked={theme ==="dark"}
    size={120} />
    </div>
    <Header />
    <Navi />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
    </div>
    </ThemeContext.Provider>
  )
}
