import { NextPage } from "next";
import Head from "next/head";
import MainGrid from "../components/MainGrid";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <MainGrid>
        <Grid container item direction="column" alignItems="center" spacing={2}>
          <Grid item mb={3}>
            <Typography textAlign="center" variant="body1" color="white">
              Aplikasi ini dibuat menggunakan Next.js
            </Typography>
          </Grid>
          <Grid item mb={3}>
            <Typography textAlign="center" variant="body1" color="white">
              Hubungi saya
              <br />
              GitHub:{" "}
              <a
                style={{ textDecoration: "none" }}
                href="https://github.com/fikrisyahid"
              >
                Fikri Syahid
              </a>
              <br />
              Discord: fs3120#9002
            </Typography>
          </Grid>
          <Grid item>
            <Button
              href="https://github.com/fikrisyahid/teks-bapak-converter#readme"
              variant="contained"
              color="secondary"
            >
              Go to GitHub page
            </Button>
          </Grid>
        </Grid>
      </MainGrid>
    </>
  );
};

export default About;
