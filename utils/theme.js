import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
 palette: {
   primary: {
     main: "#21222D",
     dark:'#171821',
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