export interface IPlayerContainer {
    height: number;
    setHeight: React.Dispatch<React.SetStateAction<number>>;
    isGameOver: boolean;
    position: number;
    setPosition: React.Dispatch<React.SetStateAction<number>>;
}