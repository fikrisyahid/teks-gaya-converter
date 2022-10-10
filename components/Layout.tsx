import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";
import Title from "./Title";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container sx={{ padding: 2 }}>
        <Title />
        <Navbar />
        {children}
      </Grid>
    </ThemeProvider>
  );
};

export default Layout;
