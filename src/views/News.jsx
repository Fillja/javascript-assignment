import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import NewsShowcase from '@newsspecifics/NewsShowcase'
import NewsSection from '@newsspecifics/NewsSection'
import SignupSection from '@homespecifics/SignupSection'

const News = () => {
  return (
    <>
        <Header />
        <main>
        <NewsShowcase />
        <NewsSection />
        <SignupSection />
        </main>
        <Footer />
    </>
  )
}

export default News