import { FaArrowLeft, FaPause } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./playGroundStyle.scss"
import Bird from "../character/Bird";
import Qbstacle from "../qabstacle/Qbstacle";
import { useState } from "react";

const PlayGround = () => {

    const [position, setPosition] = useState<number>(1);

    const [height, setHeight] = useState<number>(200);


    const navigate = useNavigate();

    return (
        <>
            <div className="playGround-container">
                <FaArrowLeft className="back-icon" onClick={() => navigate('/')}/>
                <FaPause className="pause-icon"/>
                <Bird height = {height} setHeight ={setHeight}/>
                <Qbstacle position = {position} setPosition ={setPosition}/>
            </div>
        </>
    )
}

export default PlayGround