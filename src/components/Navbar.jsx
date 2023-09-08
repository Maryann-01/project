import { React, useState } from 'react'
import logo from "../images/logo.png"
import hamburgerImage from "../images/menu.png"
import closeImage from "../images/x 1.png"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav className='nav-row'>
      <div className="navbar-header">
        <img src={logo} alt="fundACause Logo" className="nav-logo" />
        <img
          src={isMenuOpen ? closeImage : hamburgerImage}
          alt="Menu"
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        />
      </div>
      <ul className={`navLink ${isMenuOpen ? 'open' : ''} text-nav`}>
        <div className='nv-links'>
          <li><a href="#about">About Us</a></li>
          <li><a href="#project">Our Projects</a></li>
          <li><a href="#volunteer">Volunteer</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </div>
        <li><button className="navbtn btn">Donate</button></li>
      </ul>
    </nav>
  )
}

export default Navbar