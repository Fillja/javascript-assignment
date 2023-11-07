import React from 'react'
import Kristine_image from '@images/Kristine.png'
import Mark_image from '@images/Mark.png'
import Kimberly_image from '@images/Kimberly.png'
import Justin_image from '@images/Justin.png'
import Button from '@generics/Button'
import TeamMember from '../generics/TeamMember'

const Meetourteam = () => {
  return (
    <section className="meet-section">
        <div className="container">
            <div className="part-one">
                <div>
                    <p className="orange-p">Meet Our Team</p>
                    <h2>Experienced Team Members</h2>
                </div>
                <Button color="btn-transparent" text="Browse Services" url="#" />
            </div>
            <div className="part-two">
                <TeamMember img={Kristine_image} alt="Portrait of a well dressed woman in an office, smiling" name="Kristine Palmer" title="Chief Operation Officer" />
                <TeamMember img={Mark_image} alt="Portrait of a well dressed man, standing infront of a white background, smiling" name="Mark Aubri" title="Senior Consultant" />
                <TeamMember img={Kimberly_image} alt="Portrait of a well dressed woman, seated on a window sill, smiling" name="Kimberly Hansen" title="Senior Consultant" />
                <TeamMember img={Justin_image} alt="Portrait of a mans headshot, smiling" name="Justin Willoman" title="Senior Tech Consultant" />
            </div>
            <div className="round-buttons">
                <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                <a className="active" href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
            </div>
        </div>
    </section>
  )
}

export default Meetourteam