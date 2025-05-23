import { useEffect, useState } from "react"
import vine2 from "../../assets/vine2.png"
import "./qbstacleStyle.scss"
import { QBSTACLE_INTERVAL, QBSTACLE_MOVEMENT } from "../../constants/constants";
const Qbstacle = () => {

    const [position, setPositon] = useState<number>(1);

    const handlePostion = () => {
        setPositon((prev) => {
            const newPostion = prev + QBSTACLE_MOVEMENT;
            return newPostion > 101 ? 0 : newPostion
        })

    }

    useEffect(() => {
        const interval = setInterval(() => {
            handlePostion();
        }, QBSTACLE_INTERVAL)
        return () => clearInterval(interval);
    }, [])

    return (
        <div>
            <div className="qbstacle-container">
                <img className="qbstacle-top" src={vine2} alt="" style={{ right: `${position}%`}} />
            </div>
        </div>
    )
}

export default Qbstacle