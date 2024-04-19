import React from 'react'
import './claim.css'
import ClaimInstructions from './claimInstructions/ClaimInstructions'
import CLaimRotateBtn from './claimRotateBtn/ClaimRotateBtn'

const ClaimHeroSection = () => {
  return (
    <div className='claim-hero-sec'>
        <img src="shiba.png" alt="shiba inu holdinga coin" className="claim-img" />
        <ClaimInstructions/>
        <div className="claim-bottom-text-cont">
          <p className="claim-bottom-text">
          ICHuaHua's Crypto Adventure: A Tale of Grit and Wit
          </p>
        </div>
        <CLaimRotateBtn/>
    </div>
  )
}

export default ClaimHeroSection