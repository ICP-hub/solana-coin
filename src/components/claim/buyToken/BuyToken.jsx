import React, { useCallback, useState } from 'react'
import './buyToken.css'
import ReactModal from 'react-modal'
import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, clusterApiUrl } from '@solana/web3.js'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { WalletNotConnectedError } from '@solana/wallet-adapter-base'
import { IoMdCloseCircleOutline } from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast'
import { getOrCreateAssociatedTokenAccount, mintTo } from '@solana/spl-token'
import { secret_key } from '../../../../secret'

const BuyToken = ({buyModal,setBuyModal,loading,setLoading}) => {
    const receiver=import.meta.env.VITE_RECEIVER_WALLET_ADDRESS
    // const connection = new Connection(clusterApiUrl("devnet"))
    const { publicKey, sendTransaction,connected } = useWallet();
    const {connection}=useConnection()
    const [amount,setAmount]=useState(0)
    const [err,setErr]=useState("")

    async function mintNewTokens(amount){
        try {
            // console.log(import.meta.env.VITE_MINTING_AUTHORITY_KEY)
            // setLoading(true)
            let secret=secret_key
            console.log(secret)
            const fromWallet=Keypair.fromSecretKey(
                Uint8Array.from(secret)
            )
            const mintPublicKey=new PublicKey(import.meta.env.VITE_TOKEN_ID)
            const toPublicKey=new PublicKey(receiver)
            const toTokenAccount = await getOrCreateAssociatedTokenAccount(
                connection,
                fromWallet,
                mintPublicKey,
                toPublicKey
              );
              
              const signature = await mintTo(
                connection,
                fromWallet,
                mintPublicKey,
                toTokenAccount.address,
                fromWallet.publicKey,
                10000*amount
              );
              console.log(`Mint signature ${signature}`);
              setLoading(false)
              alert(`Minting successful, check the transaction on Solana explorer : \n${signature}`)


        } catch (error) {
            console.log(error)
            alert(error)
            setLoading(false)
        }
        
    }

    const buy=useCallback(async()=>{
        setLoading(true)
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
        let latestBlockHash=await connection.getLatestBlockhash()

        const signature = await sendTransaction(transaction, connection);

        await connection.confirmTransaction(
              {
                blockhash:latestBlockHash.blockhash,
                lastValidBlockHeight:latestBlockHash.lastValidBlockHeight,
                signature
              }
            ).then((res)=>{
                console.log(res)
                setBuyModal(false)
                toast.success('Successfully transferred SOL, you will receive your tokens shortly')
                mintNewTokens(amount)
        }).catch((err)=>{
            console.log(err)
            alert(err)
            setLoading(false)
        })
    }catch(e){
        console.log(e)
        setErr('Something went wrong while sending transaction!')
        setLoading(false)
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
            {err.toString()}
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