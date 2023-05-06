import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Menu = () => (
  <>
    <p><Link to='/'>Home</Link></p>
    <p><Link to='/blog'>Blog</Link></p>
    <p><Link to='/faqs'>FAQS</Link></p>
    <p><Link to='/about'>About</Link></p>
    <p><Link to='/contact'>Contact</Link></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="mindmeld__navbar">
      <div className="mindmeld__navbar-links">
        <div className="mindmeld__navbar-links_logo">
        <h2> <Link to='/'>MindMeld</Link> </h2>
        </div>
        <div className="mindmeld__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="mindmeld__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="mindmeld__navbar-menu_container scale-up-center">
          <div className="mindmeld__navbar-menu_container-links">
            <Menu />
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar