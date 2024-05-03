import React from 'react'
import './reusable.css'

const Title = ({title}) => {
  return (
    <div className='sec-title'>
        <div className="sec-title-line top-11 md:top-4 lg:top-6"/>
        <p className="sec-title-text">{title}</p>
        <div className="sec-title-line bottom-11 md:bottom-4 lg::bottom-6"/>
    </div>
  )
}

export default Title