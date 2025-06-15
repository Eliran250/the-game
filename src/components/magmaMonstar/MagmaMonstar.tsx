import "./magmaMonstarStyle.scss"
import { forwardRef } from "react"
import type { IMagmaMonstar } from "../../types/interfaces/IMagmaMonstar";
import { getMagmaMonsterImage } from "../../utils/getMagmaMonstarImage";
import LavaBall from "./LavaBall";
const MagmaMonstar = forwardRef<HTMLImageElement, IMagmaMonstar>((props, ref) => {

    const { magmaMonstarPosition, isMovingLeft, isMovingRight, isPaused, playerPosition } = props;

    return (
        <div>
            <img ref={ref} style={{ left: magmaMonstarPosition }} className='magmaMonstar-image' src={getMagmaMonsterImage({ isMovingLeft, isMovingRight, isPaused })} alt="" />
            {isPaused && <LavaBall playerPosition={playerPosition} magmaMonstarPosition={magmaMonstarPosition} />}
        </div>
    )
})

export default MagmaMonstar