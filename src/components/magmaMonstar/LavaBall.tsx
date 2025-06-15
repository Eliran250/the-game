import { useEffect, useRef, useState } from "react"
import "./lavaBallStyle.scss"
import { useGame } from "../../context/GameProvider";
import { collosion } from "../../utils/collosion";
import type { ILavaBall } from "../../types/interfaces/ILavaBall";

const LavaBall = ({ playerPosition, magmaMonstarPosition }: ILavaBall) => {

    const { setHealth } = useGame();

    const [position, setPosition] = useState<number>(magmaMonstarPosition);

    const lavaBallRef = useRef<HTMLImageElement>(null);
    
    const directionRef = useRef<1 | -1>(
        playerPosition > magmaMonstarPosition ? 1 : -1
    );

    useEffect(() => {
        const lavaBall = document.querySelector('.lava-ball') as HTMLImageElement;
        const player = document.querySelector('.player-img') as HTMLImageElement;
        const interval = setInterval(() => {
            collosion(player, lavaBall, setHealth, -20);
        }, 100);
        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        const speed = 10;
        const interval = setInterval(() => {
            setPosition(prev => prev + directionRef.current * speed)
        }, 30);
        return () => clearInterval(interval);
    }, [])

    return (
        <div>
            <div ref={lavaBallRef} style={{ left: `${position}px` }} className='lava-ball'></div>
        </div>
    )
}

export default LavaBall