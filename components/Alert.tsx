import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface AlertProps {
  open: boolean;
  message: string;
  handleCloseDialog: () => void;
}

const Alert = ({ open, message, handleCloseDialog }: AlertProps) => {
  return (
    <Dialog open={open}>
      <DialogContent sx={{ backgroundColor: "#29363f" }}>
        <Grid container direction="column" alignItems="center">
          <Grid item m={3}>
            <Typography variant="h5" textAlign="center">
              {message}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              type="button"
              color="info"
              onClick={handleCloseDialog}
              sx={{ color: "white", backgroundColor: "#293F95" }}
            >
              Close
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default Alert;
