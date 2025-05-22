import { useNavigate } from "react-router-dom"
import "./homeStyle.scss"

const Home = () => {

const navigate = useNavigate();

  return (
    <>
      <div className="home-container">
      <h1 className="home-title">Flapyy bird</h1>
      <div className="button-container">
        <button onClick={()=>navigate('/game')} className="button-home">Play</button>
        <button onClick={()=>navigate('/settings')} className="button-home">Settings</button>
        <button onClick={()=>navigate('/about')} className="button-home">About</button>
      </div>
      </div>
    </>
  )
}

export default Home