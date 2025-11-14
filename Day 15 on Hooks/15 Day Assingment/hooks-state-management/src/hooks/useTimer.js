import { useEffect, useRef, useState } from "react";

/**
 * useTimer - simple hook to count seconds with start/pause/reset
 * returns { seconds, running, start, pause, reset }
 */
export default function useTimer(initial = 0) {
  const [seconds, setSeconds] = useState(initial);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [running]);

  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = (to = 0) => {
    setRunning(false);
    setSeconds(to);
  };

  return { seconds, running, start, pause, reset };
}
