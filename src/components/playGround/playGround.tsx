import { FaArrowLeft, FaPause } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./playGroundStyle.scss"
import Bird from "../character/Bird";
import Qbstacle from "../qabstacle/Qbstacle";

const PlayGround = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="playGround-container">
                <FaArrowLeft className="back-icon" onClick={() => navigate('/')}/>
                <FaPause className="pause-icon"/>
                <Bird/>
                <Qbstacle/>
            </div>
        </>
    )
}

export default PlayGround