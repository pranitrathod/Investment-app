export const arr=[];

import { useState } from "react";
export default function UserInput() {
    const [initialValue,updateInitalValue]=useState(0);
    const [AnualValue,updateAnualValue]=useState(0);
    const [expectedValue,updateExpectedValue]=useState(0);
    const [duration,updateDuration]=useState(0);
    
  return (
    <section id="user-input">
      <div className="user-group">
        <p>
          <label>Inital value</label>
          <input type="number" required></input>
        </p>
        <p>
          <label>Anual value</label>
          <input type="number" required></input>
        </p>
      </div>
      <div className="user-group">
        <p>
          <label>Expected return</label>
          <input type="number" required></input>
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required></input>
        </p>
      </div>
    </section>
  );
}
