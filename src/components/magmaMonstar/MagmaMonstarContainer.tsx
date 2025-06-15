import { forwardRef, useEffect, useState } from 'react'
import type { IMagmaMonstar } from '../../types/interfaces/IMagmaMonstarContainer';
import MagmaMonstar from './MagmaMonstar';

const MagmaMonstarContainer = forwardRef<HTMLImageElement, IMagmaMonstar>((props, ref) => {

    const { playerPosition } = props;

    const [magmaMonstarPosition, setMagmaMonstarPosition] = useState(600);

    const [isMovingRight, setIsMovingRight] = useState(false);

    const [isMovingLeft, setIsMovingLeft] = useState(false);

    const [isPaused, setIsPaused] = useState(false);

    const pause = () => {
        const pauseInterval = setInterval(() => {
            setIsPaused(true);
            const resumeTimeout = setTimeout(() => setIsPaused(false), 2000);
            return () => clearTimeout(resumeTimeout);
        }, 10000);
        return () => clearInterval(pauseInterval);
    }

    const enemyMovement = () => {
        if (isPaused) return () => { };
        const interval = setInterval(() => {
            setMagmaMonstarPosition((prev) => {
                const distance = Math.abs(playerPosition - prev);
                if (distance < 1) return prev;
                if (playerPosition > prev) {
                    setIsMovingRight(true);
                    setIsMovingLeft(false);
                    return prev + 10;
                }
                else {
                    setIsMovingLeft(true);
                    setIsMovingRight(false);
                    return prev - 10;
                }
            })
        }, 200)
        return () => clearInterval(interval)
    }

    useEffect(() => {
        const cleanupPause = pause();
        return cleanupPause;
    }, []);

    useEffect(() => {
        const cleanupMovement = enemyMovement();
        return cleanupMovement;
    }, [playerPosition, isPaused]);

    return (
        <div>
            <MagmaMonstar ref={ref} magmaMonstarPosition={magmaMonstarPosition} isMovingLeft={isMovingLeft} isMovingRight={isMovingRight} isPaused={isPaused} playerPosition={playerPosition} />
        </div>
    )
})

export default MagmaMonstarContainer