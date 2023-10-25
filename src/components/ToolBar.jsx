import React, { useState } from 'react';
import ColorTools from './ColorTools';
import ShapeTools from './ShapeTools';

const ToolBar = ({ setSelectedShape, setSelectedColor, setShapes, selectedShape, color }) => {

    //function to handle the state of the board, it restarts it
    function clearBoard(){
        setShapes([])
    }

    return (
        <div className="tool-bar">
            <ColorTools setSelectedColor={setSelectedColor} />
            {/* <ShapeTools color={color} /> */}
            <button id='clearButton' onClick={clearBoard}>Clear Board</button>
            <ShapeTools setSelectedShape={setSelectedShape} setShapes={setShapes} selectedShape={selectedShape} color= {color}/>
        </div>
    );
};

export default ToolBar;