//React
import React from "react";
//MUI
import { Grid, Paper, TextField, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
const EduPreview = ({
  city,
  university,
  course,
  achivement,
  degree,
  deleteEduFromArray,
  index,
}) => {
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
        <Close id={index} color="primary" onClick={deleteEduFromArray} />
        <Grid item>
          <Typography align="right" variant="h5">
            {degree +
              " " +
              course +
              " " +
              "دانشگاه" +
              " " +
              university +
              " " +
              city}
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
              multiline
              label="دست آوردها"
              value={achivement}
            />
          </Grid>
        ) : null}
      </Grid>
    </Paper>
  );
};

export default EduPreview;
