// import { Box, Button, MenuItem, Typography, TextField } from '@material-ui/core';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:3000';

// export default function StockForm() {
//   const [clients, setClients] = useState([]);
//   const [formData, setFormData] = useState({
//     date: '',
//     deviceId: '',
//     naradaTel: '',
//     totalPayment: '',
//     clientName: '',
//     tel: '',
//     district: '',
//     sector: '',
//     cell: '',
//     sensors: '',
//     battery: '',
//     price: ''
//   });

//   useEffect(() => {
//     getAllClients();
//   }, []);

//   const getAllClients = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/clients`);
//       setClients(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const createClient = async (clientData) => {
//     try {
//       await axios.post(`${API_BASE_URL}/clients`, clientData);
//       getAllClients();
//       setFormData({
//         date: '',
//         deviceId: '',
//         naradaTel: '',
//         totalPayment: '',
//         clientName: '',
//         tel: '',
//         district: '',
//         sector: '',
//         cell: '',
//         sensors: '',
//         battery: '',
//         price: ''
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     createClient(formData);
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   return (
//     <div style={{ backgroundColor: 'white', borderRadius: '10px', marginBottom: '20px' }}>
//       <div style={{ padding: '50px 100px 50px 100px' }}>
//         <Typography for="my-input"></Typography>
//         <form onSubmit={handleSubmit}>
//           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <TextField
//               id="date"
//               aria-describedby="my-helper-text"
//               fullWidth
//               variant="outlined"
//               className="form-control"
//               type="date"
//               placeholder="Date of entry"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               required
//               sx={{
//                 mb: 2
//               }}
//             />

//             <TextField
//               id="deviceId"
//               aria-describedby="my-helper-text"
//               fullWidth
//               variant="outlined"
//               label="DeviceId"
//               name="deviceId"
//               value={formData.deviceId}
//               onChange={handleChange}
//               sx={{
//                 mb: 2
//               }}
//             />

//             <TextField
//               fullWidth
//               id="naradaTel"
//               variant="outlined"
//               select
//               label="Narada Tel"
//               name="naradaTel"
//               value={formData.naradaTel}
//               onChange={handleChange}
//               sx={{
//                 mb: 2
//               }}
//             >
//               {clients.map((client) => (
//                 <MenuItem key={client.id} value={client.id}>
//                   {client.name}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </div>

//           <Typography for="my-input"></Typography>

//           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <TextField
//               id="totalPayment"
//               aria-describedby="my-helper-text"
//               fullWidth
//               variant="outlined
