import React from 'react'
import './buy.css'
import BuyOptions from './buyOptions/BuyOptions'
import BuyRotateBtn from './buyRotateBtn/BuyRotateBtn'

const BuyHeroSection = () => {
  return (
    <div className='buy-hero-sec'>
        <img src="shiba.png" alt="shiba inu holdinga coin" className="buy-img" />
        <BuyOptions/>
        <div className="buy-bottom-text-cont">
          <p className="buy-bottom-text">
          ICHuaHua's Crypto Adventure: A Tale of Grit and Wit
          </p>
        </div>
        <BuyRotateBtn/>
    </div>
  )
}

export default BuyHeroSection