import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/images/logo.PNG';
import navBarStyles from '../Styles/Navbar.module.css';

const Navbar = () => {
  const [dropdownStates, setDropdownStates] = useState({
    home: false,
    pages: false,
    services: false,
    blog: false
  });

  const dropdownRefs = {
    home: useRef(null),
    pages: useRef(null),
    services: useRef(null),
    blog: useRef(null),
  };

  const handleClickOutside = (event) => {
    Object.keys(dropdownRefs).forEach((key) => {
      if (dropdownRefs[key].current && !dropdownRefs[key].current.contains(event.target)) {
        setDropdownStates((prevState) => ({
          ...prevState,
          [key]: false
        }));
      }
    });
  };

  const toggleDropdown = (menu) => {
    setDropdownStates((prevState) => ({
      home: false,
      pages: false,
      services: false,
      blog: false,
      [menu]: !prevState[menu]
    }));
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div id='navbar' className={navBarStyles.mainDiv}>
      <div className={navBarStyles.logo}><img src={logo} alt="Logo" /></div>
      <div className={navBarStyles.nav}>
        <div className={navBarStyles.divider}></div>
        
        <div className={navBarStyles.navItem} ref={dropdownRefs.home}>
          <div className={navBarStyles.navHeader}><a href="home">HOME</a></div>
          <i className="fa fa-caret-down" aria-hidden="true" onClick={() => toggleDropdown('home')}></i>
          {dropdownStates.home && (
            <ul className={navBarStyles.dropdown}>
              <li className={navBarStyles.dropdownItem}><a href="#header">Header</a></li>
              <li className={navBarStyles.dropdownItem}><a href="#welocme">Welcome</a></li>
              <li className={navBarStyles.dropdownItem}><a href="#services">Services</a></li>
              <li className={navBarStyles.dropdownItem}><a href="#stats">Stats</a></li>
              <li className={navBarStyles.dropdownItem}><a href="#testimonials">Testimonials</a></li>
              <li className={navBarStyles.dropdownItem}><a href="#clients">Clients</a></li>
              <li className={navBarStyles.dropdownItem}><a href="#news">News</a></li>
              <li className={navBarStyles.dropdownItem}><a href="#footer">Footer</a></li>
            </ul>
          )}
        </div>
        
        <div className={navBarStyles.navItem} ref={dropdownRefs.pages}>
          <div className={navBarStyles.navHeader}><a href="home">PAGES</a></div>
          <i className="fa fa-caret-down" aria-hidden="true" onClick={() => toggleDropdown('pages')}></i>
          {dropdownStates.pages && (
            <ul className={navBarStyles.dropdown}>
              <li className={navBarStyles.dropdownItem}>Page1</li>
              <li className={navBarStyles.dropdownItem}>Page2</li>
              <li className={navBarStyles.dropdownItem}>Page3</li>
              <li className={navBarStyles.dropdownItem}>Page4</li>
            </ul>
          )}
        </div>
        <div className={navBarStyles.navItem} ref={dropdownRefs.pages}>
          <div className={navBarStyles.navHeader}><a href="home">TRACKING</a></div>
        </div>

        <div className={navBarStyles.navItem} ref={dropdownRefs.services}>
          <div className={navBarStyles.navHeader}><a href="home">SERVICES</a></div>
          <i className="fa fa-caret-down" aria-hidden="true" onClick={() => toggleDropdown('services')}></i>
          {dropdownStates.services && (
            <ul className={navBarStyles.dropdown}>
              <li className={navBarStyles.dropdownItem}><a href="#services">Air Freight</a></li>
              <li className={navBarStyles.dropdownItem}><a href="#services">Drone</a></li>
            </ul>
          )}
        </div>
        
        <div className={navBarStyles.navItem} ref={dropdownRefs.blog}>
          <div className={navBarStyles.navHeader}>BLOG</div>
          <i className="fa fa-caret-down" aria-hidden="true" onClick={() => toggleDropdown('blog')}></i>
          {dropdownStates.blog && (
            <ul className={navBarStyles.dropdown}>
              <li className={navBarStyles.dropdownItem}><a href="#news">Blog1</a></li>
              <li className={navBarStyles.dropdownItem}><a href="#news">Blog2</a></li>
              <li className={navBarStyles.dropdownItem}><a href="#news">Blog3</a></li>
            </ul>
          )}
        </div>

        <div className={navBarStyles.navBtn}>
          <div className={navBarStyles.navBtn1}>
            <button><a href="signup">Sign Up</a></button>
          </div>
          <div className={navBarStyles.navBtn2}>
            <button><a href="signin">Sign In</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
