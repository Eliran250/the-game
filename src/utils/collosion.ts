export const collosion = (player: HTMLImageElement, lavaBall: HTMLImageElement, setHealth: React.Dispatch<React.SetStateAction<number>>,change:number ) => {
    if (player && lavaBall) {
        const playerRect = player.getBoundingClientRect();
        const enemyRect = lavaBall.getBoundingClientRect();
        const isColliding = !(
            playerRect.right < enemyRect.left ||
            playerRect.left > enemyRect.right ||
            playerRect.bottom < enemyRect.top ||
            playerRect.top > enemyRect.bottom
        )
        isColliding && setHealth(prev => prev + change)
    }
}