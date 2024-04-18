import React from 'react'
import Navbar from '../components/home/navbar/Navbar'
import HeroSec from '../components/home/hero-sec/HeroSec'
import Tokenomics from '../components/home/tokenomics-sec/Tokenomics'
import Features from '../components/home/features-sec/Features'
import TechSec from '../components/home/tech-sec/TechSec'
import RoadMap from '../components/home/roadmap-sec/RoadMap'
import Footer from '../components/home/footer/Footer'
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