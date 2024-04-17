import React from 'react'
import './tokenomics.css'
import Title from '../re-usables/Title'
import Chart from "chart.js/auto";
import { Doughnut } from 'react-chartjs-2';

const Tokenomics = () => {
  return (
    <div className='token-sec' id='token'>
      <Title title={"TOKENOMICS"}/>
      <div className="token-chart-cont">
        <div className="token-chart">
          <Doughnut 
            data={{
              datasets:[{
                data:[21,19,5,35,8,12],
                weight:20,
                
              }
            ],
              labels:["a","b","c","d","e"],
            }}
          />          
        </div>
        <div className="token-chart-text-cont">
          <p className="token-chart-text">The Blueprint of Success</p>
        </div>
      </div>
    </div>
  )
}

export default Tokenomics