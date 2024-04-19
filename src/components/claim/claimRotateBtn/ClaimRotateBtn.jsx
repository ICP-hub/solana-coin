import React, { useEffect, useState } from 'react'
import ReactCurvedText from 'react-curved-text'
import './claimRotateBtn.css'

const CLaimRotateBtn = () => {
    const str=" Click to start the animation concept . Click to start the animation concept "
    const [hover,setHover]=useState(false)
  return (
        <div className="claim-rotate-btn-cont rotate" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
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
                className="claim-circle-text"
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
                <button className="claim-rotate-btn unrotate">
                    CLAIM
                </button>
        </div>
  )
}

export default CLaimRotateBtn