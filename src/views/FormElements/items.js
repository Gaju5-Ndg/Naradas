import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import axios from "axios";

const Items = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get("https://example.com/api/history"); // Replace with your API endpoint
        setHistory(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Username</TableCell>
          <TableCell>Monthly Installment</TableCell>
          <TableCell>Total Amount</TableCell>
          <TableCell>Total Remaining</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {history.map((entry, index) => (
          <TableRow key={index}>
            <TableCell>{entry.username}</TableCell>
            <TableCell>{entry.monthlyInstallment}</TableCell>
            <TableCell>{entry.totalAmount}</TableCell>
            <TableCell>{entry.totalRemaining}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Items;
