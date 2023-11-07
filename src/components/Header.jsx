import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import CritoLogotype from '@images/Logo.svg'
import Button from '@generics/Button'

const Header = () => {
  return (
    <header>
        <div className="container">
            <NavLink to="/"><img src={CritoLogotype} alt="crito logotype" /></NavLink>
            <button className="menu-bars"><i className="fa-solid fa-bars"></i></button>
            <div className="menu">
                <div className="top-menu">
                    <div className="contact-info">
                        <div className="content-box">
                            <a href="tel:+46812147050"><i className="fa-light fa-phone-volume"></i>+46 (8) 121 470 50</a>
                        </div>
                        <div className="content-box">
                            <a href="mailto:info@crito.com"><i className="fa-regular fa-envelope"></i>info@crito.com</a>
                        </div>
                        <div className="content-box last">
                            <HashLink smooth to="/contact/#contact-map"><i className="fa-sharp fa-regular fa-location-dot"></i>Sveavägen 31, 111 34 STOCKHOLM</HashLink>
                        </div>
                    </div>
                    <div className="social-media">
                        <a href="https://facebook.com" target="blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com" target="blank"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="https://instagram.com" target="blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://linkedin.com" target="blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="main-menu">
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/news">News</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </nav>
                    <Button color="btn-yellow btn-login" text="Login" url="#" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header