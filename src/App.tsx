import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style/appStyle.scss'
import Home from './components/home/Home'
import About from './components/about/About'
import PlayGround from './components/playGround/playGround'

function App() {

  return (
    <>
      <div className='app-container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/game' element={<PlayGround />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
