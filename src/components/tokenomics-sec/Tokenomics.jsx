import React from 'react'
import './tokenomics.css'
import Title from '../re-usables/Title'
// import Chart from "chart.js/auto";
// import { Doughnut } from 'react-chartjs-2';
// import {AgChartsReact} from 'ag-charts-react'
import Chart from 'react-apexcharts'

let chartColors=[
  "#546FE5",
  "#7DB9F0",
  "#80EABC",
  "#67B06D",
  "#B639D7",
  "#8057E8"
  ]

const Tokenomics = () => {
  return (
    <div className='token-sec' id='token'>
      <Title title={"TOKENOMICS"}/>
      <div className="token-chart-cont">
        <div className="token-chart">
          {/* <Doughnut 
            data={{
              datasets:[{
                data:[21,19,5,35,8,12],
                weight:20,
                
              }
            ],
              labels:["a","b","c","d","e"],
              
              
              
            }
    
          
          }
          options={
            legen
          }
            
          />           */}
          <Chart 
            type={"donut"}
            width={500}
            
            height={500}
            series={[12,24,35,12,23,1]}

            options={
              {
                
              colors:chartColors,
              legend:{
                show:false
              },
              labels:[],
              dataLabels:{
                enabled:false
              },
              plotOptions:{
                pie:{
                  donut:{
                    labels:{
                      show:false,
                    },
                    
                  }
                }
              }
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