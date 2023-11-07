import React from 'react'
import Samantha_Image from '@images/samantha.png'
import Button from '@generics/Button'

const AboutSection = () => {
  return (
    <section className="about-section" id="about-section">
        <div className="container">
            <div className="samantha">
                <img src={Samantha_Image} alt="Smiling woman holding a laptop while walking down an office hallway"/>
                <div className="samantha-info">
                    <div>
                        <h4>Samantha Brown,</h4>
                        <p className="orange-p">Founder</p>
                        <p><i>"Lorem ipsum dolor sit, amet consectetur adipisicing elit."</i></p>
                    </div>
                </div>
            </div>
            <div className="about-company">
                <p className="orange-p">About Company</p>
                <h2>We Are Business Consulting & Credit Repair Experts</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                <div className="about-buttons">
                    <Button color="btn-black" text="Learn More" url="#" />
                    <a className="video-button" href="#"><i className="fa-sharp fa-solid fa-play transition"></i>Intro Video</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection