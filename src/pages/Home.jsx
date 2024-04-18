import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSec from '../components/hero-sec/HeroSec'
import Tokenomics from '../components/tokenomics-sec/Tokenomics'
import Features from '../components/features-sec/Features'
import TechSec from '../components/tech-sec/TechSec'
import RoadMap from '../components/roadmap-sec/RoadMap'
import Footer from '../components/footer/Footer'
import Gradients from '../components/gradientsHome/Gradients'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const nav=useNavigate()
  return (
    <div className='home-page'>
      {/* <Gradients/> */}
      <Navbar nav={nav}/>
      <HeroSec nav={nav}/>
      <Tokenomics/>
      <Features/>
      <TechSec/>
      <RoadMap/>
      <Footer/>
    </div>
  )
}

export default Home