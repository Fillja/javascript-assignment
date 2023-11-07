import React from 'react'
import Showcase_lines from '@images/showcase-lines.svg'
import { NavLink } from 'react-router-dom'

const ContactShowcase = () => {
  return (
    <section className="contact-showcase">
        <img className="squiggly-lines" src={Showcase_lines} alt="Squiggly lines"/>
        <div className="container">
            <div>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
            <h1>Let's connect</h1>
        </div>
    </section>
  )
}

export default ContactShowcase