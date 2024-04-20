import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";
import './scrollToTop.css'

const ScrollToTop = () => {
    const [visible,setVisible]=useState(false)
    const handleScroll=()=>{
        if(window.pageYOffset>0){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }
    const scroll=()=>{
        window.scrollTo(0,0)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  if(visible){
    return(
        <button className='scroll-cont' onClick={scroll}>
            <IoIosArrowRoundUp className='scroll-icon'/>
        </button>
    )
  }else{
    return <></>
  }
}

export default ScrollToTop