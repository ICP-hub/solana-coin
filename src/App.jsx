import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import HeroStartBtn from './components/home/hero-sec/HeroStartBtn'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Buy from './pages/Buy'
import Claim from './pages/Claim'
import { WalletAdapterNetwork, WalletNotConnectedError } from '@solana/wallet-adapter-base'
import { ConnectionProvider, useConnection,WalletProvider, useWallet } from '@solana/wallet-adapter-react'
import { WalletModalProvider,WalletModalButton } from '@solana/wallet-adapter-react-ui'
import { clusterApiUrl } from '@solana/web3.js'
import { PhantomWalletAdapter,SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'


function App() {

  return (
    <Context>
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/buy' element={<Buy/>}/>
          <Route path='/claim' element={<Claim/>}/>
        </Routes>
      </Router>
    </div>
    </Context>
  )
}

export default App

const Context=({children})=>{
  const network=WalletAdapterNetwork.Devnet
  const endpoints=useMemo(()=>clusterApiUrl(network),[network])
  const wallets=useMemo(
    ()=>[
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({network})
    ],
    [network]
  )
  return(
    <ConnectionProvider endpoint={endpoints}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider children={children}/>
      </WalletProvider>
    </ConnectionProvider>
  )
}
