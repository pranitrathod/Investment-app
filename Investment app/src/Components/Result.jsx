import calculateInvestmentResults, { formatter } from "../util/investment.js";

export default function Result({ render }) {
  const arr = calculateInvestmentResults(render);
  console.log("INSIDE!=", arr);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Investment Captial</th>
        </tr>
      </thead>
      <tbody>
        {arr.map((Years) => {
          const totalNumber =
            Years.valueEndOfYear - Years.annualInvestment * Years.year;
          return (
            <tr key={Years.year}>
              <td>{Years.year}</td>
              <td>{Years.interest}</td>
              <td>{formatter.format(Years.valueEndOfYear)}</td>
              <td>{formatter.format(Years.annualInvestment)}</td>
              <td>{formatter.format(totalNumber)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
