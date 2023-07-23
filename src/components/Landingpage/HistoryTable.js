import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { useParams } from "react-router-dom";

const HistoryTable = ({ clientId }) => {
  const [history, setHistory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://narada.onrender.com/api/payment/getOne/${id}`
        );
        setHistory(response.data.reports);
      } catch (error) {
        console.log("Error fetching history:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        My History
      </Typography>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "lightblue" }}>
            {clientId && <TableCell>Username</TableCell>}
            <TableCell>Names</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Monthly Installment</TableCell>
            <TableCell>Total Amount</TableCell>
            <TableCell>Total Remaining</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Nextpayment Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((entry, index) => (
            <TableRow key={index}>
              {clientId && <TableCell>{entry.clientName}</TableCell>}
              <TableCell>{entry.username}</TableCell>
              <TableCell>{entry.amount}</TableCell>
              <TableCell>{entry.monthlyInstallment}</TableCell>
              <TableCell>{entry.totalAmount}</TableCell>
              <TableCell>{entry.totalRemaining}</TableCell>
              <TableCell></TableCell>
              <TableCell>
                {new Date(entry.nextPaymentDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </TableCell>
              <TableCell>
                {new Date(entry.Date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HistoryTable;
