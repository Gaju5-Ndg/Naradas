import React, { useState } from "react";
import "./form.css";

const FinancialInformation = ({ handleNext, handleBack }) => {
  const [annualProfit, setAnnualProfit] = useState("");
  const [numEmployees, setNumEmployees] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [salesRevenue, setSalesRevenue] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <div style={{ alignContent: "center", marginLeft: "200px" }}>
      <h3>Financial Information</h3>
      <form >
        <label htmlFor="annualProfit">Annual Profit</label>
        <input
          type="text"
          id="annualProfit"
          value={annualProfit}
          onChange={(e) => setAnnualProfit(e.target.value)}
        />

        <label htmlFor="numEmployees">Num Employees</label>
        <input
          type="text"
          id="numEmployees"
          value={numEmployees}
          onChange={(e) => setNumEmployees(e.target.value)}
        />

        <label htmlFor="monthlyExpenses">Monthly Expenses</label>
        <input
          type="text"
          id="monthlyExpenses"
          value={monthlyExpenses}
          onChange={(e) => setMonthlyExpenses(e.target.value)}
        />

        <label htmlFor="salesRevenue">Sales Revenue</label>
        <input
          type="text"
          id="salesRevenue"
          value={salesRevenue}
          onChange={(e) => setSalesRevenue(e.target.value)}
        />

        <div>
          <button type="submit" onClick={() => handleBack()}>Back</button>
          <button style={{ marginLeft: "30px" }} type="submit"  onClick={() => handleNext()}> Next</button>
        </div>
      </form>
    </div>
  );
};

export default FinancialInformation;
