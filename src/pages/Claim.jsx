import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/home/navbar/Navbar'
import Footer from '../components/home/footer/Footer'
import ClaimHeroSection from '../components/claim/ClaimHeroSection'

const Claim = () => {
    const nav=useNavigate()
  return (
    <div className='claim-page'>
        <Navbar nav={nav}/>
        <ClaimHeroSection/>
        <Footer/>
    </div>
  )
}

export default Claim