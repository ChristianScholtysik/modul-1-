import React, { useState } from "react";
import { runDistance, warmUp, coolDown } from "./jogging";

const JoggingComponent: React.FC = () => {
  const [warmUpTime, setWarmUpTime] = useState<number | null>(null);
  const [runTime, setRunTime] = useState<number | null>(null);
  const [coolDownTime, setCoolDownTime] = useState<number | null>(null);
  const [totalTime, setTotalTime] = useState<number | null>(null);
  const [status, setStatus] = useState<string>("Bereit zum Start");

  const startJogging = async () => {
    setStatus("Warming up...");
    const warmUpMinutes = await warmUp();
    setWarmUpTime(warmUpMinutes);

    setStatus("Running...");
    const runMinutes = await runDistance("5 km Jogging");
    setRunTime(runMinutes);

    setStatus("Cooling down...");
    const coolDownMinutes = await coolDown();
    setCoolDownTime(coolDownMinutes);

    const total = warmUpMinutes + runMinutes + coolDownMinutes;
    setTotalTime(total);

    setStatus("Jogging beendet");
  };

  return (
    <div>
      <h2>Jogging Tracker</h2>
      <button onClick={startJogging}>Start Jogging</button>
      <p>Status: {status}</p>
      {warmUpTime !== null && <p>Warm-Up: {warmUpTime} Minuten</p>}
      {runTime !== null && <p>5 km Jogging: {runTime} Minuten</p>}
      {coolDownTime !== null && <p>Cool-Down: {coolDownTime} Minuten</p>}
      {totalTime !== null && <p>Gesamtzeit: {totalTime} Minuten</p>}
    </div>
  );
};

export default JoggingComponent;
