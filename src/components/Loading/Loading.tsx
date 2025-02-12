import { CircularProgress, Typography } from "@mui/material";
import React from "react";
import Grid, { Grid2Props } from "@mui/material/Grid2";

interface LoadingProps extends Grid2Props {}

export const LoadingComponent = (props: LoadingProps) => {
  return (
    <Grid
      container
      direction={`column`}
      gap={2}
      alignItems={`center`}
      {...props}
    >
      <React.Fragment>
        <svg width={0} height={0}>
          <defs>
            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e01cd5" />
              <stop offset="100%" stopColor="#1CB5E0" />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgress
          thickness={6}
          sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
        />
      </React.Fragment>
      <Typography
        color="primary"
        variant="overline"
        className="font-semibold text-xl"
      >
        Loading
      </Typography>
    </Grid>
  );
};
