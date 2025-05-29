import { createContext, useContext, useState } from "react";

interface GameContextType {
    playGameMusic: boolean;
    setPlayGameMusic: (status: boolean) => void;
    playGameSound: boolean;
    setPlayGameSound: (status: boolean) => void;
}

const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
    const [playGameMusic, setPlayGameMusic] = useState(true);
    const [playGameSound, setPlayGameSound] = useState(true);

    return (
        <GameContext.Provider value={{ setPlayGameMusic: setPlayGameMusic, playGameMusic: playGameMusic, playGameSound: playGameSound, setPlayGameSound: setPlayGameSound }}>
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
