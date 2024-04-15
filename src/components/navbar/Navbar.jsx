import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className="nav-title">ICHuaHua</h1>
      <div className="nav-link-cont">
        <a href="/" className="nav-link">Home</a>
        <a href="#token" className="nav-link">Tokenomics</a>
        <a href="#features" className="nav-link">Features</a>
        <a href="#roadmap" className="nav-link">Roadmap</a>
      </div>
      <button className="nav-claim-btn">CLAIM</button>
    </div>
  )
}

export default Navbar