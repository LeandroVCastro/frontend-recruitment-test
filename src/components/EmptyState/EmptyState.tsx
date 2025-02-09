import { Box, Typography } from "@mui/material";
import emptyImage from "../../../src/assets/images/empty.png";
import Grid, { Grid2Props } from "@mui/material/Grid2";

interface EmptyStateProps extends Grid2Props {}

export const EmptyStateComponent = (props: EmptyStateProps) => {
  return (
    <Grid
      container
      direction={`column`}
      gap={2}
      alignItems={`center`}
      {...props}
    >
      <img src={emptyImage} alt={`Empty`} className="w-32" />
      <Typography
        color="primary"
        variant="overline"
        className="font-semibold text-xl"
      >
        No records found
      </Typography>
    </Grid>
  );
};
