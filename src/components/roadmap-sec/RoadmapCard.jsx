import React from 'react'

const RoadmapCard = ({text, subtext}) => {
  return (
    <div className='roadmap-card'>
      <div className="roadmap-card-text">
        {text}
      </div>
      {
        subtext?
        <div className="roadmap-card-subtext">
          {subtext}
        </div>
        :
        <></>
      }
      
      <div className="roadmap-card-c1"/>
      <div className="roadmap-card-c2"/>
    </div>
  )
}

export default RoadmapCard