import { useEffect, useState } from "react"
import building from "../../assets/building.png"
import "./qbstacleStyle.scss"
const Qbstacle = () => {

    const [position, setPositon] = useState<number>(1);

    const comePix: number = 1;

    const handlePostion = () => {
        setPositon((prev) => {
            const newPostion = prev + comePix;
            return newPostion > 101 ? 0 : newPostion
        })

    }

    useEffect(() => {
        const interval = setInterval(() => {
            handlePostion();
        }, 800)
        return () => clearInterval(interval);
    }, [])


    return (
        <div>
            <div className="qbstacle-container">
                <img className="qbstacle-top" src={building} alt="" style={{ right: `${position}%`}} />
                <img className="qbstacle-bottom" src={building} alt="" style={{ right: `${position}%`}} />
            </div>
        </div>
    )
}

export default Qbstacle