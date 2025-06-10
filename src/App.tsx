import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style/appStyle.scss'
import Home from './components/home/Home'
import About from './components/about/About'
import PlayGround from './components/playGround/PlayGround'
import GameMusic from './components/sound/GameMusic'
import { GameProvider } from './context/GameProvider'

function App() {

  return (
    <>
    <GameProvider>
      <div className='app-container'>
        <GameMusic />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/game' element={<PlayGround />} />
          </Routes>
        </BrowserRouter>
      </div>
      </GameProvider>
    </>
  )
}

export default App
