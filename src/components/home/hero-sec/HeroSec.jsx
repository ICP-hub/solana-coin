import React, { useState } from 'react'
import './herosec.css'
import HeroStartBtn from './HeroStartBtn'
import HeroBuyNow from './HeroBuyNow'

const HeroSec = ({nav}) => {
  const [loading,setLoading]=useState(false)
  return (
    <div className="hero-sec">              
    <img src="Spinner2.gif" alt="loader" className='loader' style={{display:(loading)?'block':'none'}}/>
      <div className='hero-sec-main'>
      <div className=' hero-buyNow-mainCont'>
        <HeroBuyNow nav={nav} loading={loading} setLoading={setLoading}/>
      </div>
          

        <div className="hero-data-cont">
          <div className="hero-data-heading-cont">
            <h1 className="hero-data-heading1">The Little Big</h1>
            <h1 className="hero-data-heading2">Dog of <span> Crypto </span></h1>
          </div>
          <div className="hero-data-btn-cont">
            <h4 className="hero-data-btn-text">CLAIM CATCH</h4>
            <button className="hero-data-btn" onClick={()=>nav('/claim')}>Claim</button>
          </div>
        </div>

        <div className='hero-cont'>
        <img src="hero2.png" alt="hero section dog solhuahua" className='hero-img'/>
        </div>
      </div>
      <div className="hero-img-grad"></div>
      <HeroStartBtn/>
    </div>
  )
}

export default HeroSec