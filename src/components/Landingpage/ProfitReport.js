import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProfitReport.css";

const ProfitReport = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalSales, setTotalSales] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("https://inventory-ciul.onrender.com/api/sales/profit", { startDate, endDate })
      setData(response.data)
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }

  }
  // console.log("dataprofite",data.data && data.data.totalExpenses);
  // console.log("dataprofite",data.data && data.data.profit);
  // console.log("dataprofite",data.data && data.data.netProfit);
  // console.log("dataprofite",data.data && data.data.totalSales);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(() => {
    let sales = 0;
    let expenses = 0;
    if (!data) console.log("there is no data");
    // }else{
    // data.forEach((item) => {
    //   const date = new Date(item.date);
    //   if (
    //     date >= new Date(startDate) &&
    //     date <= new Date(endDate) &&
    //     item.sales &&
    //     item.expenses
    //   ) {
    //     sales += item.sales;
    //     expenses += item.expenses;
    //   }
    // });

    setTotalSales(sales);
    setTotalExpenses(expenses);
    setTotalProfit(sales - expenses);

  }, [data, startDate, endDate]);

  return (
    <div className="start">
      <h1>Profit Report</h1>
      <form onSubmit={handleSubmit} style={{ justifyContent:"center", alignItems:"center" }}>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{ width: "60%" }}
        />
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={{ width: "60%" }}
        />

        <button type="submit" >Approve</button>
      </form>
      <div className="card-container">
        <div className="card sales">
          <h2>Total Sales</h2>
          <p>${data.data ? data.data.totalSales : "0"}</p>
        </div>
        <div className="card expenses">
          <h2>Total Expenses</h2>
          <p>${data.data ? data.data.totalExpenses : "0"}</p>
        </div>

        <div className="card profit">
          <h2>Total Profit</h2>
          <p>${data.data ? data.data.profit : "0"}</p>
        </div>
        <div className="card profit">
          <h2>Net Profit</h2>
          <p>${data.data ? data.data.netProfit : "0"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfitReport;
