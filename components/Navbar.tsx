import MainGrid from "./MainGrid";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <MainGrid sx={{padding: 0}}>
      <Grid
        container
        item
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Button
            size="large"
            variant="text"
            color="primary"
            sx={{ color: "white" }}
            onClick={() => router.push("/")}
          >
            Home
          </Button>
        </Grid>
        <Grid item>
          <Button
            size="large"
            variant="text"
            color="primary"
            sx={{ color: "white" }}
            onClick={() => router.push("/about")}
          >
            About
          </Button>
        </Grid>
      </Grid>
    </MainGrid>
  );
};

export default Navbar;
