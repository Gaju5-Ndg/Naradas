import React from "react";
import { Grid, Box } from "@material-ui/core";
import SmallestCard from "./dashboard1-components/smallestCard";
import RunOutStock from "./dashboard1-components/runOutStock";

import {
  BlogCard,
  SalesOverview,
  ProductPerformance,
  DailyActivities,
} from "./dashboard1-components";
import TopSelling from "./dashboard1-components/topSelling";
import jwtDecode from "jwt-decode";

const Dashboard1 = () => {
  const token = localStorage.getItem("token");
  const userToken = jwtDecode(token);
  console.log("too", userToken.id.role);

  return (
    <Box style={{ backgroundColor: "#F5F5F5" }}>
      <Grid container spacing={0}>
        <SmallestCard />
        {/* ------------------------- row 1 ------------------------- */}
        <Grid item xs={12} lg={12}>
          <SalesOverview />
        </Grid>
        {/* addition row */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <RunOutStock />
          <TopSelling />
        </div>

        {/* ------------------------- row 2 ------------------------- */}
        {/* <Grid item xs={12} lg={4}>
          <DailyActivities />
        </Grid> */}
        {/* <Grid item xs={12} lg={8}>
          <ProductPerformance />
        </Grid> */}
        {/* ------------------------- row 3 ------------------------- */}
        {/* <BlogCard /> */}
      </Grid>
    </Box>
  );
};

export default Dashboard1;
