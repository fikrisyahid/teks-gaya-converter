import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";
import Title from "./Title";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid container sx={{ padding: 2 }}>
      <Title />
      <Navbar />
      {children}
    </Grid>
  );
};

export default Layout;
