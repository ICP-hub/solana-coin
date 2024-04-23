import React, { useState } from 'react'
import './claim.css'
import ClaimInstructions from './claimInstructions/ClaimInstructions'
import CLaimRotateBtn from './claimRotateBtn/ClaimRotateBtn'
import ConnectWallet from './connectWallet/ConnectWallet'
import BuyToken from './buyToken/BuyToken'


const ClaimHeroSection = () => {
  const [modalOpen,setModalOpen]=useState(false)
  const [buyModal,setBuyModal]=useState(false)
  return (
    <div className='claim-hero-sec'>
        <img src="shiba.png" alt="shiba inu holdinga coin" className="claim-img" />
        <ClaimInstructions setModalOpen={setModalOpen}/>
        {/* <Gradients/> */}
        <div className="claim-bottom-text-cont">
          <p className="claim-bottom-text">
          ICHuaHua's Crypto Adventure: A Tale of Grit and Wit
          </p>
        </div>
        <CLaimRotateBtn/>
        <ConnectWallet modalOpen={modalOpen} setModalOpen={setModalOpen} setBuyModal={setBuyModal}/>
        {/* <BuyToken buyModal={buyModal} setBuyModal={setBuyModal}/> */}
    </div>
  )
}

export default ClaimHeroSection