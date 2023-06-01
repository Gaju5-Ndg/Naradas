import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";

const HistoryTable = ({ clientId }) => {
  const [history, setHistory] = useState([]);
  const id = useParams()
 console.log(id);
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://narada.onrender.com/api/payment/getOne/${clientId}`);
        setHistory(response.data);

      } catch (error) {
        console.log("Error fetching history:", error);
      }
    };

    fetchData();
  }, [clientId]);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        My History
      </Typography>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "lightblue" }}>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Monthly Installment</TableCell>
            <TableCell>Total Amount</TableCell>
            <TableCell>Total Remaining</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{entry.amount}</TableCell>
              <TableCell>{entry.date}</TableCell>
              <TableCell>{entry.username}</TableCell>
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
