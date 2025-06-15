import "./playerStyle.scss"
import { getPlayerImage } from "../../utils/getPlayerImage"
import { useGame } from "../../context/GameProvider";
import type { IPlayer } from "../../types/interfaces/IPlayer";
import { forwardRef } from "react";

const Player = forwardRef<HTMLImageElement, IPlayer>((props, ref) => {  
    const { isMovingRight, jumpFrameIndex, isAttacking, isJumping, isMovingLeft, height, position, jumpFrames } = props;

    const { isGameOver } = useGame();

    const imageSrc = getPlayerImage({
        isJumping,
        isMovingLeft,
        isMovingRight,
        isAttacking,
        jumpFrames,
        jumpFrameIndex,
    });

    return (
        <div >
            {!isGameOver ? <img ref={ref} className="player-img" style={{ bottom: `${height}px`, left: `${position}px` }} src={imageSrc} /> : <div className="explosion" style={{ bottom: `${height}px`, left:`${position}px` }}>
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="particle" />
                ))}
            </div>}
        </div>
    )
});

export default Player