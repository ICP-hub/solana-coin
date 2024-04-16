import React from 'react'
import './tokenomics.css'
import Title from '../re-usables/Title'

const Tokenomics = () => {
  return (
    <div className='token-sec' id='token'>
      <Title title={"TOKENOMICS"}/>
      <div className="token-chart-cont">
        <div className="token-chart"></div>
        <div className="token-chart-text-cont">
          <p className="token-chart-text">The Blueprint of Success</p>
        </div>
      </div>
    </div>
  )
}

export default Tokenomics