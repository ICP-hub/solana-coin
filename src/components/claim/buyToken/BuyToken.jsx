import React, { useCallback, useState } from 'react'
import './buyToken.css'
import ReactModal from 'react-modal'
import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, clusterApiUrl } from '@solana/web3.js'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { WalletNotConnectedError } from '@solana/wallet-adapter-base'
import { IoMdCloseCircleOutline } from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast'

const BuyToken = ({buyModal,setBuyModal}) => {
    const receiver="AtgWtKg8t8W8j3QHLBTxPW68BhPTRQ3BnZDiWJQLcK9"
    const connection = new Connection(clusterApiUrl("devnet"))
    const { publicKey, sendTransaction,connected } = useWallet();
    // const {connection}=useConnection()
    const [amount,setAmount]=useState(0)
    const [err,setErr]=useState("")

    const buy=useCallback(async()=>{
        console.log(connection)
        console.log(publicKey,connected)
        try{
        connection.getBalance(publicKey).then((bal) => {
            console.log(bal/LAMPORTS_PER_SOL);

        });

        let lamportsI = LAMPORTS_PER_SOL*amount;
        console.log(publicKey?.toBase58());
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: new PublicKey(receiver),
                lamports: lamportsI,
            })
        );

        const signature = await sendTransaction(transaction, connection);

        await connection.confirmTransaction(signature, 'processed').then((res)=>{
            console.log(res)
            setBuyModal(false)
            toast.success('Successfully transferred, you will receive your coins in 48 hours')
        }).catch((err)=>{
            console.log(err)
            setErr(err)
        })
    }catch(e){
        console.log(e)
        setErr('SOmething went wrong while sending transaction!')
    }
    },[connection,publicKey,sendTransaction])

  return (
    <ReactModal
        isOpen={buyModal}
        className='buy-modal'
        ariaHideApp={false}
        style={{ 
            overlay: { backdropFilter: 'blur(5px)' , zIndex:50, backgroundColor:'rbg(0,0,0,0%)'}, 
        }}
    >
        <IoMdCloseCircleOutline className='buy-wallet-close' onClick={()=>{
            setBuyModal(false)
            setErr('')
        }}/>
        <h1 className="buy-modal-title">Buy ICHuaHua</h1>
        <h3 className="buy-modal-title2">1 SOL = 10,000 IChuahua</h3>
        <input 
            type="text" 
            name="SOL input" 
            id="buy-modal-amount" 
            onChange={(e)=>setAmount(parseFloat(e.target.value))}
            // value={amount}
        />
        <p className="but-modal-text text-red-700">
            {err}
        </p>
        <button className='buy-modal-confirm-btn' onClick={buy}>Confirm transaction</button>
        <p className="buy-modal-text">
            If you are unable to buy from here , just send your SOl to <p className='font-extrabold'>{receiver}</p>
        </p>    
        {/* <Toaster/> */}
    </ReactModal>
  )
}

export default BuyToken