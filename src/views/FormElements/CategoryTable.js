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
import {AiFillEye} from "react-icons/ai";
import {FaPenAlt} from "react-icons/fa";
import {RiDeleteBin6Fill} from "react-icons/ri";
import { NavLink } from "react-router-dom";

const products = [
  {
    id: "1",
    category: "foods",
    // post: "Web Designer",
    itemname: "12",
    priority:
    <div>  <NavLink to={'/dashboard/editCategory'}><FaPenAlt/> </NavLink><RiDeleteBin6Fill/> </div>,
    pbg: "primary.main",
    // budget: "3.9",
  },
  {
    id: "2",
    category: "drinks",
    // post: "Project Manager",
    itemname: "23",
    priority: <div><NavLink to={'/dashboard/editCategory'}> <FaPenAlt/></NavLink> <RiDeleteBin6Fill/> </div>,
    pbg: "secondary.main",
    // budget: "24.5",
  },
  {
    id: "3",
    category: "beer",
    // post: "Project Manager",
    itemname: "25",
    priority: <div style={{padding:"0"}}> <NavLink to={'/dashboard/editCategory'}><FaPenAlt/></NavLink> <RiDeleteBin6Fill/> </div>,
    pbg: "error.main",
    // budget: "12.8",
  },
  {
    id: "4",
    category: "clothes",
    // post: "Frontend Engineer",
    itemname: "10",
    priority: <div> <NavLink to={'/dashboard/editCategory'}><FaPenAlt/></NavLink> <RiDeleteBin6Fill/> </div>,
    pbg: "success.main",
    // budget: "2.4",
  },
];

const CategoryTable = () => {
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
            <Typography style={{color:"black",fontWeight:"600"}}>
              No
            </Typography>
          </TableCell>
          <TableCell>
            <Typography style={{color:"black",fontWeight:"600"}}>
              Category Name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography style={{color:"black",fontWeight:"600"}}>
              Category Number
            </Typography>
          </TableCell>
          <TableCell>
            <Typography style={{color:"black",fontWeight:"600"}}>
              Actions
            </Typography>
          </TableCell>
          {/* <TableCell align="right">
            <Typography color="textSecondary" variant="h6">
              Budget
            </Typography>
          </TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.category}>
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
                    
                    sx={{
                      fontWeight: "500",
                    }}
                  >
                    {product.category}
                  </Typography>
                  {/* <Typography color="textSecondary" sx={{
                      fontSize: "15px",
                    }}
                  >
                    {product.post}
                  </Typography> */}
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography style={{fontSize:"15px"}}>
                {product.itemname}
              </Typography>
            </TableCell>

            <TableCell>
              <Typography style={{fontSize:"15px",marginLeft:"10px"}}>
                {product.priority}
              </Typography>
            </TableCell>
            {/* <TableCell>
              <Chip
                sx={{
                  pl: "15px",
                  pr: "20px",
                  padding:"20px",
                  backgroundColor: "grey",
                  // color: "black",
                  
                }}
                size="large"
                label={product.priority}
              ></Chip>
            </TableCell> */}
            {/* <TableCell align="right">
              <Typography variant="h6">${product.budget}k</Typography>
            </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CategoryTable;
