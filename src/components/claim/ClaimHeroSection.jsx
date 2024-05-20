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
  const [loading,setLoading]=useState(false)
  return (
    <div className='claim-hero-sec'>
      <img src="Spinner2.gif" alt="loader" className='loader' style={{display:(loading)?'block':'none'}}/>
      <div className='shiba-cont'>
      <CLaimRotateBtn/>
      <img src="shiba3.png" alt="shiba inu holdinga coin" className="claim-img " />
      </div>
        
        <ClaimInstructions setModalOpen={setModalOpen}/>
        {/* <Gradients/> */}
        <div className="claim-bottom-text-cont">
          <p className="claim-bottom-text">
          SOLHuaHua's Crypto Adventure: A Tale of Grit and Wit
          </p>
        </div>
       
        <ConnectWallet modalOpen={modalOpen} setModalOpen={setModalOpen} setBuyModal={setBuyModal}/>
        <BuyToken buyModal={buyModal} setBuyModal={setBuyModal} loading={loading} setLoading={setLoading}/>
        <Toaster/>
    </div>
  )
}

export default ClaimHeroSection