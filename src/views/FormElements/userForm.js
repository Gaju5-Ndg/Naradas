import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Box,
    FormControl,
    MenuItem,
    Select,
    Button,
} from "@material-ui/core";

import UserTable from "./UserTable";
import { Link, NavLink } from "react-router-dom";


const UserForm = () => {
    const [age, setAge] = React.useState("10");

   
    
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Card variant="outlined">
            <CardContent>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
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
                                sx={{
                                    marginBottom: "0",
                                }}
                                gutterBottom
                            >
                                User oF the system
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
                    </Box>
                    
                </Box>
               
                <Box
                    sx={{
                        overflow: "auto",
                        mt: 3,
                    }}
                >
                    <UserTable />
                </Box>
            </CardContent>
        </Card>
    );
};

export default UserForm;
