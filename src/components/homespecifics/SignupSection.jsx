import React from 'react'
import Newsletter_lines from '@images/newsletter-lines.svg'

const SignupSection = () => {
  return (
    <section className="signup-section">
        <div className="container">
            <img className="squiggly-lines" src={Newsletter_lines} alt=""/>
            <h2>Get News Updates By Signing Up</h2>
            <div className="subscribe">
                <form method="post">
                    <label htmlFor="signup"></label>
                    <input type="text" id="signup" name="signup" placeholder="username@domain.com"/>
                </form>
                <button type="submit" className="btn-yellow" href="#">Subscribe<i className="fa-regular fa-arrow-up-right"></i></button>
            </div>
        </div>
    </section>
  )
}

export default SignupSection