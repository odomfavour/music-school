import React from 'react'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import Groups from '../components/Groups/Groups'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Teachers from '../components/Teachers/Teachers'
import Testimonials from '../components/Testimonials/Testimonials'

const Index = () => {
  return (
    <section>
        <Header/>
        <Hero/>
        <About/>
        <Groups/>
        <Teachers/>
        <Testimonials/>
        <Footer/>
    </section>
  )
}

export default Index