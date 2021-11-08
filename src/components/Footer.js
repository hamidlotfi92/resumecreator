//React
import React from "react";

// MUI
import { Box } from "@mui/system";
import { Grid, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Grid
      sx={{ height: "20em", backgroundColor: "#e0e0e0" }}
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item justifyContent="center">
        <Typography variant="h5" center>
          این سایت یک پروژه متن باز و برای استفاده همه است{" "}
        </Typography>
      </Grid>
      <Grid item>
        <IconButton
          component="a"
          href="https://github.com/hamidlotfi92/resumecreator"
        >
          <GitHubIcon color="secondary" sx={{ fontSize: "4rem" }} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Footer;