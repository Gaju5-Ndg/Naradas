import React from "react";
import { NavLink } from "react-router-dom";
import { FaPenAlt } from "react-icons/fa";
import { RiDeleteBin6Fill} from "react-icons/ri";
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

const products = [
  {
    id: "1",
    name: "Sandals",
    pname: "30kg",
    price:"300",
    
    customer:"Nana",
    priority: "Low",
    pbg: "primary.main",
    actions:<div> <NavLink to={'/dashboard/editsale'}><FaPenAlt/></NavLink> <RiDeleteBin6Fill/> </div> ,
  },
  
  {
    id: "2",
    name: "Dresses",
    pname: "30m",
    price:"300",
    
    customer:"Keke",
    priority: "Low",
    pbg: "primary.main",
    actions: <div> <NavLink to={'/dashboard/editsale'}><FaPenAlt/></NavLink> <RiDeleteBin6Fill/> </div>,
  },

  {
    id: "3",
    name: "Juices",
    pname: "300L",
    price:"300",
    
    customer:"Carla",
    priority: "High",
    pbg: "primary.main",
    actions: <div> <NavLink to={'/dashboard/editsale'}><FaPenAlt/></NavLink> <RiDeleteBin6Fill/> </div>,
  },
];

const SaleTable = () => {
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
            <Typography color="textSecondary" variant="h6">
              Id
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Item
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Quantity
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Sales price
            </Typography>
          </TableCell>
          
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Customer
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Status
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Typography color="textSecondary" variant="h6">
              Actions
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.name}>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {product.id}
              </Typography>
            </TableCell>
            <TableCell>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  >
                    {product.post}
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {product.pname}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {product.price}
              </Typography>
            </TableCell>
            
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {product.customer}
              </Typography>
            </TableCell>
            <TableCell>
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
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6">{product.actions}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SaleTable;