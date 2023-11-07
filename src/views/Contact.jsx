import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ContactShowcase from '@contactspecifics/ContactShowcase'
import ContactForm from '@contactspecifics/ContactForm'
import ContactMap from '@contactspecifics/ContactMap'

const Contact = () => {
  return (
    <>
        <Header />
        <main>
            <ContactShowcase />
            <ContactForm />
            <ContactMap />
        </main>
        <Footer />
    </>
  )
}

export default Contact