import React, { useEffect } from 'react'

const HeroStartBtn = () => {
    const str="Click to start the animation concept . Click to start the animation concept"
    // window.onload=()=>{
    //     let text=document.querySelector("#circle-text")
    //     for (let i = 0; i < str.length; i++) {
    //         const element = array[i];
    //         let span=document.createElement("span")
    //         span.innerHTML=str[i]
    //         span.className="circle-span"
    //         text.appendChild(span)
    //         span.style.transform=`rotate(${11*i}deg)`
    //     }
    // }
    // useEffect(()=>{
    //     let text=document.querySelector("#circle-text")
    //     text.innerHTML = text.innerText
    //         .split("")
    //         .map(
    //             (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
    //         )
    //         .join("");
    // })

  return (
    <div className='hero-start-div'>
        <p className="hero-start-text">
            ICHuaHua's Crypto Adventure: A Tale of Grit and Wit
        </p>
        <div className="hero-start-btn">
            <p id='circle-text'>
                {/* {str} */}
            </p>
        </div>
    </div>
  )
}

export default HeroStartBtn