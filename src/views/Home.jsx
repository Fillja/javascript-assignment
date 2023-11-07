import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ShowcaseSection from '@homespecifics/ShowcaseSection'
import Features from '@homespecifics/Features'
import AboutSection from '@homespecifics/AboutSection'
import ServicesSection from '@homespecifics/ServicesSection'
import ChooseusSection from '@homespecifics/ChooseusSection'
import ProjectsSection from '@homespecifics/ProjectsSection'
import Meetourteam from '@homespecifics/Meetourteam'
import TestimonialSection from '@homespecifics/TestimonialSection'
import ArticlesSection from '@homespecifics/ArticlesSection'
import SignupSection from '@homespecifics/SignupSection'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <ShowcaseSection />
        <Features />
        <AboutSection />
        <ServicesSection />
        <ChooseusSection />
        <ProjectsSection />
        <Meetourteam />
        <TestimonialSection />
        <ArticlesSection />
        <SignupSection />
      </main>
      <Footer />
    </>
  )
}

export default Home