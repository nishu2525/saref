import React, { useState,useEffect } from 'react';
import './Nav.css';
// import { NavLink } from "react-router-dom"
import { SlSocialInstagram } from "react-icons/sl";
import { FiYoutube } from "react-icons/fi";

import { ImWhatsapp } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';


const Nav = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    function gotoDonate() {
      navigate('/Donate');
    
    }
    function gotoHome(){
        navigate('/');
    }
    return (
        <>
            <nav className={scrolling ? 'main-nav scrolled' : 'main-nav'}>
                {/* first logo part */}
                <div className='logo'>
                    <img src='images/logo.png' alt='logo_image' className='header_logo' height={60} onClick={gotoHome}/>
                        <span className='title' onClick={gotoHome}>Sare Foundation</span>
                </div>
                {/* 2nd part menu */}
                <div className={
                    showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                }>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>about</Link>
                        </li>
                        <li>
                            <Link to='/contact'>contact</Link>
                        </li>
                        <li>
                            <Link to='/reports'>Reports</Link>
                        </li>

                        <button className='btn' onClick={gotoDonate}>Donate</button>


                    </ul>
                </div>
                {/* Social media links */}
                <div className='social-media'>
                    <ul className='social-media-desktop'>
                        <li>
                            <a href='https://www.instagram.com/sarefoundation/' target='_blank'>
                                <SlSocialInstagram className="instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/+919075222500" target='_blank'>
                                <ImWhatsapp className="whatapp" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/@sarefoundationngo4820"
                                target="_blank">
                                <FiYoutube className="youtube" />
                            </a>
                        </li>
                    </ul>

                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Nav;