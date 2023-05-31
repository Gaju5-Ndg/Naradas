import React, { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaCross,
  FaExclamationCircle,
  FaPenAlt,
  FaStop,
  FaStopCircle,
} from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
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
} from "@material-ui/core";
import axios from "axios";
import { Close } from "@material-ui/icons";

const usersd = [
  {
    id: "1",
    firstName: "Fashion",
    lastName: "Pant",
    email: "Fashion@gmail.com",

    Actions: (
      <div>
        {" "}
        <NavLink to={"/dashboard/editsale"}>
          <FaPenAlt />
        </NavLink>{" "}
        <RiDeleteBin6Fill />{" "}
      </div>
    ),
  },

  {
    id: "2",
    firstName: "Fashion",
    lastName: "Pant",
    email: "fash@gmail.com",
    Actions: (
      <div>
        {" "}
        <NavLink to={"/dashboard/editsale"}>
          <FaPenAlt />
        </NavLink>{" "}
        <RiDeleteBin6Fill />{" "}
      </div>
    ),
  },
];

const UserTable = () => {
  const token = localStorage.getItem("inv-token");
  const [users, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      await fetch("https://inventory-ciul.onrender.com/api/auth/users/all", {
        method: "GET",
        headers: {
          token: localStorage.getItem("inv-token"),
        },
      })
        .then((res) => res.json())
        .then((result) => setUser(result.data))
        .catch((error) => console.log(error));
    };
    getUser();
  }, [users]);

  const handleStatus = async (id, status) => {
    console.log(id, status);
    await fetch(
      `https://narada.onrender.com/api/user/getOne/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("inv-token"),
        },
        body: JSON.stringify({
          isVerified: status,
        }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // navigate("/dashboard/form-elements/stock");
        navigate("/dashboard/form-elements/profile");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Table
      aria-label="simple table"
      sx={{
        mt: 3,
        whiteSpace: "nowrap",
      }}
    >
      <TableHead>
        <TableRow>
          {/* <TableCell>
            <Typography fontWeight="600">Id</Typography>
          </TableCell> */}
          <TableCell>
            <Typography fontWeight="600">deviceId</Typography>
          </TableCell>
          <TableCell>
            <Typography fontWeight="600">email</Typography>
          </TableCell>
          <TableCell>
            <Typography fontWeight="600">phone</Typography>
          </TableCell>
          <TableCell>
            <Typography fontWeight="600">password</Typography>
          </TableCell>
          {/* <TableCell align="center">
            <Typography fontWeight="600">Actions</Typography>
          </TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {users &&
          users.map((user, index) => (
            <TableRow key={index}>
              {/* <TableCell>
              <Typography>{user.id}</Typography>
            </TableCell> */}
              <TableCell>
                <Box>
                  <Box>
                    <Typography>{user.deviceId}</Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography>{user.email}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{user.phone}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{user.password}</Typography>
              </TableCell>
              {/* <TableCell>
              <Typography>{user.Actions}</Typography>
            </TableCell> */}
              <TableCell align="right">
                <Typography
                  style={{
                    color: "black",
                    fontWeight: "600",
                    marginRight: "10px",
                  }}
                >
                  <FaCheckCircle
                    color="success"
                    onClick={() =>
                      user.isVerified ? null : handleStatus(user._id, true)
                    }
                    style={{
                      fillOpacity: user.isVerified ? 0.5 : 1,
                      marginRight: "10px",
                      cursor: user.isVerified ? "not-allowed" : "pointer",
                    }}
                  />
                  <FaStopCircle
                    color="dark"
                    onClick={() =>
                      user.isVerified ? handleStatus(user._id, false) : null
                    }
                    style={{
                      fillOpacity: user.isVerified ? 1 : 0.5,
                      cursor: user.isVerified ? "pointer" : "not-allowed",
                    }}
                  />
                </Typography>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
