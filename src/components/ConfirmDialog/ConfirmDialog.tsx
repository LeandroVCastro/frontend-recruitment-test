import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

type ConfirmDialogProps = {
  open: boolean;
  onClose: (ok: boolean) => Promise<void>;
};

export const ConfirmDialogComponent = (props: ConfirmDialogProps) => {
  const handleCancel = async () => {
    await props.onClose(false);
  };

  const handleOk = async () => {
    await props.onClose(true);
  };
  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
      maxWidth="xs"
      open={props.open}
    >
      <DialogTitle color="primary">Are you sure?</DialogTitle>
      <DialogContent>
        <Typography variant="body1">This action cannot be undone.</Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk} color="error" variant={"contained"}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
