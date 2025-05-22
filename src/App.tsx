import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style/appStyle.scss'
import Home from './components/home/Home'
import About from './components/about/About'

function App() {

  return (
    <>
    <div className='app-container'>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
     </BrowserRouter>
    </div>
    </>
  )
}

export default App
