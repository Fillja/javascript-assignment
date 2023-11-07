import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Footer_lines from '@images/footer-lines.svg'
import Footer_logo from '@images/footer-logo.svg'

const Footer = () => {
  return (
    <footer>
      <section className="top-footer">
          <img className="squiggly-lines" src={Footer_lines} alt=""/>
          <div className="footer-menu container">
              <div>
                  <HashLink smooth to="/#top"><img src={Footer_logo} alt="crito logotype" /></HashLink>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
              </div>
              <button className="menu-bars"><i className="fa-solid fa-bars"></i></button>
              <div className="link-list">
                  <h3>Company</h3>
                  <HashLink smooth to="/#about-section">About</HashLink>
                  <HashLink smooth to="/#features-section">Features</HashLink>
                  <NavLink to="/">Works</NavLink>
                  <NavLink to="/">Career</NavLink>
              </div>
              <div className="link-list">
                  <h3>Help</h3>
                  <NavLink to="/">Customer Support</NavLink>
                  <NavLink to="/">Delivery Details</NavLink>
                  <NavLink to="/">Terms & Conditions</NavLink>
                  <NavLink to="/">Privacy Policy</NavLink>
              </div>
              <div className="link-list">
                  <h3>Resources</h3>
                  <NavLink to="/">Free eBooks</NavLink>
                  <NavLink to="/">Development Tutorial</NavLink>
                  <NavLink to="/">How to - Blog</NavLink>
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Youtube Playlist</a>
              </div>
              <div className="link-list">
                  <h3>Link</h3>
                  <NavLink to="/">Free eBooks</NavLink>
                  <NavLink to="/">Development Tutorial</NavLink>
                  <NavLink to="/">How to - Blog</NavLink>
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Youtube Playlist</a>
              </div>
          </div>
      </section>
      <div className="footer-border"></div>
      <section className="bottom-footer container">
          <p>
              &copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.
          </p>
          <div className="social-media">
              <a href="https://facebook.com" target="blank"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://twitter.com" target="blank"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://instagram.com" target="blank"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://linkedin.com" target="blank"><i className="fa-brands fa-linkedin"></i></a>
          </div>
      </section>
  </footer>
  )
}

export default Footer