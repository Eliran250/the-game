export interface IPlayer {
    height: number;
    setHeight: React.Dispatch<React.SetStateAction<number>>;
    isGameOver: boolean;
    position: number;
    setPosition: React.Dispatch<React.SetStateAction<number>>;
}