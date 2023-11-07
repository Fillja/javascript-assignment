import React from 'react'
import Paperz_logo from '@images/Paperz-logo.svg'
import Dorfus_logo from '@images/dorfus-logo.svg'
import Martino_logo from '@images/martino-logo.svg'
import Square_logo from '@images/square-logo.svg'
import Gobona_logo from '@images/gobona-logo.svg'
import Button from '@generics/Button'
import FeaturesBox from '@generics/FeaturesBox'

const Features = () => {
  return (
    <section className="features-section" id="features-section"> 
        <div className="container">
            <div className="partners">
                <a href="#"><img src={Paperz_logo} alt="Paperz logotype"/></a>
                <a href="#"><img src={Dorfus_logo} alt="Dorfus logotype"/></a>
                <a href="#"><img src={Martino_logo} alt="Martino logotype"/></a>
                <a href="#"><img src={Square_logo} alt="Square logotype"/></a>
                <a href="#"><img src={Gobona_logo} alt="Gobona logotype"/></a>
            </div>
            <div className="features">
                <div className="part-one">
                    <p className="orange-p">Features</p>
                    <h2>Our Accounting is trusted by thousands of companies</h2>
                    <Button color="btn-yellow" text="Learn More" url="#" />
                </div>
                <div className="part-two">
                    <div className="icons-left">
                        <FeaturesBox icon="fa-regular fa-handshake" title="Business Advice" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                        <FeaturesBox icon="fa-solid fa-chart-mixed-up-circle-dollar" title="Financial Advice" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    </div>
                    <div className="icons-right">
                        <FeaturesBox icon="fa-regular fa-lightbulb-on" title="Startup Business" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                        <FeaturesBox icon="fa-regular fa-folder-gear" title="Risk Management" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features