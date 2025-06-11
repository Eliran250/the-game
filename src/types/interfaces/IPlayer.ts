export interface IPlayer {
  // מצבי תנועה
  isMovingLeft: boolean;
  isMovingRight: boolean;
  isJumping: boolean;
  isAttacking: boolean;

  // ערכים מספריים (לוגיקה)
  position: number;
  jumpFrameIndex: number;
  height:number;

  // פריימים (משאבים ויזואליים)
  jumpFrames: string[];
}
