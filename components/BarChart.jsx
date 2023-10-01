import React from "react";
import { Grid, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ReactSVG } from "react-svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels: labels,
  datasets: [
    {
      label: "Volume",
      backgroundColor: "#A9DFD8",
      borderRadius: "4px",
      barThickness: 14,
      stack: 1,
      borderRadius: {
        topLeft: 4,
        topRight: 4,
        bottomLeft: 0,
        bottomRight: 0,
      },
      data: [20, 80, 59, 10, 70, 55],
    },
    {
      label: "Service",
      backgroundColor: "#2B2B36",
      barThickness: 14,
      stack: 1,
      borderRadius: {
        topLeft: 4,
        topRight: 4,
        bottomLeft: 0,
        bottomRight: 0,
      },
      data: [45, 79, 110, 41, 16, 85],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      postition: "bottom",
    },
    chartAreaBorder: {
      borderColor: "#FFFFFF",
      borderWidth: 2,

      borderDashOffset: 2,
    },
  },
  type: "bar",
  scales: {
    xAxes: [
      {
        stacked: true,
        ticks: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        stacked: true,
      },
    ],

    y: {
      display: false, // this will hide the y-axis label
    },
    x: {
      display: false, // this will hide the y-axis label
    },
  },
};

const BarChart = () => {
  return (
    <Grid
      container
      alignItems={"start"}
      sx={{
        width: "238px",
        height: "201px",
        borderRadius: "10px",
        backgroundColor: "primary.main",
        pl: "20px",
        pb: "20px",
        pt:'20px'
      }}
    >
      <Typography
        variant="h4"
        sx={{ width: "fit-content", height: "fit-content" }}
      >
        Level
      </Typography>
      <Bar options={options} data={data} />
      <Grid container direction={'row'}>
        <Grid item xs={5}container direction={'row'} alignItems={'center'}>
          <ReactSVG src="/images/VolumeBarchart.svg"/>
            <Typography variant="subtitle1" sx={{margin:'10px'}}>Volume</Typography>
        
        </Grid>
        <Grid item xs={2}><ReactSVG src="/images/LineBarChart.svg"/></Grid>
        
        <Grid item xs={5} container direction={'row'} alignItems={'center'}>
          <ReactSVG src="/images/ServiseBarchart.svg"/>
            <Typography variant="subtitle1" sx={{margin:'10px'}}>Service</Typography>
          
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BarChart;
