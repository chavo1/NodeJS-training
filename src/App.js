import React, { useState, useEffect } from "react";
import './App.css';

export default function Pomodoro() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const int = setInterval(() => {
      console.log(`${Date.now()} - paused: ${paused}`);
      if (!paused) {
        setSeconds(s => s - 1);
      }
    }, 1000);
    return () => {
      clearInterval(int);
    };
  }, [paused]);

  function startTimer() {
    setPaused(false);
  }
  function pauseTimer() {
    setPaused(true);
  }
  function resetTimer() {
    setPaused(true);
    setSeconds(25 * 60);
  }

  return (
    <>
      {`${Math.floor(seconds / 60)}:${("00" + (seconds % 60)).slice(-2)}`}
      <button onClick={paused ? startTimer : pauseTimer}>
        {paused ? "Start" : "Pause"}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
}

