import { useNavigate } from "react-router-dom";
import "./lostPopupStyle.scss"
const LostPopup = () => {

  const navigate = useNavigate();

  const reastartGame = () =>{
      window.location.reload();
  }

  return (
    <>
      <div className="popup-container">
        <dialog open>
          <h1 className="title-popup">You lost</h1>
          <p className="details">You lost, do you wish to play again ?</p>
          <div className="controler">
            <button onClick={() => navigate('/')} className="popup-button">Manu</button>
            <button onClick={()=>reastartGame()} className="popup-button">Back to  the game</button>
          </div>
        </dialog>
      </div>
    </>
  )
}

export default LostPopup