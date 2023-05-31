import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@material-ui/core";


const dummyHistoryData = [
  {
    username: "John Doe",
    monthlyInstallment: 100,
    totalAmount: 500,
    totalRemaining: 300,
  },
  {
    username: "Jane Smith",
    monthlyInstallment: 150,
    totalAmount: 1000,
    totalRemaining: 750,
  },

];

const HistoryTable = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    
    setHistory(dummyHistoryData);
  }, []);

  return (
    
        <div style={{ padding: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        My History
      </Typography>
      <Table>
        <TableHead>
        <TableRow sx={{ backgroundColor: "pink" }}>
            <TableCell>Username</TableCell>
            <TableCell>Monthly Installment</TableCell>
            <TableCell>Total Amount</TableCell>
            <TableCell>Total Remaining</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((entry, index) => (
            <TableRow key={index} className={index === 0 ? "highlight-row" : ""}>
              <TableCell >{entry.username}</TableCell>
              <TableCell>{entry.monthlyInstallment}</TableCell>
              <TableCell>{entry.totalAmount}</TableCell>
              <TableCell>{entry.totalRemaining}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HistoryTable;
