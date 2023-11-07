import React from 'react'
import Services_lines from '@images/services-lines.svg'
import ServicesBox from '@generics/ServicesBox'

const ServicesSection = () => {
  return (
    <section className="services-section">
            <img className="squiggly-lines" src={Services_lines} alt="Squiggly lines"/>
            <div className="container">
                <div>
                    <p className="orange-p">Our Services</p>
                    <h2>We Provide The Best<br></br> Service For Consulting</h2>
                </div>
                <div className="services-box">
                    <ServicesBox title="Business Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
                    <ServicesBox title="Startup Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
                    <ServicesBox title="Financial Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
                    <ServicesBox title="Risk Management" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
                </div>
                <div className="center-content"><a className="btn-transparent" href="#">Browse Services<i className="fa-regular fa-arrow-up-right"></i></a></div>
            </div>
        </section>
  )
}

export default ServicesSection