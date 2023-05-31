import React, { useEffect, useState } from "react";
import { FaPenAlt } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
  Modal,
  TextField,
} from "@material-ui/core";
import axios from "axios";
import { TbRuler3 } from "react-icons/tb";

const products = [
  {
    Deviceid: "1",
    Names: "Fashion",
    Tel: "Pant",
    District: "30kg",
    Sector: "100",
    Cell: "Nengo",
    Near: "Chez",
    background: "	skyblue",
    Installationdate: "qw",
    Actions: (
      <div>
        {" "}
        <NavLink to={"/paymenttable"}>
          <FaPenAlt />
        </NavLink>{" "}
        <RiDeleteBin6Fill />{" "}
      </div>
    ),
  },

  {
    Deviceid: "2",
    Names: "Food",
    Tel: "Spaghetti",
    District: "30kg",
    Sector: "200",
    Cell: "Nengo",
    Near: "Chez",
    background: "	skyblue",
    Installationdate: "we",
    Actions: (
      <div>
        {" "}
        <NavLink to={"/paymenttable"}>
          <FaPenAlt />
        </NavLink>{" "}
        <RiDeleteBin6Fill />{" "}
      </div>
    ),
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StockTable = () => {
  const [clients, setClients] = useState([]);
  const [allClients, setAllClients] = useState([]);
  const [paymentModal, setPaymentModal] = useState({
    status: false,
    data: {},
  });

  const [clientId, setClientId] = useState("");
  const [Amount, setAmount] = useState("");
  const [installment, setInstallment] = useState(3);
  const [sensors, setSensors] = useState([]);
  const [selectedSensor, setSelectedSensor] = useState(sensors[0] || "");

  useEffect(() => {
    const handleGetClients = async () => {
      try {
        const response = await axios.get(
          "https://narada.onrender.com/api/client/getAll"
        );
        setClients(response.data.clients);
        setAllClients(response.data.clients);

        // fetch sensor data and save unique sensors
        const clientSensors = [
          ...new Set(response.data.clients.map((client) => client.sensor)),
        ];
        setSensors(clientSensors);

        console.log(response.data.clients, "clients");
      } catch (error) {
        console.log(error);
        alert("An error occurred while getting clients.");
      }
    };
    handleGetClients();
  }, []);

  useEffect(() => {
    // filter clients by selected sensor
    const filteredClients = allClients.filter(
      (client) => client.sensor === Number(selectedSensor)
    );
    console.log(filteredClients);
    setClients(filteredClients);
  }, [selectedSensor]);

  const handlePayment = async (e) => {
    // console.log(clientId);
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
      console.log(error);
      alert("An error occurred while processing payments.");
    }
  };

  return (
    <div style={{ height: "500px", overflow: "auto" }}>
    
      <div>
        <select
        className="form-select"
          onChange={(e) => {
            setSelectedSensor(e.target.value);
          }}
        >
          {sensors.map((sensor) => (
            <option value={sensor}>Sensor {sensor}</option>
          ))}
        </select>
      </div>
      <Table
        aria-label="simple table"
        sx={{
          mt: 3,
          whiteSpace: "nowrap",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography fontWeight="600">Id</Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight="600">Names</Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight="600">DeviceId</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight="600">Installationdate</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight="600">PaymentStartDate</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight="600">Sensor</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight="600">Battery</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight="600">NaradaTel</Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight="600">Phone</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight="600">MonthlyInstallment</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight="600">TotalAmount</Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight="600">District</Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight="600">Sector</Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight="600">Cell</Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight="600">Nearby</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight="600">Coordinates</Typography>
            </TableCell>
           
           

            <TableCell align="center">
              <Typography fontWeight="600">Actions</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients &&
            clients.map((product, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography>{product._id}</Typography>
                </TableCell>
                <TableCell>
                  <Box>
                    <Box>
                      <Typography>{product.username}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography>{product.deviceId}</Typography>
                </TableCell>

                <TableCell>
                  <Typography>{product.installationDate}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{product.paymentStartDate}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{product.sensor}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{product.battery.toString()}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{product.naradaTel}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{product.phone}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{product.monthlyInstallment}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{product.totalAmount}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{product.district}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{product.sector}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{product.cell}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{product.nearby}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{product.coordinates}</Typography>
                </TableCell>
               
               
                <TableCell>
                  <Button color="secondary" variant="contained" onClick={() => setPaymentModal({status: true})}>Edit</Button>
                  <Button color="danger" variant="contained">Delete</Button>
                </TableCell>
                {/* <TableCell>
              <Typography > 
                 {product.totalRemaining} 
              </Typography>
            </TableCell> */}

                {/* <TableCell>
              <Typography  >
                 {product.Actions} 
               </Typography>
            </TableCell>  */}
              </TableRow>
            ))}
        </TableBody>
      </Table>

      {/* payment modal */}
      <Modal
        keepMounted
        open={paymentModal.status}
        onClose={() => setPaymentModal({ status: false })}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Update Client
          </Typography>
          <TextField id="outlined-basic" label="Amount"  variant="outlined" />
          <TextField id="filled-basic" label="Installment"  variant="filled" />
          <TextField id="outlined-basic" label="Amount"  variant="outlined" />
          <TextField id="filled-basic" label="Installment"  variant="filled" />
          <TextField id="outlined-basic" label="Amount"  variant="outlined" />
          <TextField id="filled-basic" label="Installment"  variant="filled" />
          <Button variant="contained" >update</Button>
        </Box>
      </Modal>
      </div>
    
  );
};

export default StockTable;