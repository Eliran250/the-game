import { useEffect } from "react"
import "./birdStyle.scss"
import birdGame from "../../assets/birdGame.png"
import { BIRD_INTERVAL, GRAVITY_PIX, JUMP_HEIGHT } from "../../constants/constants";
import { jumpSoundPlay } from "../../utils/sound";
import { useGame } from "../../context/GameProvider";
const Bird = ({height,setHeight,isGameOver}:{height:number,setHeight:React.Dispatch<React.SetStateAction<number>>,isGameOver:boolean}) => {

  const { playGameSound } = useGame();

    useEffect(() => {
        const interval = setInterval(() => {
            setHeight((prev) => {
                const newHeight = prev + GRAVITY_PIX;
                return newHeight > 620 ? 620 : newHeight;
            });
        }, BIRD_INTERVAL)
        return () => clearInterval(interval);
    }, [])


    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === "Space" || e.code === "KeyW") {
                setHeight((prev) => {
                    const newHeight = prev - JUMP_HEIGHT;
                    return newHeight < 0 ? 0 : newHeight;
                });
                if (playGameSound) {
                    jumpSoundPlay();
                }
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [playGameSound]);

    return (
        <div>
            <div className="bird-continer">
                {!isGameOver ? <img className="bird-img" style={{ top: `${height}px` }} src={birdGame} alt="bird" /> : <div className="explosion" style={{ top: `${height}px` }}>
          {[...Array(10)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>}
                
            </div>
        </div>
    )
}

export default Bird