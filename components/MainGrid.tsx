import { SxProps, Theme } from "@mui/material";
import Grid from "@mui/material/Grid";

interface MainGridProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const MainGrid = ({ children, sx }: MainGridProps) => {
  return (
    <Grid
      container
      item
      direction="column"
      sx={{
        marginBottom: 3,
        backgroundColor: "#172731",
        borderRadius: 3,
        padding: 2,
        ...sx,
      }}
    >
      {children}
    </Grid>
  );
};

export default MainGrid;
