import React from 'react'
import './roadmap.css'
import Title from '../re-usables/Title'
import RoadmapCard from './RoadmapCard'


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
        <RoadmapCard text={"Q1 2024"}/>
        <RoadmapCard text={"Q2 2024"} subtext={"& Beyond"}/>
      </div>
    </div>
  )
}

export default RoadMap