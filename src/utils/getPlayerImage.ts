import ben from "../assets/Ben.png";
import benAttack from "../assets/ben_attack.png";
import benMovingLeft from "../assets/ben_moving_left.png";
import benMovingRight from "../assets/ben_moving_right.png";

type GetPlayerImageParams = {
  isJumping: boolean;
  isMovingRight: boolean;
  isMovingLeft: boolean;
  isAttacking: boolean;
  jumpFrames: string[];
  jumpFrameIndex: number;
};

export const getPlayerImage = ({
  isJumping,
  isMovingRight,
  isMovingLeft,
  isAttacking,
  jumpFrames,
  jumpFrameIndex,
}: GetPlayerImageParams) => {
  if (isJumping) return jumpFrames[jumpFrameIndex];
  if (isAttacking) return benAttack;
  if (isMovingRight) return benMovingRight;
  if (isMovingLeft) return benMovingLeft;
  return ben;
};