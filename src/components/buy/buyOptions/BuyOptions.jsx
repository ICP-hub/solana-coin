import React from 'react'
import './buyOptions.css'

const options=[
    {
        icon:<></>,
        text:""
    },
    {
        icon:<></>,
        text:""
    },
    {
        icon:<></>,
        text:""
    },
    {
        icon:<></>,
        text:""
    },
    {
        icon:<></>,
        text:""
    },
    {
        icon:<></>,
        text:""
    }
]

const BuyOptions = () => {
  return (
    <div className='buy-opt-cont'>
        <h1 className="buy-title"></h1>
        <h2 className="buy-title-light"></h2>
        <div className="buy-btn-cont">
            {
                options.map((opt)=>(
                    <div className="buy-opt-btn">
                        {icon}
                        <p className="buy-opt-text"></p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default BuyOptions