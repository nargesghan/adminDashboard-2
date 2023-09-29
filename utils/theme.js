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
    600:'#87888C',

   }
 },
 typography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },
});