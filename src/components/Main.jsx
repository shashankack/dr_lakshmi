import React from 'react'
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Page3 from '../components/Page3';
import About from '../components/About';
import Services from './Services';


const Main = () => {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Services />
        <Page3 />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Main 