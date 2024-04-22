import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/home/navbar/Navbar'
import Footer from '../components/home/footer/Footer'
import ClaimHeroSection from '../components/claim/ClaimHeroSection'
import ScrollToTop from '../components/scrollToTop/ScrollToTop'
import Gradients from '../components/claim/gradientsClaim/Gradients'

const Claim = () => {
    const nav=useNavigate()
  return (
    <div className='claim-page'>
        <Navbar nav={nav}/>
        <ClaimHeroSection/>
        <Footer/>
        <ScrollToTop/>
        <Gradients/>
    </div>
  )
}

export default Claim