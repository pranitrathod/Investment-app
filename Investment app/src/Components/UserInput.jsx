export default function UserInput({func}) {
  return (
    <section id="user-input">
      <div className="user-group">
        <p>
          <label>Inital value</label>
          <input type="number" required onChange={(event)=>func("initialInvestment",event)}></input>
        </p>
        <p>
          <label>Anual value</label>
          <input type="number" required onChange={(event)=>func("annualInvestment",event)}></input>
        </p>
      </div>
      <div className="user-group">
        <p>
          <label>Expected return</label>
          <input type="number" required onChange={(event)=>func("expectedReturn",event)}></input>
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required onChange={(event)=>func("duration",event)}></input>
        </p>
      </div>
    </section>
  );
}