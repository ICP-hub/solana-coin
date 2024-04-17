import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSec from '../components/hero-sec/HeroSec'
import Tokenomics from '../components/tokenomics-sec/Tokenomics'
import Features from '../components/features-sec/Features'
import TechSec from '../components/tech-sec/TechSec'
import RoadMap from '../components/roadmap-sec/RoadMap'
import Footer from '../components/footer/Footer'
import Gradients from '../components/gradientsHome/Gradients'

const Home = () => {
  return (
    <div className='home-page'>
      {/* <Gradients/> */}
      <Navbar/>
      <HeroSec/>
      <Tokenomics/>
      <Features/>
      <TechSec/>
      <RoadMap/>
      <Footer/>
    </div>
  )
}

export default Home