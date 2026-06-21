import Aboutme from '@/components/Aboutme';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Journey from '@/components/Journey';
import Contact from '@/components/Contact';
import React from 'react'
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <>
      <Hero/>
      <Aboutme/>
      <Skills/>
      <Projects/>
      <Journey/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home;