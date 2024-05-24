import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

function Text() {
  const [editable, setEditable] = useState(false);
  const [val, setVal] = useState("Double Click & Edit ME!");
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(100);
  const [isResizing, setIsResizing] = useState(false);

  const handleResizeStart = (e) => {
    e.stopPropagation();
    setIsResizing(true);
  };

  const handleResizeStop = (e, { size }) => {
    e.stopPropagation();
    setWidth(size.width);
    setHeight(size.height);
    setIsResizing(false);
  };

  return (
    <div className='text-center'>
      <Draggable cancel=".react-resizable-handle">
        <div>
          {/* <ResizableBox
            width={width}
            height={height}
            minConstraints={[100, 50]}
            maxConstraints={[600, 400]}
            onResizeStart={handleResizeStart}
            onResizeStop={handleResizeStop}
            resizeHandles={['se']}
            className={isResizing ? 'resizing' : ''}
          > */}
            {editable ? (
              <input
                type="text"
                placeholder="Type your text here..."
                value={val}
                onChange={(e) => setVal(e.target.value)}
                onBlur={() => setEditable(false)}
                // style={{ width: '100%', height: '100%' }}
              />
            ) : (
              <h1
                onDoubleClick={() => setEditable(true)}
                style={{ color: 'black', marginLeft: 'auto', marginRight: 'auto', maxWidth: '270px', maxHeight: '100px', overflow: 'hidden',
                // , width: '100%', height: '100%' 
                }}
              >
                {val}
              </h1>
            )}
          {/* </ResizableBox> */}
        </div>
      </Draggable>
    </div>
  );
}

export default Text;
