import React from 'react'
import './herosec.css'
import HeroStartBtn from './HeroStartBtn'

const HeroSec = ({nav}) => {
  return (
    <div className="hotel-sec">
      <div className='hero-sec-main'>
        <div className="hero-data-cont">
          <div className="hero-data-heading-cont">
            <h1 className="hero-data-heading1">The Little Big</h1>
            <h1 className="hero-data-heading2">Dog of Crypto</h1>
          </div>
          <div className="hero-data-btn-cont">
            <h4 className="hero-data-btn-text">BUY CATCH</h4>
            <button className="hero-data-btn" onClick={()=>nav('/buy')}>BUY</button>
          </div>
        </div>
        <img src="hero.png" alt="hero section dog ichuahua" className='hero-img'/>
      </div>
      <div className="hero-img-grad"></div>
      <HeroStartBtn/>
    </div>
  )
}

export default HeroSec