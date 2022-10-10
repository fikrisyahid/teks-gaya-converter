import type { NextPage } from "next";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MainGrid from "../components/MainGrid";
import Head from "next/head";
import MenuItem from "@mui/material/MenuItem";
import Alert from "../components/Alert";
import { bapackConverter, jametConverter } from "../utils/converter";

const Home: NextPage = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("0");
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleConvert = () => {
    if (mode === "0") {
      setAlertMessage("Pilih mode terlebih dahulu");
      setAlertOpen(true);
      return;
    }
    if (mode === "bapack2") {
      setOutput(bapackConverter(input));
    }
    if (mode === "jamet") {
      setOutput(jametConverter(input));
    }
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Alert
        open={alertOpen}
        message={alertMessage}
        handleCloseDialog={() => setAlertOpen(false)}
      />
      <Grid container item>
        <MainGrid>
          <Grid container item mb={3}>
            <Grid container item justifyContent="center">
              <Grid item>
                <TextField
                  select
                  value={mode}
                  onChange={(e) => setMode(e.target.value)}
                  sx={{ backgroundColor: "#29363f", borderRadius: 3 }}
                >
                  <MenuItem value="0" disabled>
                    Pilih mode
                  </MenuItem>
                  <MenuItem value="bapack2">Bapack2</MenuItem>
                  <MenuItem value="jamet">Jamet FB 2009</MenuItem>
                </TextField>
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction="column"
              xs={6}
              spacing={2}
              paddingRight={1}
            >
              <Grid container item justifyContent="center">
                <Grid item>
                  <Typography variant="h4" fontWeight={700}>
                    Input
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <TextField
                  multiline
                  fullWidth
                  minRows={5}
                  value={input}
                  color="primary"
                  onChange={(e) => setInput(e.target.value)}
                  inputProps={{
                    spellCheck: false,
                  }}
                  sx={{ backgroundColor: "#29363f", borderRadius: 3 }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction="column"
              xs={6}
              spacing={2}
              paddingLeft={1}
            >
              <Grid container item justifyContent="center">
                <Grid item>
                  <Typography variant="h4" fontWeight={700}>
                    Output
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <TextField
                  multiline
                  fullWidth
                  minRows={5}
                  value={output}
                  onChange={(e) => setOutput(e.target.value)}
                  inputProps={{
                    spellCheck: false,
                  }}
                  sx={{ backgroundColor: "#29363f", borderRadius: 3 }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container item justifyContent="center">
            <Grid item>
              <Button
                size="large"
                variant="contained"
                color="secondary"
                onClick={handleConvert}
                sx={{ color: "white", backgroundColor: "#6a329f" }}
              >
                Convert
              </Button>
            </Grid>
          </Grid>
        </MainGrid>
      </Grid>
    </>
  );
};

export default Home;
