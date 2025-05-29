import { FaArrowLeft, FaPause, FaMusic } from "react-icons/fa";
import { TbMusicOff } from "react-icons/tb";
import { BsMusicNote } from "react-icons/bs";
import { MdOutlineMusicOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./playGroundStyle.scss"
import Bird from "../character/Bird";
import Qbstacle from "../qabstacle/Qbstacle";
import { useEffect, useState } from "react";
import { isCollision } from "../../utils/collision";
import LostPopup from "../popup/LostPopup";
import { gameOverSoundPlay } from "../../utils/sound";
import { useGame } from "../../context/GameProvider";

const PlayGround = () => {

    const { setPlayGameMusic, playGameMusic, setPlayGameSound, playGameSound } = useGame()

    const [position, setPosition] = useState<number>(1);

    const [height, setHeight] = useState<number>(200);

    const [isGameOver, setIsGameOver] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (isCollision(position, height)) {
            setIsGameOver(true)
            gameOverSoundPlay()
        }
    }, [position, height]);

    return (
        <>
            <div className="playGround-container">
                <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
                <FaPause className="pause-icon" />
                {playGameMusic ? <FaMusic className="music-icon" onClick={() => setPlayGameMusic(false)} /> :
                    <TbMusicOff className="music-icon" onClick={() => setPlayGameMusic(true)} />
                }
                {playGameSound ? <BsMusicNote className="sound-icon" onClick={() => setPlayGameSound(false)} /> :
                    <MdOutlineMusicOff className="sound-icon" onClick={() => setPlayGameSound(true)} />
                }
                <Bird height={height} setHeight={setHeight} isGameOver={isGameOver} />
                <Qbstacle position={position} setPosition={setPosition} />
                {isGameOver && <LostPopup />}
            </div>
        </>
    )
}

export default PlayGround