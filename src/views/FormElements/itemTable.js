import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@material-ui/core";
import { AiFillEye } from "react-icons/ai";
import { FaPenAlt } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { Delete, Edit } from "@material-ui/icons";

const products = [
  {
    Deviceid: "1",
    username: "Soap",
    // post: "Web Designer",
    // action:"edit",
    quantity: "20 boxes",
    category: "cleaning",
    pbg: "primary.main",
    action: (
      <div>
        <NavLink to={"/paymenttable"}>
          <FaPenAlt />{" "}
        </NavLink>
        <RiDeleteBin6Fill />{" "}
      </div>
    ),
  },
  {
    id: "2",
    itemname: "fanta",
    // post: "Project Manager",
    //  action:"edit",
    quantity: "30 casses",
    category: "drinking",
    pbg: "secondary.main",
    action: (
      <div>
        {" "}
        <NavLink to={"/dashboard/editItem"}>
          <FaPenAlt />{" "}
        </NavLink>
        <RiDeleteBin6Fill />{" "}
      </div>
    ),
  },
  {
    id: "3",
    itemname: "potatoes",
    // post: "Project Manager",
    //  action:"edit",
    quantity: "5 packages",
    category: "foods",
    pbg: "error.main",
    action: (
      <div>
        <NavLink to={"/dashboard/editItem"}>
          {" "}
          <FaPenAlt />
        </NavLink>{" "}
        <RiDeleteBin6Fill />{" "}
      </div>
    ),
  },
  {
    id: "4",
    itemname: "cotes",
    // post: "Frontend Engineer",
    //  action:"edit",
    quantity: "7 packages",
    category: "clothes",
    pbg: "success.main",
    action: (
      <div>
        {" "}
        <NavLink to={"/dashboard/editItem"}>
          <FaPenAlt />{" "}
        </NavLink>
        <RiDeleteBin6Fill />{" "}
      </div>
    ),
  },
];

const ItemTable = ({ items, setItems }) => {
  const handleDelete = (id) => {
    fetch(`https://inventory-ciul.onrender.com/api/items/delete/${id}`,{
      method: "DELETE",
      headers: {
        "token": localStorage.getItem("inv-token")
      }
    })
      .then((res) => res.json())
      .then((res) => setItems(items.filter(item => item._id !== id)))
      .catch((err) => console.log(err));
  };

  const handleEdit = (id) => {
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
          <TableCell>
            <Typography style={{ color: "black", fontWeight: "600" }}>
              No
            </Typography>
          </TableCell>
          <TableCell>
            <Typography style={{ color: "black", fontWeight: "600" }}>
              Item Name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography style={{ color: "black", fontWeight: "600" }}>
              Quantity
            </Typography>
          </TableCell>

          {/* <TableCell>
            <Typography color="textSecondary" variant="h6">
              action
            </Typography>
          </TableCell> */}

          <TableCell>
            <Typography style={{ color: "black", fontWeight: "600" }}>
              Category
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Typography style={{ color: "black", fontWeight: "600" }}>
              Actions
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.length > 0 &&
          items.map((item, index) => (
            <TableRow key={item._id}>
              <TableCell>
                <Typography style={{ color: "black", fontWeight: "400" }}>
                  {index + 1}
                </Typography>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box>
                    <Typography style={{ color: "black", fontWeight: "400" }}>
                      {item.name}
                    </Typography>

                    {/* <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  >
                    {product.post}
                  </Typography> */}
                  </Box>
                </Box>
              </TableCell>

              <TableCell>
                <Typography style={{ color: "black", fontWeight: "400" }}>
                  {item.category.numberOfItems}
                </Typography>
              </TableCell>

              <TableCell>
                <Typography style={{ color: "black", fontWeight: "400" }}>
                  {item.category.name}
                </Typography>
              </TableCell>

              {/* <TableCell>
              <Typography color="textSecondary" variant="h6">
                {product.action}
              </Typography>
            </TableCell> */}

              {/* <TableCell>
              <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                  backgroundColor: product.pbg,
                  color: "#fff",
                }}
                size="small"
                label={product.priority}
              ></Chip>
            </TableCell> */}
              <TableCell align="right">
                <Typography
                  style={{
                    color: "black",
                    fontWeight: "600",
                    marginRight: "10px",
                  }}
                >
                  <Delete color="danger" onClick={() => handleDelete(item._id)} />
                  <Edit color="primary" onClick={() => handleEdit(item._id)} />
                </Typography>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default ItemTable;
