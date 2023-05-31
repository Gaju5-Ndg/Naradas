import React, { useState } from 'react';

const PaymentTable = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [paymentData, setPaymentData] = useState([
    { username: 'John', deviceId: '123', payment: 0, years: {} },
    { username: 'Sarah', deviceId: '456', payment: 0, years: {} },
    
  ]);

  const handlePayment = (index, amount) => {
    const updatedPaymentData = [...paymentData];
    updatedPaymentData[index].payment += amount;
    if (selectedYear) {
      const selectedYearData = updatedPaymentData[index].years[selectedYear] || {};
      const paidMonths = Math.floor(updatedPaymentData[index].payment / 50);
      for (let i = 1; i <= 12; i++) {
        selectedYearData[i] = i <= paidMonths;
      }
      updatedPaymentData[index].years[selectedYear] = selectedYearData;
      updatedPaymentData[index].payment %= 50;
    }
    setPaymentData(updatedPaymentData);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Device ID</th>
          <th>Payment</th>
          <th>Year</th>
          <th>Months Paid</th>
          <th>Overflow</th>
        </tr>
      </thead>
      <tbody>
        {paymentData.map((data, index) => (
          <tr key={index}>
            <td>{data.username}</td>
            <td>{data.deviceId}</td>
            <td>
              <input
                type="number"
                value={data.payment}
                onChange={(e) => handlePayment(index, parseInt(e.target.value))}
              />
            </td>
            <td>
              <select value={selectedYear} onChange={(e) => handleYearSelect(e.target.value)}>
                <option value="">-- Select Year --</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                // add more years here
              </select>
            </td>
            <td>
              {selectedYear &&
                Object.entries(data.years[selectedYear] || {}).map(([month, isPaid]) => (
                  <span
                    key={month}
                    style={{
                      display: 'inline-block',
                      width: '20px',
                      height: '20px',
                      border: '1px solid black',
                      margin: '0 5px',
                      backgroundColor: isPaid ? 'green' : 'red',
                    }}
                  >
                    &nbsp;
                  </span>
                ))}
            </td>
            <td>${data.payment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PaymentTable;