import { getOrCreateAssociatedTokenAccount, mintTo } from '@solana/spl-token';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import React, { useCallback, useState } from 'react'
import ConnectWallet from '../../claim/connectWallet/ConnectWallet';
import toast, { Toaster } from 'react-hot-toast';
import BuyToken from '../../claim/buyToken/BuyToken';

const heroBuyNow = ({nav,loading,setLoading}) => {
    const [walletAddress, setAddress]=useState(import.meta.env.VITE_RECEIVER_WALLET_ADDRESS);
    const [amount,setAmount]=useState(0)
    const [modalOpen,setModalOpen]=useState(false)
    const [buyModal,setBuyModal]=useState(false)
    // const [loading,setLoading]=useState(false)

    const receiver=import.meta.env.VITE_RECEIVER_WALLET_ADDRESS
    // const connection = new Connection(clusterApiUrl("devnet"))
    const { publicKey, sendTransaction,connected } = useWallet();
    const {connection}=useConnection()
    const [err,setErr]=useState("")
    const token_decimals=1000000000


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
              10000*amount*token_decimals
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
      console.log('buffer : ',Buffer.from([1,21,2,3]))
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
              // setBuyModal(false)
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
    <div className='hero-buyNow-cont'>
        <h1 className=' hero-BuyNow-heading'>Buy Now before launch!**</h1>

        <h1 className='hero-BuyNow-heading2'> 1SOL = 10,000 $SOLhuahua</h1>

        <section className='hero-buyNow-Details-cont'>
           <h3>Current Raise </h3>
           <h2> $1,153,944</h2>
           <div className='AirdropToken-Cont'>
              <input className='sol-input' type='text' onChange={(e)=>{
                if(e.target.value==null){
                  setAmount(0)
                }else{
                  setAmount(parseFloat(e.target.value))
                }
              }
            }/>
           </div>
            <button 
              className="nav-buy-btn" 
              // onClick={()=>nav('/buy')}
              onClick={()=>setModalOpen(true)}
            > 
                Buy Now!* 
            </button>
        </section>
        <div className=' hero-buyNow-Footer-cont '>
              <h1>*Can also send SOL to {walletAddress} </h1>
              {/* <h1>**Then Wait for <del>Moon</del> Airdrop </h1> */}
        </div>
        <ConnectWallet modalOpen={modalOpen} setModalOpen={setModalOpen} setBuyModal={setBuyModal} />
        <BuyToken buyModal={buyModal} setBuyModal={setBuyModal} loading={loading} setLoading={setLoading}/>
        <Toaster/>
    </div>
    
  )
}

export default heroBuyNow