import { Grid } from "@mui/material";

const ResponsiveGrid = () => {
  return (
    <div>
      \
      <Grid container>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={3}
          xl={1}
          sx={{ background: "red" }}
          spacing={2}
        >
          Content A
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={3}
          xl={1}
          sx={{ background: "green" }}
        >
          Content B
        </Grid>
      </Grid>
    </div>
  );
};

export default ResponsiveGrid;
