import React from "react";
import "./salesReport.css";
const SalesReport = () => {
  // Define sample data for the table
  const data = [
    { item: "Product A", quantity: 10, price: 100, date: "2023-03-25" },
    { item: "Product B", quantity: 5, price: 50, date: "2023-03-25" },
    { item: "Product A", quantity: 15, price: 100, date: "2023-03-26" },
    { item: "Product C", quantity: 8, price: 80, date: "2023-03-26" },
  ];

  // Define a function to calculate the total quantity and amount for each date
  const calculateTotal = (sales) => {
    let totalQuantity = 0;
    let totalAmount = 0;
    sales.forEach((item) => {
      totalQuantity += item.quantity;
      totalAmount += item.quantity * item.price;
    });
    return { totalQuantity, totalAmount };
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Sales Detail</th>
          <th>Total Quantity</th>
          <th>Total Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>
              {item.sales.map((sale, index) => (
                <div key={index}>
                  {sale.item}: {sale.quantity} x {sale.price}
                </div>
              ))}
            </td>
            <td>{calculateTotal(item.sales).totalQuantity}</td>
            <td>{calculateTotal(item.sales).totalAmount} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesReport;
