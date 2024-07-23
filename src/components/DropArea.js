import React, {useState} from 'react';
import '../assets/styles/droparea.css';

const DropArea = ({ onDrop }) => {
    const [showDrop, setShowDrop] = useState(false);
    return(
        <div
            onDragEnter={() => setShowDrop(true)}
            onDragLeave={() => setShowDrop(false)}
            onDrop={() => {
                onDrop();
                setShowDrop(false);
            }}
            onDragOver={event => event.preventDefault()}
            className={showDrop ? "drop-area" : "hide-drop"}
        ></div>
    )
};

export default DropArea;