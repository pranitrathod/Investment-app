import calculateInvestmentResults from "../util/investment.js";
import { useState } from "react";

export default function UserInput({change1}) {
    const [initialValue,updateInitalValue]=useState(0);
    const [AnualValue,updateAnualValue]=useState(0);
    const [expectedValue,updateExpectedValue]=useState(0);
    const [year,updateYear]=useState(0);
  
    function initVal(e)
    {  
      updateInitalValue(e.target.value);  
    }
     
    function anualVal(e)
    {  
      updateAnualValue(e.target.value);  
      // console.log(AnualValue);
      //  check2Again(true);
    }
    function expectedVal(e)
    {  
      updateExpectedValue(e.target.value);  
      //  check3Again(true);
    }
    function durationVal(e)
    {  
      updateYear(e.target.value);  
      //  check4Again(true);
    }
      const arr=calculateInvestmentResults({initialInvestment:initialValue, annualInvestment:AnualValue,expectedReturn:expectedValue,duration:year});
      change1(arr);
  return (
    <section id="user-input">
      <div className="user-group">
        <p>
          <label>Inital value</label>
          <input type="number" required onChange={initVal}></input>
        </p>
        <p>
          <label>Anual value</label>
          <input type="number" requiredonChange={anualVal} ></input>
        </p>
      </div>
      <div className="user-group">
        <p>
          <label>Expected return</label>
          <input type="number" required onChange={expectedVal}></input>
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required onChange={durationVal}></input>
        </p>
      </div>
    </section>
  );
}