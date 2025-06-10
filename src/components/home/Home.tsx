import { useNavigate } from "react-router-dom"
import "./homeStyle.scss"
import { useGame } from "../../context/GameProvider";

const Home = () => {

  const { setPlayGameMusic } = useGame();

  const navigate = useNavigate();

  return (
    <>
     <div className="home-background"></div> 
      <div className="home-container">
        <h1 className="home-title">Ben fight</h1>
        <div className="button-container">
          <button onClick={() => { navigate('/game'),setPlayGameMusic(true)}} className="button-home">Play</button>
          <button onClick={() => navigate('/settings')} className="button-home">Settings</button>
          <button onClick={() => navigate('/about')} className="button-home">About</button>
        </div>
      </div>
    </>
  )
}

export default Home