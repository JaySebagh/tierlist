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
            className={showDrop ? "drop_area" : "hide_drop"}
        >Drop Here</div>
    )
};

export default DropArea;