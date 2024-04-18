import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const Buy = () => {
    const nav=useNavigate()
  return (
    <div className='buy-page'>
        <Navbar nav={nav}/>
        <Footer/>
    </div>
  )
}

export default Buy