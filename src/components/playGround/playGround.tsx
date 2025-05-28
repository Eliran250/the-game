import { FaArrowLeft, FaPause } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./playGroundStyle.scss"
import Bird from "../character/Bird";
import Qbstacle from "../qabstacle/Qbstacle";
import { useEffect, useState } from "react";
import { isCollision } from "../../utils/collision";
import LostPopup from "../popup/LostPopup";

const PlayGround = () => {

    const [position, setPosition] = useState<number>(1);

    const [height, setHeight] = useState<number>(200);

    const [isGameOver, setIsGameOver] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (isCollision(position, height)) {
            setIsGameOver(true)
        }
    }, [position, height]);

    return (
        <>
            <div className="playGround-container">
                <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
                <FaPause className="pause-icon" />
                <Bird height={height} setHeight={setHeight} isGameOver={isGameOver}/>
                <Qbstacle position={position} setPosition={setPosition} />
                {isGameOver && <LostPopup />}
            </div>
        </>
    )
}

export default PlayGround