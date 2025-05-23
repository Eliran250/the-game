import { useEffect, useState } from "react"
import "./birdStyle.scss"
import birdGame from "../../assets/birdGame.png"
const Bird = () => {

    const [height, setHeight] = useState<number>(200);

    const gravityPix = 2; // כמה פיקסלים לרדת בכל שלב

    const jumpHeight = 50; // כמה פיקסלים לקפוץ כשמקש נלחץ

    useEffect(() => {
        const interval = setInterval(() => {
            setHeight((prev) => {
                    const newHeight = prev + gravityPix;
                    return newHeight > 620 ? 620 : newHeight;
                });
        }, 30)
        return () => clearInterval(interval);
    }, [])


    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === "Space" || e.code === "KeyW") {
                setHeight((prev) => {
                    const newHeight = prev - jumpHeight;
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
                <img className="bird-img" style={{position: 'absolute', top: `${height}px`, left: '20%', transform: 'translateX(-50%)' }} src={birdGame} alt="bird" />
            </div>
        </div>
    )
}

export default Bird