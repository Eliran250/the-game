const screenWidth = 1920;
const screenHeight = 700;

export const isCollision = (obstaclePercent: number, birdY: number) => {
  const birdWidth = 40;
  const birdHeight = 40;
  const obsWidth = 200;
  const obsHeight = 500;
  const birdLeftPercent = 20;

  // מיקום X של הציפור
  const birdX = (screenWidth * birdLeftPercent) / 100 - birdWidth / 2;

  // מיקום X של המכשול (ימין באחוזים)
  const obsX = screenWidth - (screenWidth * obstaclePercent) / 100 - obsWidth;

  // מיקום Y של המכשול
  const obsTopY = -0.1 * screenHeight;
  const obsBottomY = obsTopY + obsHeight;

  // מיקום הציפור בציר Y
  const birdTopY = birdY;
  const birdBottomY = birdY + birdHeight;

  // בדיקת חפיפה בציר X
  const collisionX = birdX < obsX + obsWidth && birdX + birdWidth > obsX;

  // הגדרת "אזור בטוח" תחתון בתוך המכשול שבו אין פגיעה
  const safeBottomZoneHeight = 50; // גובה האזור התחתון בלי התנגשות

  // בדיקת חפיפה בציר Y עם התחשבות באזור הבטוח התחתון
  // כלומר: התנגשות אם הציפור מתחת לתחתית המכשול פחות האזור הבטוח (birdBottomY > obsTopY)
  // וגם הציפור לא נמצאת מתחת לאזור הבטוח (birdTopY < obsBottomY - safeBottomZoneHeight)
  const collisionY =
    birdBottomY > obsTopY &&
    birdTopY < obsBottomY - safeBottomZoneHeight;

  return collisionX && collisionY;
};
