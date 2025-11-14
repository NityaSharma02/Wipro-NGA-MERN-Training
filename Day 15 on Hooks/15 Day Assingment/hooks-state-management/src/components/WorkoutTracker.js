import React, { useRef, useState } from "react";
import useTimer from "../hooks/useTimer";

/**
 * Very simple workout tracker:
 * - tracks sets
 * - uses timer for rest time
 * - auto resets timer after rest finishes
 */
export default function WorkoutTracker() {
  const [sets, setSets] = useState(0);
  const [restDuration, setRestDuration] = useState(60); // rest seconds
  const { seconds, running, start, pause, reset } = useTimer(0);
  const restTimeoutRef = useRef(null);

  const startRest = () => {
    reset(0);
    start();
    // auto-stop after restDuration
    if (restTimeoutRef.current) clearTimeout(restTimeoutRef.current);
    restTimeoutRef.current = setTimeout(() => {
      pause();
      // automatically increment a completed set when rest finishes
      setSets(s => s + 1);
    }, restDuration * 1000);
  };

  const completeSet = () => {
    setSets(s => s + 1);
  };

  const stopRest = () => {
    pause();
    if (restTimeoutRef.current) {
      clearTimeout(restTimeoutRef.current);
      restTimeoutRef.current = null;
    }
  };

  return (
    <div>
      <h3>Workout Tracker</h3>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
        <div>
          <strong>Sets:</strong> {sets}
        </div>

        <div>
          <label style={{ fontSize: 13 }}>
            Rest (sec):
            <input
              value={restDuration}
              onChange={e => setRestDuration(Number(e.target.value || 0))}
              style={{ width: 70, marginLeft: 8, padding: 4 }}
              type="number"
              min="0"
            />
          </label>
        </div>
      </div>

      <div style={{
        display: "flex",
        gap: 8,
        alignItems: "center",
        marginBottom: 12
      }}>
        <div>
          <div style={{ fontSize: 28, fontVariantNumeric: "tabular-nums" }}>
            {String(seconds).padStart(2, "0")}s
          </div>
          <div style={{ fontSize: 12, color: "var(--muted)" }}>
            {running ? "Resting..." : "Idle"}
          </div>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={startRest} style={{ padding: "6px 10px" }}>
            Start Rest
          </button>
          <button onClick={stopRest} style={{ padding: "6px 10px" }}>
            Stop
          </button>
          <button onClick={completeSet} style={{ padding: "6px 10px" }}>
            Complete Set
          </button>
          <button onClick={() => { reset(0); setSets(0); }} style={{ padding: "6px 10px" }}>
            Reset All
          </button>
        </div>
      </div>
    </div>
  );
}
