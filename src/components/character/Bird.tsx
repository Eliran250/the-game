import { useEffect, useState } from "react"
import "./birdStyle.scss"
import birdGame from "../../assets/birdGame.png"
import { BIRD_INTERVAL, GRAVITY_PIX, JUMP_HEIGHT } from "../../constants/constants";
const Bird = () => {

    const [height, setHeight] = useState<number>(200);

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
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div>
            <div className="bird-continer">
                <img className="bird-img" style={{ top: `${height}px` }} src={birdGame} alt="bird" />
            </div>
        </div>
    )
}

export default Bird