import React, { useState } from 'react';
import GameHeader from './GameHeader';
import ToolBar from './ToolBar';
import GameBoard from './GameBoard';

const GameContainer = () => {
    const [selectedShape, setSelectedShape] = useState(null); //obsolete?
    const [selectedColor, setSelectedColor] = useState(null);
    const [shapes, setShapes] = useState([]);
    const [color, setColor] = useState('White');

    return (
        <div className="game-container">
            <ToolBar
            setSelectedShape={setSelectedShape} 
            setSelectedColor={setSelectedColor} 
            setShapes={setShapes} 
            selectedShape={selectedShape} 
            color = {color}
            />

            <GameBoard 
            selectedShape={selectedShape} 
            selectedColor={selectedColor} 
            shapes={shapes} 
            setShapes={setShapes}
            setColor={setColor}
            color={color}
            />
        </div>
    );
};

export default GameContainer;