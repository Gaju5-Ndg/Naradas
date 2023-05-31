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

const products = [
  {
    id: "1",
    category: "foods",
    // post: "23/3/2023",
    itemname: "rice",
    priority: "Low",
    pbg: "primary.main",
    // budget: "3.9",
  },
  {
    id: "2",
    category: "clothes",
    // post: "23/4/2023",
    itemname: "t-shirt",
    priority: "Medium",
    pbg: "secondary.main",
    // budget: "24.5",
  },
  {
    id: "3",
    category: "beers",
    // post: "12/2/2023",
    itemname: "fanta",
    priority: "High",
    pbg: "error.main",
    // budget: "12.8",
  },
//   {
//     id: "4",
//     name: "Nirav Joshi",
//     post: "Frontend Engineer",
//     pname: "Hosting Press HTML",
//     priority: "Critical",
//     pbg: "success.main",
//     // budget: "2.4",
//   },
];

const TopSellingTable = () => {
  return (
    <Table
      aria-label="simple table"
      sx={{
        mt: 3,
        whiteSpace: "nowrap",
        width:"420px",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography color="black" fontWeight="300">
             No
            </Typography>
          </TableCell>

          <TableCell>
            <Typography color="black" fontWeight="300">
              Category
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="black" fontWeight="300">
                Items
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="black" fontWeight="300">
              Status
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
        {products.map((item) => (
          <TableRow key={item.category}>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "300",
                  
                }}
              >
                {item.id}
              </Typography>
            </TableCell>
            <TableCell>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height:"5px",
                  padding:"0px",
                }}
              >
                <Box>
                  <Typography
                    
                    sx={{
                      fontWeight: "400",
                    }}
                  >
                    {item.category}
                  </Typography>
                  <Typography
                    
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    {item.post}
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography >
                {item.itemname}
              </Typography>
            </TableCell>
            <TableCell>
              <Chip
                sx={{
                  pl: "3px",
                  pr: "3px",
                  backgroundColor: item.pbg,
                  color: "#fff",
                }}
                size="small"
                label={item.priority}
              ></Chip>
            </TableCell>
            {/* <TableCell align="right">
              <Typography variant="h6">${item.budget}k</Typography>
            </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TopSellingTable;
