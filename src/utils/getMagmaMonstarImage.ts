import magmaMonsterWalkingRight from "../assets/magma_monster_walking_right.png"
import magmaMonsterWalkingLeft from "../assets/magma_monster_walking_left.png"
import magmaMonsterAttackigLeft from "../assets/magma_monster_attackig_left.png"
import magmaMonsterAttackigRight from "../assets/magma_monster_attackig_right.png"

type GetImageImageParams = {
  isMovingRight: boolean;
  isMovingLeft: boolean;
  isPaused:boolean;
};

export const getMagmaMonsterImage = ({ isMovingLeft, isMovingRight,isPaused }: GetImageImageParams) => {
  if (isPaused) return isMovingRight ? magmaMonsterAttackigRight : magmaMonsterAttackigLeft;
  if (isMovingRight) return magmaMonsterWalkingRight;
  if (isMovingLeft) return magmaMonsterWalkingLeft;
}