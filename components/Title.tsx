import MainGrid from "./MainGrid";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Title = () => {
  return (
    <Grid container mb={3} justifyContent="center">
      <Typography variant="h2" fontWeight={700} color="white">
        Teks Bapak Converter
      </Typography>
    </Grid>
  );
};

export default Title;
