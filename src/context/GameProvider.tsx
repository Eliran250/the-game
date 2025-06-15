import { createContext, useContext, useState } from "react";

interface GameContextType {
    playGameMusic: boolean;
    setPlayGameMusic:  React.Dispatch<React.SetStateAction<boolean>>;
    playGameSound: boolean;
    setPlayGameSound:  React.Dispatch<React.SetStateAction<boolean>>;
    health: number;
    setHealth:  React.Dispatch<React.SetStateAction<number>>;
    isGameOver: boolean;
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
    const [playGameMusic, setPlayGameMusic] = useState(true);
    const [playGameSound, setPlayGameSound] = useState(true);
    const [health, setHealth] = useState<number>(100);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);



    return (
        <GameContext.Provider value={{ setPlayGameMusic: setPlayGameMusic, playGameMusic: playGameMusic, playGameSound: playGameSound, setPlayGameSound: setPlayGameSound, health: health, setHealth: setHealth,isGameOver:isGameOver,setIsGameOver:setIsGameOver }}>
            {children}
        </GameContext.Provider>
    );
};
export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error("useGame must be used within a GameProvider");
    }
    return context;
};
