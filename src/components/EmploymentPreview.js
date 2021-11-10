//React
import React from "react";
//MUI
import { Grid, Paper, TextField, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
//this component is mapped for evry employment history user enters
const EmploymentPreview = ({
  title,
  duration,
  achivement,
  company,
  city,
  index,
  deleteEmploymentFromArray,
}) => {
  console.log(
    title + " در " + company + " شهر " + city + " به مدت " + duration
  );
  return (
    <Paper
      sx={{
        marginTop: "2em",
        width: { xs: "90%", sm: "34em" },
        marginLeft: "2em",
      }}
      variant="outlined"
    >
      <Grid sx={{ padding: "1em" }} container direction="column">
        <Close id={index} color="primary" onClick={deleteEmploymentFromArray} />
        <Grid item>
          <Typography align="right" variant="h5">
            {title + " در " + company + " شهر " + city + " به مدت " + duration}
          </Typography>
        </Grid>
        {achivement ? (
          <Grid sx={{ width: "100%" }} item>
            <TextField
              sx={{
                width: "100%",
                marginTop: "1em",
                "& textarea": { textAlign: "right" },
              }}
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              label="دست آوردها"
              value={achivement}
              multiline
            />
          </Grid>
        ) : null}
      </Grid>
    </Paper>
  );
};

export default EmploymentPreview;
