import React from 'react'
import Agents from '../components/Agents/Agents'
import CompanyStatistics from '../components/CompanyStatistics/CompanyStatistics'
import Feature from '../components/Feature/Feature'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Review from '../components/ReviewCarowsel/Review'
import Services from '../components/Services/Services'

function HomeScreen() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Feature />
      <CompanyStatistics />
      <Review />
      <Agents />
      <Footer />
    </>
  )
}

export default HomeScreen
