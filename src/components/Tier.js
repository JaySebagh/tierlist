import React from "react";
import Icon from './Icon';
import DropArea from "./DropArea";
import '../assets/styles/tier.css';

const Tier = ({ champion, tier, setActiveChampion, onDrop }) => {
    return(
        <div className="tier-container">
            <h1 className="tier-name">{tier}</h1>
            <div className="tier">
                <div className="first-drop">
                    <DropArea onDrop={() => onDrop(tier, 0)}/>
                </div>
                {champion.map((champion, index) => champion.tier === tier && (
                    <div className="champs" key={index}>
                        <Icon
                            key={index}
                            index={index}
                            champion={champion.champion}
                            setActiveChampion={setActiveChampion}
                        />
                        <div className="drop">
                            <DropArea onDrop={() => onDrop(tier, index + 1)}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tier;

// return(
//     <div className="tier-container">
//         <h1 className="tier-name">{tier}</h1>
//         <div className="tier">
//             <div className="first-drop">
//                 <DropArea onDrop={() => onDrop(tier, 0)}/>
//             </div>
//             {champion.map((champion, index) => champion.tier === tier && (
//                 <div className="champs" key={index}>
//                     <Icon
//                         key={index}
//                         index={index}
//                         champion={champion.champion}
//                         setActiveChampion={setActiveChampion}
//                     />
//                     <div className="drop">
//                         <DropArea onDrop={() => onDrop(tier, index + 1)}/>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
// )