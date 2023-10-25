import React, { useState } from 'react';
import GameHeader from './GameHeader';
import ToolBar from './ToolBar';
import GameBoard from './GameBoard';

const GameContainer = () => {
    const [selectedShape, setSelectedShape] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    return (
        <div className="game-container">
            <ToolBar setSelectedShape={setSelectedShape} setSelectedColor={setSelectedColor} />
            <GameBoard selectedShape={selectedShape} selectedColor={selectedColor}/>
        </div>
    );
};

export default GameContainer;