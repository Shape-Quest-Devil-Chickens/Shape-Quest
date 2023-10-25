import React from 'react';

function ShapeTools({ setSelectedShape, setShapes, selectedShape, color }) {

    return (
        <section id='shapes'>
            <button className='shapebuttons' id='square' onClick={() => { 
                // setSelectedShape('square'); 
                // console.log(selectedShape)
                setShapes(prevShapes => [...prevShapes, { shape: 'square', color: color }])}}>Square</button>
            <button className='shapebuttons' id='circle' onClick={() => { setShapes(prevShapes => [...prevShapes, { shape: 'circle', color: color }])}}>Circle</button>
            <button className='shapebuttons' id='rectangle' onClick={() => {setShapes(prevShapes => [...prevShapes, { shape: 'rectangle', color: color }])}}>Rectangle</button>
            {/* <button className='shapebuttons' id='triangle' onClick={() => setSelectedShape('triangle')}></button> */}
            <button className='shapebuttons' id='oval' onClick={() => {setShapes(prevShapes => [...prevShapes, { shape: 'oval', color: color }])}}>Oval</button>
            <button className='shapebuttons' id='diamond' onClick={() => {setShapes(prevShapes => [...prevShapes, { shape: 'diamond', color: color }])}}>Diamond</button>
        </section>
    )
    
}


// export default Shapes;
export default ShapeTools;