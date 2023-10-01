import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
 palette: {
   primary: {
     main: "#21222D",
     dark:'#171821',  
     light:'#2B2B36',
   },
   secondary:{
    main:'#A9DFD8'
   },
   grey:{
    400:'#D2D2D2',
    500:'#ABABAB',
    600:'#87888C',

   }
 },
 typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h4:{
      fontWeight: 600,
            fontSize: "15px",
            lineHeight: "18px",
            color: "#FFFFFF",
    },
    subtitle1:{
      fontWeight: 500,
      fontSize: "10px",
      lineHeight: "12px",
      color: "#A0A0A0",
    }
  },
  shape:{
    borderRadius:8
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 800,
      lg: 1200,
      xl: 1536,
    },
  },
});