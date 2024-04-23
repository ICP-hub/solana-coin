import React from 'react'
import './buyToken.css'
import ReactModal from 'react-modal'
import { Connection, clusterApiUrl } from '@solana/web3.js'
import { useWallet } from '@solana/wallet-adapter-react'

const BuyToken = ({buyModal,setBuyModal}) => {
    const receiver="AtgWtKg8t8W8j3QHLBTxPW68BhPTRQ3BnZDiWJQLcK9"
    const connection = new Connection(clusterApiUrl("devnet"))
    const { publicKey, sendTransaction } = useWallet();

    const buy=async()=>{
        
    }

  return (
    <ReactModal
        isOpen={buyModal}
        className='buy-modal'
        ariaHideApp={false}
        style={{ 
            overlay: { backdropFilter: 'blur(5px)' , zIndex:50, backgroundColor:'rbg(0,0,0,0%)'}, 
        }}
    >
        <h1 className="buy-modal-title">buy your wallet</h1>
        <div className="buy-options-cont">
            <div className="buy-option">
                <img src="phantomLogo.png" alt="phantom wallet" className="buy-option-icon" />
                <h4 className="buy-option-text">Phantom</h4>    
            </div>
            <div className="buy-option">
                <img src="solflareLogo.png" alt="solflare wallet" className="buy-option-icon" />
                <h4 className="buy-option-text">Solflare</h4>    
            </div>
        </div>      
        <p className="buy-modal-text">
            If you are unable to buy your wallet , just send your SOl to <p className='font-extrabold'>{receiver}</p>
        </p>    
    </ReactModal>
  )
}

export default BuyToken