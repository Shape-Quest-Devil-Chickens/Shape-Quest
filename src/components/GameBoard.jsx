import React, { useState } from 'react';
import '/src/sass/styles.css';

const GameBoard = ({ selectedShape, selectedColor, shapes, setShapes, color, setColor }) => {
    // const [shapes, setShapes] = useState([]);
    // const [color, setColor] = useState('White');
    
    console.log("hi", shapes)
    // Whenever selectedShape changes, add it to shapes list
    // Refactor : import useEfferct to cleaner syntax
    // React.useEffect(() => {
    //     if (selectedShape) {
    //         // make a new State manag
    //         setShapes(prevShapes => [...prevShapes, { shape: selectedShape, color: color }]);
    //     }
    //     // if (selectedColor) {
    //     //     setColor(prevColor => [...prevColor, { color: selectedColor }]);
    //     // }
    // }, [selectedShape]);

    React.useEffect(() => {
        if (selectedColor) {
            setColor(selectedColor); 
        }
    }, [selectedColor]);

    return (
        <div className="game-board">
            {shapes.map((shape, index) => (
                <div style={{ backgroundColor: shape.color }} id={`${shape.shape}1`} key={index}>{shape.shape}</div>
            ))
            }
        </div >
    );
};

export default GameBoard;