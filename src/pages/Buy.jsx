import React from 'react'
import Navbar from '../components/home/navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/home/footer/Footer'
import BuyHeroSection from '../components/buy/BuyHeroSection'
import ScrollToTop from '../components/scrollToTop/ScrollToTop'

const Buy = () => {
    const nav=useNavigate()
  return (
    <div className='buy-page'>
        <Navbar nav={nav}/>
        <BuyHeroSection/>
        <Footer/>
        <ScrollToTop/>
    </div>
  )
}

export default Buy