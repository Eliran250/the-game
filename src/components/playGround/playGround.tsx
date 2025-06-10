import { FaArrowLeft, FaPause, FaMusic } from "react-icons/fa";
import { TbMusicOff } from "react-icons/tb";
import { BsMusicNote } from "react-icons/bs";
import { MdOutlineMusicOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./playGroundStyle.scss"
import { useEffect, useState } from "react";
import LostPopup from "../popup/LostPopup";
import { gameOverSoundPlay } from "../../utils/sound";
import { useGame } from "../../context/GameProvider";
import Player from "../player/Player";

const PlayGround = () => {

    const { setPlayGameMusic, playGameMusic, setPlayGameSound, playGameSound } = useGame()

    const [position, setPosition] = useState<number>(160);

    const [height, setHeight] = useState<number>(90);

    const [isGameOver, setIsGameOver] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        // if (isCollision(position, height)) {
        //     setIsGameOver(true)
        //     gameOverSoundPlay()
        // }
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
                <Player height={height} setHeight={setHeight} isGameOver={isGameOver} setPosition={setPosition} position={position} />
                {isGameOver && <LostPopup />}
            </div>
        </>
    )
}

export default PlayGround