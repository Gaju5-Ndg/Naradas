import { Box, Button, MenuItem, Typography, TextField, DatePicker } from '@material-ui/core';
import * as React from 'react';
import axios from 'axios';

export default function StockForm() {
  const [installationDate, setInstallationDate] = React.useState("");
  const [paymentStartDate, setPaymentStartDate] = React.useState("");
  const [deviceId, setDeviceId] = React.useState("");
  const [naradaTel, setNaradaTel] = React.useState("");
  const [monthlyInstallment, setMonthlyInstallment] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [district, setDistrict] = React.useState("");
  const [sector, setSector] = React.useState("");
  const [cell, setCell] = React.useState("");
  const [sensor, setSensor] = React.useState("");
  const [battery, setBattery] = React.useState("");
  const [totalAmount, setTotalAmount] = React.useState("");
  const [nearby, setNearby] = React.useState("");
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");
 
  

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://narada.onrender.com/api/client/addNew", {
        username,
        deviceId,
        installationDate,
        paymentStartDate,
        sensor,
        battery,
        naradaTel,
        phone,
        monthlyInstallment,
        totalAmount,
        district,
        sector,
        cell, 
        nearby,
        longitude,
        latitude,
      
       
      });
      alert("Client created successfully!");
      
      setUserName("");
      setDeviceId("");
      setInstallationDate("");
      setPaymentStartDate("");
      setSensor("");
      setBattery("");
      setNaradaTel("");
      setPhone("");
      setMonthlyInstallment("");
      setTotalAmount("");
      setDistrict("");
      setSector("");
      setCell("");
      setNearby("");
      setLongitude("");
      setLatitude("");
      
    } catch (error) {
      console.log(error);
      alert("An error occurred while creating the client.");
    }
  };

  
  return (
    <div style={{ backgroundColor: "white", borderRadius: "10px", marginBottom: "20px" }}>
      <div style={{ padding: "50px 100px 50px 100px" }}>
        <Typography for="my-input"></Typography>

        <div style={{ display: "flex", justifyContent: "space-between" }}>

        
          <TextField
            fullWidth
            id="standard-select-item"
            variant="outlined"

            label="UserName"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            sx={{
              mb: 2,
            }}

          >

          </TextField>
          <TextField
            id="my-input"
            aria-describedby="my-helper-text"
            fullWidth
            variant="outlined"
            label="DeviceId"
            value={deviceId}
            onChange={(e) => setDeviceId(e.target.value)}
            required
            sx={{
              mb: 2,
            }}

          />
           
          <TextField
  id="my-input"
  aria-describedby="my-helper-text"
  fullWidth
  variant="outlined"
  label="InstallationDate"
  type="date"
  value={installationDate}
  onChange={(e) => setInstallationDate(e.target.value)}
  required
  sx={{
    mb: 2,
    "& .MuiInputBase-input": {
      height: "13px", 
    },
  }}
/>
         
<TextField
  id="my-input"
  aria-describedby="my-helper-text"
  fullWidth
  variant="outlined"
  label="PaymentStartDate"
  type="date"
  value={paymentStartDate}
  onChange={(e) => setPaymentStartDate(e.target.value)}
  required
  sx={{
    mb: 2,
    "& .MuiInputBase-input": {
      height: "13px", 
    },
  }}
>
           </TextField>
        </div>
        
        <Typography for="my-input"></Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
            id="my-input"
            aria-describedby="my-helper-text"
            fullWidth
            variant="outlined"
            label="Sensor"
            value={sensor}
            onChange={(e) => setSensor(e.target.value)}
            required
            sx={{
              mb: 2,
              
            }}/>
          <TextField
            id="standard-select-item"
            aria-describedby="my-helper-text"
            fullWidth
            variant="outlined"
            select
            label="Battery"
            value={battery}
            onChange={(e) => setBattery(e.target.value)}
            required
            sx={{
              mb: 2,
              "& .MuiInputBase-input": {
                height: "13px", 
              },
            }}
          >
            {[
              { name: "True", value: true },
              { name: "False", value: false },

            ].map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                style={{ flexDirection: "column" }}
              >
                {option.name}
              </MenuItem>
            ))}

          </TextField>

          <TextField
            fullWidth
            id="standard-select-item"
            variant="outlined"

            label="Narada Tel"
            value={naradaTel}
            onChange={(e) => setNaradaTel(e.target.value)}
            required
            sx={{
              mb: 2,
            }}

          />
          <TextField
            id="my-input"
            aria-describedby="my-helper-text"
            fullWidth
            variant="outlined"
            label="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            sx={{
              mb: 2,
            }}

          >

          </TextField>
        </div>
        <Typography for="my-input"></Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          
          <TextField
            id="my-input"
            aria-describedby="my-helper-text"
            fullWidth
            variant="outlined"
            label="MonthlyInstallment"
            value={monthlyInstallment}
            onChange={(e) => setMonthlyInstallment(e.target.value)}
            required
            sx={{
              mb: 2,
            }}

          />
          <TextField
            fullWidth
            id="standard-select-item"
            variant="outlined"

            label="TotalAmount"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            required
            sx={{
              mb: 2,
            }}

          />
          <TextField
            id="my-input"
            aria-describedby="my-helper-text"
            fullWidth
            variant="outlined"
            label="District"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            required
            sx={{
              mb: 2,
            }}

          />
          <TextField
            id="my-input"
            aria-describedby="my-helper-text"
            fullWidth
            variant="outlined"
            label="Sector"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            required
            sx={{
              mb: 2,
            }}

          >
          </TextField>
        </div>
        <Typography for="my-input"></Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          
          <TextField
            fullWidth
            id="my-input"
            variant="outlined"
            label="Cell"
            value={cell}
            onChange={(e) => setCell(e.target.value)}
            required
            sx={{
              mb: 2,
            }}

          />
          <TextField
            fullWidth
            id="my-input"
            variant="outlined"
            label="Nearby"
            value={nearby}
            onChange={(e) => setNearby(e.target.value)}
            required
            sx={{
              mb: 2,
            }}

          />
          <TextField
            fullWidth
            id="my-input"
            variant="outlined"
            label="Longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
            sx={{
              mb: 2,
            }}

          />
          <TextField
            fullWidth
            id="my-input"
            variant="outlined"
            label="Latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
            sx={{
              mb: 2,
            }}

          />
          
         
        </div>
        
        <Button onClick={handleSubmit} variant="contained" color="secondary">Save</Button>
      </div>
    </div>
  );
}