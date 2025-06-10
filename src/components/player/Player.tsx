import { useEffect, useState } from "react"
import "./playerStyle.scss"
import ben from "../../assets/Ben.png"
import benJumpFrame1 from "../../assets/ben_jump_frame1.png"
import benJumpFrame2 from "../../assets/ben_jump_frame2.png"
import benJumpFrame3 from "../../assets/ben_jump_frame3.png"
import benAttack from "../../assets/ben_attack.png"
import benMovingLeft from "../../assets/ben_moving_left.png"
import benMovingRight from "../../assets/ben_moving_right.png"
import { CHARACTER_INTERVAL, GRAVITY_PIX, JUMP_HEIGHT, MOVE, PLAYER_WIDTH } from "../../constants/constants";
import { jumpSoundPlay } from "../../utils/sound";
import { useGame } from "../../context/GameProvider";
import type { IPlayer } from "../../types/interfaces/IPlayer"

const player = ({ height, setHeight, isGameOver, setPosition, position }: IPlayer) => {

    const { playGameSound } = useGame();

    const jumpFrames = [benJumpFrame1, benJumpFrame2, benJumpFrame3];

    const [isMovingRight, setIsMovingRight] = useState<boolean>(false);

    const [isMovingLeft, setIsMovingLeft] = useState<boolean>(false);

    const [isJumping, setIsJumping] = useState<boolean>(false);

    const [isAttacking, setIsAttacking] = useState<boolean>(false);

    const [jumpFrameIndex, setJumpFrameIndex] = useState<number>(0);

    const gravity = () => {
        const interval = setInterval(() => {
            setHeight((prev: number) => {
                const newHeight = prev - GRAVITY_PIX;
                return newHeight < 90 ? 90 : newHeight;
            });
        }, CHARACTER_INTERVAL)
        return () => clearInterval(interval);
    }

    const movment = () => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.code === "Space" || e.code === "KeyW" || e.code === "ArrowUp") && height === 90) {
                setIsJumping(true)
                setHeight((prev) => {
                    const newHeight = prev + JUMP_HEIGHT;
                    return newHeight < 0 ? 0 : newHeight;
                });
            }
            if (e.code === "KeyD" || e.code === "ArrowRight") {
                setIsMovingRight(true)
                setIsMovingLeft(false)
                setPosition((prev) => {
                    const maxPosition = window.innerWidth - PLAYER_WIDTH;
                    const newPositon = prev + MOVE;
                    return newPositon > maxPosition ? maxPosition : newPositon;
                })
            }
            if (e.code === "KeyA" || e.code === "ArrowLeft") {
                setIsMovingLeft(true);
                setPosition((prev) => {
                    const newPositon = prev - MOVE;
                    return newPositon < 0 ? 0 : newPositon;
                })
            }
            if (playGameSound) {
                jumpSoundPlay();
            }
            if (e.code === "Enter") {
                setIsAttacking(true);
                setInterval(() => {
                    setIsAttacking(false);
                }, 2000);
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }

    useEffect(() => {
        const cleanup = gravity();
        return cleanup;
    }, [])

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

    return (
        <div>
            <div className="player-continer">
                {!isGameOver ? <img className="player-img" style={{ bottom: `${height}px`, left: `${position}px` }} src={
                    isJumping
                        ? jumpFrames[jumpFrameIndex]
                        : position === 160
                            ? ben
                            : isMovingRight
                                ? benMovingRight : isMovingLeft ? benMovingLeft : isAttacking ? benAttack : isMovingLeft ? benMovingLeft
                                    : ben
                } /> : <div className="explosion" style={{ bottom: `${height}px` }}>
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="particle" />
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default player