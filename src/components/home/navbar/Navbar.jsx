import React from 'react'
import './navbar.css'

const Navbar = ({nav}) => {
  return (
    <div className='navbar'>
      <div className="nav-title-cont">
        <h1 className="nav-title" onClick={()=>nav('/')} >SOLHuaHua</h1>
        <div className="nav-cursor"/>
      </div>      
      <div className="nav-link-cont">
        <p className="nav-link" onClick={()=>nav('/')}>Home</p>
        <a className="nav-link" href="/#token" onClick={()=>nav('/#token')}>Tokenomics</a>
        <a className="nav-link" href="/#features" onClick={()=>nav('/#features')}>Features</a>
        <a className="nav-link" href="/#roadmap" onClick={()=>nav('/#roadmap')}>Roadmap</a>
      </div>
      <button className="nav-claim-btn" onClick={()=>nav('/claim')}>CLAIM</button>
    </div>
  )
}

export default Navbar