import React from 'react'
import Showcase_lines from '@images/showcase-lines.svg'
import { NavLink } from 'react-router-dom'

const NewsShowcase = () => {
  return (
    <section className="generic-showcase">
        <img className="squiggly-lines" src={Showcase_lines} alt="Squiggly lines"/>
        <div className="container">
            <div>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/news">News</NavLink>
            </div>
            <h1>News & Articles</h1>
        </div>
    </section>
  )
}

export default NewsShowcase