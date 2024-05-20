import React from 'react'
import './buy.css'
import BuyOptions from './buyOptions/BuyOptions'
import BuyRotateBtn from './buyRotateBtn/BuyRotateBtn'

const BuyHeroSection = () => {
  return (
    <div className='buy-hero-sec'>
      <div className='shiba-cont'>
      <BuyRotateBtn/>
      <img src="shiba3.png" alt="shiba inu holdinga coin" className="buy-img" />
      </div>

        <BuyOptions/>
        
        <div className="buy-bottom-text-cont">
          <p className="buy-bottom-text">
          SOLHuaHua's Crypto Adventure: A Tale of Grit and Wit
          </p>
        </div>
        
    </div>
  )
}

export default BuyHeroSection