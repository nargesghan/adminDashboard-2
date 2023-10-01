import React from "react";
import SummeryCard from "./SummeryCard";
import { Grid, Typography } from "@mui/material";
const Summery = () => {
  const SummeryData = [
    {
      icon: "TotalSales.svg",
      first: "$5k",
      second: "Total Sales",
      thired: "+10% from yesterday",
      color: "#FEB95A",
    },
    {
      icon: "TotalOrder.svg",
      first: "500",
      second: "Total Order",
      thired: "+8% from yesterday",
      color: "#A9DFD8",
    },
    {
      icon: "ProductSold.svg",
      first: "9",
      second: "Product Sold",
      thired: "+2% from yesterday",
      color: "#F2C8ED",
    },
    {
      icon: "NewCustomer.svg",
      first: "12",
      second: "New Customer",
      thired: "+3% from yesterday",
      color: "#20AEF3",
    },
  ];

  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"space-evenly"}
      direction={"row"}
      sx={{
        backgroundColor: "primary.main",
        borderRadius: "10px",
        width: "504px",
        height: "201px",
      }}
    >
      <Grid item xs={12} sx={{ pl: "20px" }}>
        <Typography variant="h4">Today's Sales</Typography>
        <Typography variant="subtitle1">Sales Summery</Typography>
      </Grid>

      {SummeryData.map((item) => {
        return (
          <SummeryCard
            key={item.first}
            icon={item.icon}
            first={item.first}
            second={item.second}
            thired={item.thired}
            color={item.color}
          />
        );
      })}
    </Grid>
  );
};

export default Summery;
