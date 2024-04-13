import React from 'react'
import './features.css'
import Title from '../re-usables/Title'
import FeatureCard from './FeatureCard'

const featureList=[
  "NoTaxes, NoBullshit",
  "Community-Driven Meme Power- By the Pack, For the Pack"
]

const Features = () => {
  return (
    <div className='feature-sec'>
      <Title title={"KEY FEATURES"}/>
      <p className="feature-sec-text">
      Small, But Mighty- Straight Talk: No Tricks, Just Treats
      </p>
      <div className="feature-card-cont">
        {
          featureList.map((feature)=>(
            <FeatureCard text={feature}/>
          ))
        }
      </div>
    </div>
  )
}

export default Features