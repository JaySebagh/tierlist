import React, { useState } from "react";
import './assets/styles/app.css';
import Tier from './components/Tier';

const App = () => {
  const [champion, setChampion] = useState([
    {"champion":"ahri", "tier":"champions"},
    {"champion":"twitch", "tier":"champions"},
    {"champion":"riven", "tier":"champions"},
    {"champion":"vayne", "tier":"champions"},
    {"champion":"yuumi", "tier":"champions"},
    {"champion":"kindred", "tier":"champions"},
    {"champion":"lillia", "tier":"champions"},
    {"champion":"graves", "tier":"champions"},
    {"champion":"lux", "tier":"champions"},
    {"champion":"nami", "tier":"champions"},
    {"champion":"draven", "tier":"champions"},
    {"champion":"katarina", "tier":"champions"}
  ])

  const [activeChampion, setActiveChampion] = useState(null);

  const onDrop = (tier, position) => {
    if(activeChampion === null || activeChampion === undefined) return;

    const championToMove = champion[activeChampion];
    const updated = champion.filter((champion, index) => index !== activeChampion);

    updated.splice(position, 0, {
      ...championToMove,
      tier: tier
    })

    setChampion(updated)
  };

  return (
    <div className='app-container'>
      <Tier
        champion={champion}
        tier="S"
        setActiveChampion={setActiveChampion}
        onDrop={onDrop}
      />
      <Tier
        champion={champion}
        tier="A"
        setActiveChampion={setActiveChampion}
        onDrop={onDrop}
      />
      <Tier
        champion={champion}
        tier="B"
        setActiveChampion={setActiveChampion}
        onDrop={onDrop}
      />
      <Tier
        champion={champion}
        tier="C"
        setActiveChampion={setActiveChampion}
        onDrop={onDrop}
      />
      <Tier
        champion={champion}
        tier="D"
        setActiveChampion={setActiveChampion}
        onDrop={onDrop}
      />
      <Tier
        champion={champion}
        tier="E"
        setActiveChampion={setActiveChampion}
        onDrop={onDrop}
      />
      <Tier
        champion={champion}
        tier="F"
        setActiveChampion={setActiveChampion}
        onDrop={onDrop}
      />
      <Tier
        champion={champion}
        tier="champions"
        setActiveChampion={setActiveChampion}
        onDrop={onDrop}
      />
    </div>
  );
}

export default App;