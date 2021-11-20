import { Grid, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h3">معرفی</Typography>
      </Grid>
      <Grid>
        <Typography variant="h4">
          {" "}
          من حجت لطفی پور هستم و این وب اپلیکیشن رو برای ساخت راحت رزومه ساده
          ساختم
          <br />{" "}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
