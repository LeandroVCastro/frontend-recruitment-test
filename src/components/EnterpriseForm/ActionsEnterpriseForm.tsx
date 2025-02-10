import { Button, DialogActions } from "@mui/material";

type ActionsEnterpriseFormProps = {
  close: () => void;
  loading: boolean;
};

export const ActionsEnterpriseForm = (props: ActionsEnterpriseFormProps) => {
  return (
    <DialogActions>
      <Button onClick={props.close} disabled={props.loading}>
        Cancel
      </Button>
      <Button type="submit" variant={`contained`} disabled={props.loading}>
        Save
      </Button>
    </DialogActions>
  );
};
