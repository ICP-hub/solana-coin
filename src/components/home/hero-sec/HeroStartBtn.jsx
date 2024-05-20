import React, { useEffect, useState } from 'react'
import ReactCurvedText from 'react-curved-text'

const HeroStartBtn = () => {
    const str=" Click to start the animation concept . Click to start the animation concept "
    const [hover,setHover]=useState(false)
  return (
    <div className='hero-start-div'>
        <p className="hero-start-text">
            SOLHuaHua's Crypto Adventure: A Tale of Grit and Wit
        </p>
        <div className={hover?"hero-start-btn-cont rotate":"hero-start-btn-cont"} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <ReactCurvedText
                width={190}
                height={190}
                cx={95}
                cy={95}
                rx={90}
                ry={90}
                startOffset={50}
                reversed={false}
                text={str}
                className="hero-circle-text"
                textProps={{
                    style:{
                        fontSize:14,
                    }
                }}
                textPathProps={{
                    style:{
                        fill:'white',
                        opacity:0.7,
                        
                    }
                }}
                tspanProps={null}
                ellipseProps={null}
                svgProps={null}
                />
                <button className={hover?"hero-start-btn unrotate":"hero-start-btn"}>
                    START
                </button>
        </div>
    </div>
  )
}

export default HeroStartBtn