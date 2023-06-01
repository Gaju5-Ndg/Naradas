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
import jwtDecode from "jwt-decode";

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
  });

  const [clientId, setClientId] = useState("");
  const [Amount, setAmount] = useState("");
  const [installment, setInstallment] = useState(3);
  const [sensors, setSensors] = useState([]);
  const [selectedSensor, setSelectedSensor] = useState(sensors[0] || "");
  const [editClientId, setEditClientId] = useState("");

  const token = localStorage.getItem("token");
  const decode = jwtDecode(token);

  const [editClientData, setEditClientData] = useState({
    Names: "",
    PaymentStartDate: "",
    Sensor: "",
    Battery: "",
    NaradaTel: "",
    Phone: "",
    MonthlyInstallment: "",
    District: "",
    Sector: "",
    Cell: "",
    Nearby: "",
    Longitude: "",
    Latitude: "",
  });

  useEffect(() => {
    const handleGetClients = async () => {
      try {
        const response = await axios.get(
          "https://narada.onrender.com/api/client/getAll"
        );
        setClients(response.data.clients);
      } catch (error) {
        console.log(error);
        alert("An error occurred while getting clients.");
      }
    };
    handleGetClients();
  }, []);

  useEffect(() => {
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
  const handleEdit = (clientId) => {
    const selectedClient = clients.find((client) => client._id === clientId);
    setEditClientId(clientId);
    setEditClientData({
      Names: selectedClient.username,
      PaymentStartDate: selectedClient.paymentStartDate,
      Sensor: selectedClient.sensor,
      Battery: selectedClient.battery.toString(),
      NaradaTel: selectedClient.naradaTel,
      Phone: selectedClient.phone,
      MonthlyInstallment: selectedClient.monthlyInstallment,
      District: selectedClient.district,
      Sector: selectedClient.sector,
      Cell: selectedClient.cell,
      Nearby: selectedClient.nearby,
      Longitude: selectedClient.longitude,
      Longitude: selectedClient.latitude,
    });
    setPaymentModal({ status: true });
  };
  const handleDelete = async (clientId) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.delete(
        `https://narada.onrender.com/api/client/delete/${clientId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
      alert("An error occurred while deleting the client.");
    }
  };

  const handleUpdate = async (e) => {
    try {
      const response = await axios.patch(
        `https://narada.onrender.com/api/client/update/${editClientId}`,
        editClientData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(" client updated successfully.");
    } catch (error) {
      console.log(error);
      alert("An error occurred while updating the client.");
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
              <Typography fontWeight="600">Longitude</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight="600">Latitude</Typography>
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
                  <Typography>{product.longitude}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{product.latitude}</Typography>
                </TableCell>

                <TableCell>
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => handleEdit(product._id)}
                  >
                    Edit
                  </Button>
                  <Button
                    color="danger"
                    variant="contained"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </Button>
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
          <TextField
            id="outlined-basic"
            label="Names"
            variant="outlined"
            value={editClientData.Names}
            onChange={(e) =>
              setEditClientData({
                ...editClientData,
                Names: e.target.value,
              })
            }
            sx={{ margin: "3px" }}
          />
          <TextField
            id="outlined-basic"
            label="PaymentStartDate"
            variant="outlined"
            value={editClientData.PaymentStartDate}
            onChange={(e) =>
              setEditClientData({
                ...editClientData,
                PaymentStartDate: e.target.value,
              })
            }
            sx={{ margin: "3px" }}
          />

          <TextField
            id="outlined-basic"
            label="Sensor"
            variant="outlined"
            value={editClientData.Sensor}
            onChange={(e) =>
              setEditClientData({
                ...editClientData,
                Sensor: e.target.value,
              })
            }
            sx={{ margin: "3px" }}
          />
          <TextField
            id="outlined-basic"
            label="Battery"
            variant="outlined"
            value={editClientData.Battery}
            onChange={(e) =>
              setEditClientData({
                ...editClientData,
                Battery: e.target.value,
              })
            }
            sx={{ margin: "3px" }}
          />
          <TextField
            id="outlined-basic"
            label="NaradaTel"
            variant="outlined"
            value={editClientData.NaradaTel}
            onChange={(e) =>
              setEditClientData({
                ...editClientData,
                NaradaTel: e.target.value,
              })
            }
            sx={{ margin: "3px" }}
          />
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            value={editClientData.Phone}
            onChange={(e) =>
              setEditClientData({
                ...editClientData,
                Phone: e.target.value,
              })
            }
          />
          <TextField
            id="outlined-basic"
            label="MonthlyInstallment"
            variant="outlined"
            value={editClientData.MonthlyInstallment}
            onChange={(e) =>
              setEditClientData({
                ...editClientData,
                MonthlyInstallment: e.target.value,
              })
            }
            sx={{ margin: "3px" }}
          />
          <TextField
            id="outlined-basic"
            label="District"
            variant="outlined"
            value={editClientData.District}
            onChange={(e) =>
              setEditClientData({
                ...editClientData,
                District: e.target.value,
              })
            }
            sx={{ margin: "3px" }}
          />
          <TextField
            id="outlined-basic"
            label="Sector"
            variant="outlined"
            value={editClientData.Sector}
            onChange={(e) =>
              setEditClientData({
                ...editClientData,
                Sector: e.target.value,
              })
            }
            sx={{ margin: "3px" }}
          />
          <TextField
            id="outlined-basic"
            label="Cell"
            variant="outlined"
            value={editClientData.Cell}
            onChange={(e) =>
              setEditClientData({
                ...editClientData,
                Cell: e.target.value,
              })
            }
            sx={{ margin: "3px" }}
          />
          <TextField
            id="outlined-basic"
            label="Nearby"
            variant="outlined"
            value={editClientData.Nearby}
            onChange={(e) =>
              setEditClientData({
                ...editClientData,
                Nearby: e.target.value,
              })
            }
            sx={{ margin: "3px" }}
          />
          <TextField
            id="outlined-basic"
            label="Longitude"
            variant="outlined"
            value={editClientData.Longitude}
            onChange={(e) =>
              setEditClientData({
                ...editClientData,
                Longitude: e.target.value,
              })
            }
            sx={{ margin: "3px" }}
          />
          <TextField
            id="outlined-basic"
            label="Latitude"
            variant="outlined"
            value={editClientData.Latitude}
            onChange={(e) =>
              setEditClientData({
                ...editClientData,
                Latitude: e.target.value,
              })
            }
            sx={{ margin: "3px" }}
          />
          <Button variant="contained" onClick={handleUpdate}>
            Update
          </Button>

          {/* <Button variant="contained" >update</Button>  */}
        </Box>
      </Modal>
    </div>
  );
};

export default StockTable;
