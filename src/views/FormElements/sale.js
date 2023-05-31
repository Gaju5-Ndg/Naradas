import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Typography,
  Box,
  Button,
  Modal,
  TextField,
} from "@material-ui/core";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const PaymentTable = () => {
  const [paymentData, setPaymentData] = useState([]);
  const [paymentModal, setPaymentModal] = useState({
    status: false,
    data: {}
  })
  const [clientId, setClientId] = useState('');
  const [Amount, setAmount] = useState('')
  const [installment, setInstallment] = useState("")
  

  const calculateRemainingAmount = (data) => {
   
  };

  useEffect(() => {
    const getPayment = async () => {
      const response = await axios.get(
        "https://narada.onrender.com/api/client/filter"
      );
      setPaymentData(response.data.clients);
    };
    getPayment();
  }, []);

  const handlePayment = async (e) => {
    console.log(clientId);
    try {
      const response = await axios.post(
        `https://narada.onrender.com/api/payment/add/${clientId}`,
        {
          Amount,
          installment,
        }
      );
      console.log(response);
    } catch (error) {
      console.log("error", error);
      // alert("An error occurred while processing payments.");
    }
  };
  return (
    <>
      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "blue", color: "white" }}>
            <th style={{ padding: "10px" }}>Username</th>
            <th style={{ padding: "10px" }}>Device ID</th>
            <th style={{ padding: "10px" }}>Total Amount</th>
            <th style={{ padding: "10px" }}>Paid Amount</th>
            <th style={{ padding: "10px" }}>Overflow</th>
            <th style={{ padding: "10px" }}>Remaining Amount</th>
            <th style={{ padding: "10px" }}>Pay</th>
          </tr>
        </thead>
        <tbody>
          {paymentData.map((data, index) => (
            <tr key={index}>
              <td style={{ padding: "10px" }}>{data.username}</td>
              <td style={{ padding: "10px" }}>{data.deviceId}</td>
              <td style={{ padding: "10px" }}>{data.totalAmount}</td>
              
              <td style={{ padding: "10px" }}>
                {data.totalAmount - data.totalRemaining}
              </td>
              <td style={{ padding: "10px" }}>{data.overFlow}</td>
              <td style={{ padding: "10px" }}>{data.totalRemaining}</td>
              <td style={{ padding: "10px" }}>
                {calculateRemainingAmount(data)}
              </td>
              <td style={{ padding: "10px" }}>
                {/* <button
                  type="submit"
                  onClick={() => handlePayment(index, 50)}
                  disabled={data.paidAmount >= data.totalAmount}
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    padding: "8px 12px",
                    cursor: "pointer",
                  }}
                >
                  Pay
                </button> */}
                 <Button variant="contained" onClick={() => {
                    setPaymentModal({ status: true, data: data });
                    setClientId(data._id);
                  }}>Pay</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        keepMounted
        open={paymentModal.status}
        onClose={() => setPaymentModal({ status: false })}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Payment Portal
          </Typography>
          <TextField
            id="outlined-basic"
            label="Amount"
            value={Amount}
            onChange={(e) => setAmount(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="filled-basic"
            label="Installment"
            value={installment}
            onChange={(e) => setInstallment(e.target.value)}
            variant="filled"
          />
          <Button variant="contained" onClick={handlePayment}>
            Pay Now
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default PaymentTable;
