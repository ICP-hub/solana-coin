import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/home/navbar/Navbar'
import Footer from '../components/home/footer/Footer'

const Claim = () => {
    const nav=useNavigate()
  return (
    <div className='claim-page'>
        <Navbar nav={nav}/>
        <Footer/>
    </div>
  )
}

export default Claim