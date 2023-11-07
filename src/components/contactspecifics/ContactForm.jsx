import React from 'react'
import FormPart from '@scripts/FormPart'
import ContactLinks from '@generics/ContactLinks'

const ContactForm = () => {
  return (
    <section className="contact-form">
        <div className="info container">
            <div className="columns">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                    <h3>Visit us</h3>
                    <a href="#contact-map">
                        <p>Sveavägen 31</p>
                        <p>11134 STOCKHOLM</p>
                    </a>
                </div>
            </div>
            <ContactLinks icon="fa-solid fa-phone" title="Call us" link1="tel:+46812147050" text1="+46 (8) 121 470 50" link2="tel:+46812147051" text2="+46 (8) 121 470 51" />
            <ContactLinks icon="fa-solid fa-envelope" title="Email us" link1="mailto:info@crito.com" text1="info@crito.com" link2="mailto:support@crito.com" text2="support@crito.com" />
        </div>  
        <div className="form-part container">
            <h2>Leave us a message<br></br> for any information.</h2>

            <FormPart />

        </div>
    </section>
  )
}

export default ContactForm