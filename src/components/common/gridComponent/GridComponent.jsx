import { Box, Grid } from "@mui/material";

export const GridComponent = () => {
  return (
    <Box
      sx={{
        backgroundColor: { xs: "red", sm: "steelblue" },
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          //   sx={{ display: { xs: "block", sm: "none" } }}
          // sx={{margin: {xs: "100px", sm: "20px"}}}
        >
          <h2 style={{ border: "2px solid red", width: "100%" }}>Hola</h2>
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <h2 style={{ border: "2px solid blue", width: "100%" }}>Hola</h2>
        </Grid>
      </Grid>
    </Box>
  );
};