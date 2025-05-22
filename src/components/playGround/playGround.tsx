import { FaArrowLeft, FaPause } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./playGroundStyle.scss"
import Bird from "../character/bird";

const PlayGround = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="playGround-container">
                <FaArrowLeft className="back-icon" onClick={() => navigate('/')}/>
                <FaPause className="pause-icon"/>
                <Bird/>
            </div>
        </>
    )
}

export default PlayGround