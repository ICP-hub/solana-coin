import React, { useState } from 'react'

const RoadmapCard = ({text, subtext, data}) => {
  const [mouseIn,setMouseIn]=useState(false)
  return (
    <div 
      className='roadmap-card' 
      onMouseEnter={()=>setMouseIn(true)} 
      onMouseLeave={()=>setMouseIn(false)}
    >
      {
        mouseIn?
        <>
        <div className="roadmap-card-text -scale-x-100">
          {text}
        </div>
        <div className="roadmap-card-data">
          {data}
        </div>
        </>
        :
        subtext?
        <>
          <div className="roadmap-card-text">
            {text}
          </div>
          <div className="roadmap-card-subtext">
            {subtext}
          </div>
          <div className="roadmap-card-c1"/>
          <div className="roadmap-card-c2"/>
        </>
        :
        <>
          <div className="roadmap-card-text">
            {text}
          </div>
          <div className="roadmap-card-c1"/>
          <div className="roadmap-card-c2"/>
        </> 
      }
    </div>
  )
}

export default RoadmapCard