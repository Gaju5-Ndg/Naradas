import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import image1 from "../../images/aboutimage.jpg";
import image2 from "../../images/service2.jpeg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const BlogSheet = [
  // {
  //   image: image1,
  //   title: "Income Statement",
  //   // button: "Generate Balance Sheet",
  // },
  {
    image: image1,
    title: "Sales Statement",
    // button: "Generate Income Statement",
  },


];

const CardSheet = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const handleGenerate = () => {
    navigate('/dashboard/form-elements/statement');
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("https://inventory-ciul.onrender.com/api/sales/profit", { startDate, endDate })
      setData(response.data)
      navigate('/dashboard/form-elements/statement');
    } catch (error) {
      console.log(error);
    }
  }

  console.log("data12", data);
  return (
    <div style={{ backgroundColor: "white", borderRadius: "10px" }}>
      <h style={{ display: "flex", color: "blue", padding: "30px 0px 0px 20px", fontSize: "25px" }}>Reports</h>
      <Grid container style={{ paddingTop: "20px", display: "flex", flexDirection: "row" }}>
        {/* <h>report</h> */}
        {BlogSheet.map((blog, index) => (

          <Grid
            key={index}
            item
            xs={12}
            lg={4}
            sx={{
              display: "flex",
              alignItems: "stretch",
            }}
          >

            <Card
              variant="outlined"
              sx={{
                p: 0,
                width: "100%",
              }}
            >
              <img src={blog.image} alt="image" width="100%" height="55%" />
              <CardContent
                sx={{
                  paddingLeft: "35px",
                  paddingRight: "30px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "25px",
                    fontWeight: "600",
                  }}
                >
                  {blog.title}
                </Typography>
                <Typography
                  color="textSecondary"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    mt: 1,
                  }}
                >
                  {blog.button}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: "15px",
                  }}
                  color={blog.btncolor}
                onClick={handleGenerate}
                >
                  Generate {blog.title}
                </Button>

                {/* <Button
      variant="contained"
      sx={{
        mt: "15px",
      }}
      color={blog.btncolor}
    >
      Generate Income Statement
    </Button> */}


              </CardContent>
            </Card>

          </Grid>

        ))}

        <Grid

          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >

          <Card
            variant="outlined"
            sx={{
              p: 0,
              width: "100%",
            }}
          >
            <form onSubmit={handleSubmit} style={{ justifyContent: "center", alignItems: "center" }}>
              <label>Start Date:</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}

              />
              <label>End Date:</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />

              <button type="submit" >Generate</button>
            </form>

          </Card>
        </Grid>
      </Grid>
    </div>
  )

}
export default CardSheet;