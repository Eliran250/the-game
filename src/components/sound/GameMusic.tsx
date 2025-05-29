import { useEffect, useRef } from 'react'

import music from "../../assets/game_music.mp3"
import { useGame } from '../../context/GameProvider';

const GameMusic = () => {

  const { playGameMusic } = useGame();

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const gameMusic = () => {
    if (playGameMusic) {
      audioRef.current?.play().catch(console.error);
    }
  }

  useEffect(() => {
    gameMusic()
  }, [])

  return (
    <>
      {playGameMusic &&
        <audio src={music} ref={audioRef} loop></audio>
      }
    </>
  )
}

export default GameMusic