import deathSound from "../assets/game_over.mp3";
import jumpSound from "../assets/jump_sound.mp3";

export const gameOverSoundPlay = () => {
  const audio = new Audio(deathSound);
  audio.play();
};

export const jumpSoundPlay = () =>{
    const audio = new Audio(jumpSound);
    audio.play();
}