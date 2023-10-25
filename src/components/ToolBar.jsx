import React, { useState } from 'react';
import ColorTools from './ColorTools';
import ShapeTools from './ShapeTools';

const ToolBar = ({ setSelectedShape, setSelectedColor }) => {

    return (
        <div className="tool-bar">
            <ColorTools setSelectedColor={setSelectedColor} />
            {/* <ShapeTools color={color} /> */}
            <ShapeTools setSelectedShape={setSelectedShape}/>
        </div>
    );
};

export default ToolBar;