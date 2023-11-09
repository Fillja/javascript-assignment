import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import NewsShowcase from '@newsspecifics/NewsShowcase'
import ArticleDetails from '@newsspecifics/ArticleDetails'
import ArticleScrollSection from '@newsspecifics/ArticleScrollSection'



const NewsDetails = () => {
  return (
    <>
      <Header />
      <NewsShowcase />
      <ArticleDetails />
      <ArticleScrollSection />
      <Footer />
    </>
  )
}

export default NewsDetails