//React
import React from "react";

//MUI
import { Grid, Typography } from "@mui/material";
import { Slider } from "@mui/material";
import { Close } from "@mui/icons-material";

const Skill = ({ name, level, changeSkillLevel, deleteSkill }) => {
  return (
    <Grid
      sx={{ width: "100%", height: "4em" }}
      alignItems="center"
      container
      direction="row"
    >
      <Grid item xs={4}>
        <Typography sx={{ justifySelf: "center" }} align="center" variant="h6">
          {name}
        </Typography>
      </Grid>
      <Grid
        item
        justifyContent="space-between"
        container
        alignItems="center"
        direction="row"
        xs={8}
      >
        <Grid item>
          <Slider
            name={name}
            sx={{
              marginLeft: "2em",
              width: { xs: "70%", sm: "13em" },
            }}
            aria-label="Skill"
            defaultValue={level}
            valueLabelDisplay="auto"
            onChange={changeSkillLevel}
            value={level}
            step={1}
            marks
            min={1}
            max={5}
            color="secondary"
          />
        </Grid>
        <Grid item>
          <Close
            color="primary"
            sx={{ fontSize: "3rem", marginRight: "0.5em" }}
            id={name}
            onClick={deleteSkill}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Skill;
