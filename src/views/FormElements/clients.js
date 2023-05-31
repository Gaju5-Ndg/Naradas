import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardContent,
  Typography,
  Box, Button,
} from "@material-ui/core";
import ClientTable from "./ClientTable";
import { NavLink } from "react-router-dom";

const Clients = () => {
  const [age, setAge] = useState("10");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    fetch("https://inventory-ciul.onrender.com/api/items", {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) =>{
      console.log(data) 
    
      setItems(data.items)
       console.log(items)
  })
      
      .catch((err) => console.log(err));
      
  }, []);

  return (
    <Card variant="outlined">
      <CardContent>
        <Box
          sx={{
            display: {
              sm: "flex",
              xs: "block",
            },
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{ marginBottom: "0", color: "blue", fontSize: "25px" }}
              gutterBottom
            >
              Items
             
            </Typography>
          </Box>

          <Box
            sx={{
              marginLeft: "auto",
              mt: {
                lg: 0,
                xs: 2,
              },
            }}
          >
            
          </Box>

          <button
                style={{
                 
                  width:"100px",
                  float:"right",
                  marginTop: "-10px",
                  color: "white",
                  backgroundColor: "blue",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                }}
              >
                {" "}
                <NavLink
                  to={"/dashboard/addClient"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Add Client
                </NavLink>
              </button>
        </Box>
        <Box
          sx={{
            overflow: "auto",
            mt: 3,
          }}
        >
          <ItemTable items={items} setItems={setItems}/>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Clients;