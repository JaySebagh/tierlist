import React from "react";
import '../assets/styles/icon.css'

const Icon = ({ champion, index, setActiveChampion }) => {
    return(
        <div
            draggable
            onDragStart={() => setActiveChampion(index)}
            onDragEnd={() => setActiveChampion(null)}
        >
            <h1 className="champion">{champion}</h1>
        </div>
    )
}

export default Icon;