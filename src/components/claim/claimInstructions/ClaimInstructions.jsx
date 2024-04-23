import React from 'react'
import './claimInstructions.css'

const ClaimInstructions = ({setModalOpen}) => {
  return (
    <div className='claim-ins-cont'>
        <div className="claim-head-cont">
            <h1 className="claim-title">Connect Wallet</h1>
            <h2 className="claim-title2">Claim</h2>
        </div>
        <div className="claim-small-text-cont">
          <p className="claim-small-text">How to do</p>
          <div className="claim-small-line"/>
        </div>
        <div className="claim-ins-div">
            <p className="claim-ins">1. Connect Wallet</p>
            <p className="claim-ins">2. Claim unlocked tokens</p>
            <p className="claim-ins font-semibold">3. Stake for extra rewards!</p>
        </div>
        <button className="claim-connect-btn" onClick={()=>setModalOpen(true)}>
            Connect Wallet
        </button>
    </div>
  )
}

export default ClaimInstructions