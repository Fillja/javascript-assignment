import React from 'react'
import Chooseus_image from '@images/choose-us.png'
import ChooseUsHeadlines from '@generics/ChooseUsHeadlines'

const ChooseusSection = () => {
  return (
    <section className="choose-us-section">
        <div className="container">
            <div className="why-choose-us">
                <p className="orange-p">Why Choose Us</p>
                <h2>Why We Are The Best Business Consulting Agency</h2>
                <ChooseUsHeadlines icon="fa-light fa-thumbs-up" title="Process Excellence" text="Lorem, ipsum dolor sit amet consectetur." />
                <ChooseUsHeadlines icon="fa-light fa-gem" title="Strategic Planning" text="Lorem, ipsum dolor sit amet consectetur." />
                <ChooseUsHeadlines icon="fa-light fa-pen-nib" title="Experience Design" text="Lorem, ipsum dolor sit amet consectetur." />
                <ChooseUsHeadlines icon="fa-light fa-head-side-gear" title="Artificial Intelligence" text="Lorem, ipsum dolor sit amet consectetur." />
            </div>
            <div className="choose-us-image">
                <img src={Chooseus_image} alt="Two seated women having a discussion in an office"/>
            </div>
        </div>
    </section>
  )
}

export default ChooseusSection