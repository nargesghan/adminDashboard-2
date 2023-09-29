import { Button } from "@mui/material";
import styles from "../styles/Home.module.css";

import { Line } from 'react-chartjs-2';

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
 return (
   <Button sx={{backgroundColor:'primary.main'}}>Hello</Button>
 );
}