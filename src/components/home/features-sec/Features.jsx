import React from 'react'
import './features.css'
import Title from '../re-usables/Title'
import FeatureCard from './FeatureCard'

const featureList=[
  {
    text:"NoTaxes, NoBullshit",
    data:"SOLHuaHua is all about keeping it simple and straightforward.  No hidden fees, no sneaky taxes. Just like throwing a ball and chasing it, $SOLHuaHua is  simple and fun."
  },
  {
    text:"Community-Driven Meme Power- By the Pack, For the Pack",
    data:"This ain't just our  coin; it's yours. $SOLHuaHua thrives on community vibes. This is a coin for the people,  powered by the people."
  }
]

const Features = () => {
  return (
    <div className='feature-sec ' id='features'>
      <Title title={"KEY FEATURES"}/>
      <p className="feature-sec-text">
      Small, But Mighty- Straight Talk: No Tricks, Just Treats
      </p>
      <div className="feature-card-cont ">
        {
          featureList.map((feature)=>(
            <FeatureCard text={feature.text} data={feature.data}/>
          ))
        }
      </div>
    </div>
  )
}

export default Features