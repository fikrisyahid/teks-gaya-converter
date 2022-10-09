import type { NextPage } from "next";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MainGrid from "../components/MainGrid";
import converter from "../utils/converter";

const Home: NextPage = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleConvert = () => {
    const response = converter(input);
    setOutput(response);
  };

  return (
    <Grid container item>
      <MainGrid>
        <Grid container item mb={3}>
          <Grid container item direction="column" xs={6} spacing={2} paddingRight={1}>
            <Grid container item justifyContent="center">
              <Grid item>
                <Typography variant="h4" fontWeight={700} color="white">
                  Input
                </Typography>
              </Grid>
            </Grid>
            <Grid item >
              <TextField
                multiline
                fullWidth
                minRows={5}
                value={input}
                color="primary"
                onChange={(e) => setInput(e.target.value)}
                inputProps={{
                  style: { color: "white" },
                  spellCheck: false,
                }}
                sx={{ backgroundColor: "#29363f", borderRadius: 3 }}
              />
            </Grid>
          </Grid>
          <Grid container item direction="column" xs={6} spacing={2} paddingLeft={1}>
            <Grid container item justifyContent="center">
              <Grid item>
                <Typography variant="h4" fontWeight={700} color="white">
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
                  style: { color: "white" },
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
              sx={{ backgroundColor: "#6a329f" }}
            >
              Convert
            </Button>
          </Grid>
        </Grid>
      </MainGrid>
    </Grid>
  );
};

export default Home;
