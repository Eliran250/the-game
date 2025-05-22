import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style/appStyle.scss'
import Home from './components/home/Home'

function App() {

  return (
    <>
    <div className='app-container'>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </div>
    </>
  )
}

export default App
