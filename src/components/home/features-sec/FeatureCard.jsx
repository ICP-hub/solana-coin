import React, { useState } from 'react'

const FeatureCard = ({text,data}) => {
  const [mouseIn,setMouseIn]=useState(false)
  return (
    <div className='feature-card' onMouseEnter={()=>setMouseIn(true)} onMouseLeave={()=>setMouseIn(false)}>
        <div className={mouseIn?"feature-card-cd feature-card-cd-pos2":"feature-card-cd feature-card-cd-pos1"}/>
        <div className={mouseIn?"feature-card-cl feature-card-cl-pos2":"feature-card-cl feature-card-cl-pos1"}/>
        {
            mouseIn?
            <p className="feature-card-data">
              {data}
            </p>
            :
            text?.startsWith("No")?
            <p className="feature-card-text-short">{text}</p>:
            <p className="feature-card-text">{text}</p>
        }
        
    </div>
  )
}

export default FeatureCard