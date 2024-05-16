import React, { useState } from 'react'
import './connectWallet.css'
import ReactModal from 'react-modal'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { } from '@solana/wallet-adapter-react-ui'

const ConnectWallet = ({modalOpen,setModalOpen,setBuyModal}) => {
    const receiver="AtgWtKg8t8W8j3QHLBTxPW68BhPTRQ3BnZDiWJQLcK9"
    const [err,setErr]=useState('')
    const {wallets,select,connect}=useWallet()
    const connectWallet=async(index)=>{        
        await wallets[index].adapter.connect().then((res)=>{
            console.log("connected")
            setModalOpen(false)
            setBuyModal(true)
        }).catch((e)=>{
            console.log(e)
            setErr(''+e)
        })
    }
    
  return (
    <ReactModal 
        isOpen={modalOpen}
        className='connect-modal'
        ariaHideApp={false}
        style={{ 
            overlay: { backdropFilter: 'blur(20px)' , zIndex:50, backgroundColor:'rbg(0,0,0,0%)'}, 
        }}
    >
        <div className='flex flex-col items-center'> 
        <h1 className="connect-modal-title">Connect your wallet</h1>
        <IoMdCloseCircleOutline className='connect-wallet-close' onClick={()=>{
            setModalOpen(false)
            setErr('')
        }}/>
        <div className="connect-options-cont">
            <div className="connect-option" onClick={()=>{
                select(wallets[0].adapter.name)
                setTimeout(()=>{connectWallet(0)},2000)
                
            }}>
                <img src="phantomLogo.png" alt="phantom wallet" className="connect-option-icon" />
                <h4 className="connect-option-text">Phantom</h4>    
            </div>
            <div className="connect-option" onClick={()=>{
                select(wallets[1].adapter.name)
                setTimeout(()=>{connectWallet(1)},2000)
            }}>
                <img src="solflareLogo.png" alt="solflare wallet" className="connect-option-icon" />
                <h4 className="connect-option-text">Solflare</h4>    
            </div>
        </div>  
        <p className="connect-modal-text text-red-700 text-center">
            {err}
        </p>

        
        <p className="connect-modal-text text-center ">
            If you are unable to connect your wallet , just send your SOl to <p className='font-extrabold text-xs '>{receiver}</p>   
        </p> 
        
        </div>

       
        
        
    </ReactModal>
  )
}

export default ConnectWallet