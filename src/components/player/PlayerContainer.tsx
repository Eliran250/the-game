import { useEffect, useRef, useState } from 'react'
import { useGame } from '../../context/GameProvider';
import "./playerStyle.scss"
import benJumpFrame1 from "../../assets/ben_jump_frame1.png"
import benJumpFrame2 from "../../assets/ben_jump_frame2.png"
import benJumpFrame3 from "../../assets/ben_jump_frame3.png"
import { CHARACTER_INTERVAL, fightKeys, GRAVITY_PIX, JUMP_HEIGHT, jumpKeys, leftKeys, MOVE, PLAYER_WIDTH, rightKeys } from "../../constants/constants";
import { jumpSoundPlay } from "../../utils/sound";
import type { IPlayerContainer } from '../../types/interfaces/IPlayerContainer';
import Player from './Player';
import { collosion } from '../../utils/collosion';

const PlayerContainer = ({ height, setHeight, setPosition, position }: IPlayerContainer) => {

    const { setIsGameOver, playGameSound, setHealth, health } = useGame();

    const jumpFrames = [benJumpFrame1, benJumpFrame2, benJumpFrame3];

    const [isMovingRight, setIsMovingRight] = useState<boolean>(false);

    const [isMovingLeft, setIsMovingLeft] = useState<boolean>(false);

    const [isJumping, setIsJumping] = useState<boolean>(false);

    const [isAttacking, setIsAttacking] = useState<boolean>(false);

    const [jumpFrameIndex, setJumpFrameIndex] = useState<number>(0);

    const playerRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const player = document.querySelector('.player-img') as HTMLImageElement;
        const enemy = document.querySelector('.magmaMonstar-image') as HTMLImageElement;
        const interval = setInterval(() => {
            collosion(player, enemy, setHealth, -30);
        }, 100);
        return () => clearInterval(interval);
    }, [])


    const movment = () => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (playGameSound && jumpKeys.includes(e.code) && height === 60) {
                jumpSoundPlay();
                setIsJumping(true)
                setHeight((prev) => Math.max(prev + JUMP_HEIGHT, 0));
            }
            if (rightKeys.includes(e.code)) {
                setIsMovingRight(true)
                setIsMovingLeft(false)
                setPosition((prev) => {
                    const maxPosition = window.innerWidth - PLAYER_WIDTH;
                    const newPositon = prev + MOVE;
                    return newPositon > maxPosition ? maxPosition : newPositon;
                })
            }
            if (leftKeys.includes(e.code)) {
                setIsMovingLeft(true);
                setPosition((prev) => {
                    const newPositon = prev - MOVE;
                    return newPositon < 0 ? 0 : newPositon;
                })
            }
            if (playGameSound) {
                jumpSoundPlay();
            }
            if (fightKeys.includes(e.code)) {
                setIsAttacking(true);
                setTimeout(() => {
                    setIsAttacking(false);
                }, 500);
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setHeight((prev) => Math.max(prev - GRAVITY_PIX, 60));
        }, CHARACTER_INTERVAL);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const cleanup = movment();
        return cleanup;
    }, [height, playGameSound]);

    useEffect(() => {
        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.code === "KeyD" || e.code === "ArrowRight" ||
                e.code === "KeyA" || e.code === "ArrowLeft" ||
                e.code === "Space" || e.code === "KeyW" || e.code === "ArrowUp") {
                setIsMovingRight(false);
                setIsJumping(false)
            }
        }
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [])

    useEffect(() => {
        if (!isJumping) return;
        const interval = setInterval(() => {
            setJumpFrameIndex((prev) => (prev + 1) % jumpFrames.length);
        }, 1000);

        const stopJumping = setTimeout(() => {
            setIsJumping(false);
            setJumpFrameIndex(0);
        }, 1000);

        return () => {
            clearInterval(interval);
            clearTimeout(stopJumping);
        };
    }, [isJumping]);

    useEffect(() => {
        health <= 0 && setIsGameOver(true)
    })
    return (
        <div>
            <Player ref={playerRef} isMovingRight={isMovingRight} jumpFrameIndex={jumpFrameIndex} isAttacking={isAttacking} isJumping={isJumping} isMovingLeft={isMovingLeft} height={height} position={position} jumpFrames={jumpFrames} />
        </div>
    )
}

export default PlayerContainer