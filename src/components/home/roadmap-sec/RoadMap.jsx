import React from 'react'
import './roadmap.css'
import Title from '../re-usables/Title'
import RoadmapCard from './RoadmapCard'


const roadmapList=[
  {
    title:"Q1 2024",
    data:"The future is unwritten, and the path uncharted. With the  community at the helm, $SOLHuaHua is poised for a journey of spontaneous adventures,  boundless possibilities, and meme magic."
  },
  {
    title:"Q2 2024",
    subtext:"& Beyond",
    data:"Thegenesis of $SOLHuahua- Smart contract deployment, website launch, and  the building of a social media empire."
  }
]

const RoadMap = () => {
  return (
    <div className='roadmap-sec' id='roadmap'>
      <Title title={"ROADMAP"}/>
      <div className="roadmap-text-cont">
        <p className="roadmap-text"> The Path Ahead</p>
      </div>
      <div className="roadmap-line-cont">
        <div className="roadmap-node-cont">
          <div className="roadmap-node-circle"/>
          <div className="roadmap-node-line"/>
        </div>
        <div className="roadmap-line"/>
        <div className="roadmap-rev-node-cont">
          <div className="roadmap-node-line"/>
          <div className="roadmap-node-circle"/>
        </div>
        <div className="roadmap-line"/>
        <div className="roadmap-node-cont">
          <div className="roadmap-node-circle"/>
          <div className="roadmap-node-line"/>
        </div>
      </div>
      <div className="roadmap-card-cont">
        <RoadmapCard text={roadmapList[0].title} data={roadmapList[0].data}/>
        <RoadmapCard text={roadmapList[1].title} subtext={roadmapList[1].subtext} data={roadmapList[1].data}/>
        <img src="roadmap2.png" alt="dog playing with token" className="roadmap-img" />
      </div>
    </div>
  )
}

export default RoadMap