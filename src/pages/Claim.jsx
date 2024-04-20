import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/home/navbar/Navbar'
import Footer from '../components/home/footer/Footer'
import ClaimHeroSection from '../components/claim/ClaimHeroSection'
import ScrollToTop from '../components/scrollToTop/ScrollToTop'

const Claim = () => {
    const nav=useNavigate()
  return (
    <div className='claim-page'>
        <Navbar nav={nav}/>
        <ClaimHeroSection/>
        <Footer/>
        <ScrollToTop/>
    </div>
  )
}

export default Claim