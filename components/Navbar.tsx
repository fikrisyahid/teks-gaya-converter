import MainGrid from "./MainGrid";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <MainGrid>
      <Grid container item direction="column">

        <Grid
          container
          item
          spacing={2}
          justifyContent="center"
          alignItems="center"
          xs={6}
        >
          <Grid item>
            <Button size="large" variant="text" color="primary" sx={{color: "white"}}>
              Home
            </Button>
          </Grid>
          <Grid item>
            <Button size="large" variant="text" color="primary" sx={{color: "white"}}>
              About
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </MainGrid>
  );
};

export default Navbar;
