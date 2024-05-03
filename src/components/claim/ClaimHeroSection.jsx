import React, { useState } from 'react'
import './claim.css'
import ClaimInstructions from './claimInstructions/ClaimInstructions'
import CLaimRotateBtn from './claimRotateBtn/ClaimRotateBtn'
import ConnectWallet from './connectWallet/ConnectWallet'
import BuyToken from './buyToken/BuyToken'
import { Toaster } from 'react-hot-toast'


const ClaimHeroSection = () => {
  const [modalOpen,setModalOpen]=useState(false)
  const [buyModal,setBuyModal]=useState(false)
  return (
    <div className='claim-hero-sec'>
      <div className='shiba-cont'>
      <CLaimRotateBtn/>
      <img src="shiba.png" alt="shiba inu holdinga coin" className="claim-img " />
      </div>
        
        <ClaimInstructions setModalOpen={setModalOpen}/>
        {/* <Gradients/> */}
        <div className="claim-bottom-text-cont">
          <p className="claim-bottom-text">
          ICHuaHua's Crypto Adventure: A Tale of Grit and Wit
          </p>
        </div>
       
        <ConnectWallet modalOpen={modalOpen} setModalOpen={setModalOpen} setBuyModal={setBuyModal}/>
        <BuyToken buyModal={buyModal} setBuyModal={setBuyModal}/>
        <Toaster/>
    </div>
  )
}

export default ClaimHeroSection