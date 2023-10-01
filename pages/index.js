import Summery from "@/components/Summery";
import BarChart from "@/components/BarChart";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <>
      <Grid container direction='row' justifyContent={'left'}>
        <Grid item xs={8}><Summery /></Grid>
        <Grid item xs={4}><BarChart /></Grid>
        
      </Grid>
    </>
  );
}
