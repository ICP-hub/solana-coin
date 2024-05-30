import React, { useState } from 'react'

const heroBuyNow = ({nav}) => {
    const [walletAddress, setAddress]=useState("EnSawje2vQSQKtGbPYdXEuYKm2sHg eLKJTqCmrDErKEA");
  return (
    <div className='hero-buyNow-cont'>
        <h1 className=' hero-BuyNow-heading'>Buy Now before launch!**</h1>

        <h1 className='hero-BuyNow-heading2'> 1Sol=10,000 $SLOTH</h1>

        <section className='hero-buyNow-Details-cont'>
           <h3>Current Raise </h3>
           <h2> $1,153,944</h2>
           <div className='AirdropToken-Cont'>
              <h1>501</h1>
           </div>
            <button className="nav-buy-btn" onClick={()=>nav('/buy')}> Buy Now!* </button>
        </section>
        <div className=' hero-buyNow-Footer-cont '>
              <h1>*Can also send SOL to {walletAddress} </h1>
              <h1>**Then Wait for <del>Moon</del> Airdrop </h1>
        </div>

    </div>
    
  )
}

export default heroBuyNow