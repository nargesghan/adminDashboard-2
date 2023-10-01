import * as React from "react";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { ReactSVG } from "react-svg";


export default function SummeryCard({ icon, first, second, thired, color }) {
  return (
 
    
      <CardContent
        sx={{
          width: "104px",
          height: "107px",
          backgroundColor: "primary.dark",
          padding: "10px",
          borderRadius:'10px'
      
        }}
      >
        <ReactSVG src={`/images/${icon}`} width={"26px"} alt={first} />
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: 600,
            lineHeight: "30px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#FFFFFF",
          }}
        >
          {first}
        </Typography>
        <Typography
          sx={{
            fontSize: "10px",
            fontWeight: 500,
            lineHeight: "16px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#E8E8E8",
          }}
        >
          {second}
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "8px",
            lineHeight: "16px",
            color: { color },
          }}
        >
          {thired}
        </Typography>
      </CardContent>
 
  );
}
