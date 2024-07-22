import React from "react";
import Icon from './Icon';
import DropArea from "./DropArea";
import '../assets/styles/tier.css';

const Tier = ({ champion, tier, setActiveChampion, onDrop }) => {
    return(
        <div className="tier">
            <h1>{tier}</h1>
            <DropArea onDrop={() => onDrop(tier, 0)}/>
            {champion.map((champion, index) => champion.tier === tier && (
                <div key={index}>
                    <Icon
                        key={index}
                        index={index}
                        champion={champion.champion}
                        setActiveChampion={setActiveChampion}
                    />
                    <DropArea onDrop={() => onDrop(tier, index + 1)}/>
                </div>
            ))}
        </div>
    )
}

export default Tier;