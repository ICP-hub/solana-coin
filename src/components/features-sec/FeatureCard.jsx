import React from 'react'

const FeatureCard = ({text}) => {
  return (
    <div className='feature-card'>
        <div className="feature-card-cd"/>
        <div className="feature-card-cl"/>
        {
            text.startsWith("No")?
            <p className="feature-card-text-short">{text}</p>:
            <p className="feature-card-text">{text}</p>
        }
        
    </div>
  )
}

export default FeatureCard