import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import HeroStartBtn from './components/home/hero-sec/HeroStartBtn'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Buy from './pages/Buy'
import Claim from './pages/Claim'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/buy' element={<Buy/>}/>
          <Route path='/claim' element={<Claim/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
