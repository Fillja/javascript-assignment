import React from 'react'
import Showcase_Lines from '@images/showcase-lines.svg'
import Showcase_Image from '@images/showcase-image.svg'
import Button from '@generics/Button'

const ShowcaseSection = () => {
  return (
    <section className="showcase-section">
        <img className="squiggly-lines" src={Showcase_Lines} alt="Squiggly lines"/>
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <Button color="btn-yellow" text="Get Consulting" url="#" />
                <Button color="btn-transparent" text="Learn More" url="#" />
            </div>
            <img src={Showcase_Image} alt="image of a man in a suit with a tablet"/>
        </div>
    </section>
  )
}

export default ShowcaseSection