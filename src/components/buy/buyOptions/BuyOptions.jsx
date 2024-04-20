import React from 'react'
import './buyOptions.css'

const options=[
    "dex-logos/gate.png",
    "dex-logos/bitget.png",
    "dex-logos/mexc.png",
    "dex-logos/bitmart.png",
    "dex-logos/xt.png",
    "dex-logos/bingx.png"
]

const BuyOptions = () => {
  return (
    <div className='buy-opt-cont'>
        <h1 className="buy-title">Catch Available On:</h1>
        <h2 className="buy-title-light">Initial CEXS</h2>
        <div className="buy-btn-cont">
            {
                options.map((opt)=>(
                    <button className="buy-opt-btn">
                        <img src={opt} alt="dex" className="buy-opt-icon" />
                    </button>
                ))
            }
        </div>
    </div>
  )
}

export default BuyOptions