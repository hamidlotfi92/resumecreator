//React

import React, { useState, useEffect } from "react";
//MUI
import { Button, Grid, Paper, Slider, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box, grid, width } from "@mui/system";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import { useMediaQuery, useTheme } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import AdapterJalali from "@date-io/date-fns-jalali";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

//Jalali moment
import moment from "jalali-moment";

//components
import Skill from "./Skill";

//this compnent is where user enters personal information,
const PersonalInfo = ({
  preview,
  setPreview,
  skillsArray,
  setSkillsArray,
  selectedFile,
  setSelectedFile,
  setPersonInfo,
  personInfo,
}) => {
  const [skill, setSkill] = useState({ name: "", level: 1 });
  const [dateValue, setDateValue] = React.useState(new Date());
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLg = useMediaQuery(theme.breakpoints.down("lg"));

  // create a preview as a side effect, whenever selected file is changed

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };
  // this function changes the skill name before adding to skill array
  const handleSkillChange = (e) => {
    setSkill({ ...skill, name: e.target.value });
  };
  // this function changes the skill level before adding to skill array
  const setSkillLevel = (e) => {
    setSkill({ ...skill, level: e.target.value });
  };
  //this function changes the skill level after being added to skill array
  const changeSkillLevel = (e) => {
    const newArray = skillsArray.slice();
    const index = newArray.findIndex((skill) => skill.name === e.target.name);
    newArray[index] = { name: e.target.name, level: e.target.value };
    setSkillsArray(newArray);
  };
  const deleteSkill = (e) => {
    const newArray = skillsArray.filter((skill) => skill.name !== e.target.id);
    console.log(e.target.id);
    setSkillsArray(newArray);
  };

  const handleChange = (e) => {
    if (!e.target) {
      setPersonInfo({ ...personInfo, birthDate: e.inputProps.value });
    } else {
      setPersonInfo({ ...personInfo, [e.target.id]: e.target.value });
    }
    console.log(e);
  };
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid
        sx={{ maxWidth: "45em !important" }}
        item
        direction={matchesSm ? "column" : "row"}
        justifyContent="space-around"
        alignItems="center"
        container
      >
        <Grid item>
          <Typography variant="h4">انتخاب عکس</Typography>
        </Grid>
        <Grid item sx={{ "& img": { maxWidth: { xs: "13em", sm: "20em" } } }}>
          <label style={{ "&:hover": { cursor: "pointer" } }} for="fileInput">
            {!preview ? (
              <UploadFileRoundedIcon
                color="secondary"
                sx={{ fontSize: "9rem" }}
              />
            ) : (
              <img src={preview} alt="person's preview" />
            )}
          </label>
          <input
            id="fileInput"
            style={{ display: "none" }}
            type="file"
            accept="image/*"
            onChange={onSelectFile}
          />
        </Grid>
      </Grid>
      <Grid item x xs={1} sm={2}>
        <TextField
          sx={{
            textAlign: "right",
            marginTop: "1em",
            marginLeft: "2em",
            width: { xs: "90%", sm: "16em" },
            "& input": {
              textAlign: "right",
              paddingRight: "0.5em",
              fontSize: "1.5rem",
            },
          }}
          onChange={handleChange}
          label="نام"
          variant="standard"
          id="firstName"
        />
        <TextField
          sx={{
            marginTop: "1em",
            marginLeft: "2em",
            width: { xs: "90%", sm: "16em" },
            "& input": {
              textAlign: "right",
              paddingRight: "0.5em",
              fontSize: "1.5rem",
            },
          }}
          size="normal"
          label="نام خانوادگی"
          variant="standard"
          id="lastName"
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={1} sm={2}>
        <TextField
          sx={{
            textAlign: "right",
            marginTop: "1em",
            marginLeft: "2em",
            width: { xs: "90%", sm: "16em" },
            "& input": {
              textAlign: "right",
              paddingRight: "0.5em",
              fontSize: "1.5rem",
            },
          }}
          label="ایمیل"
          variant="standard"
          id="email"
          onChange={handleChange}
        />
        <TextField
          sx={{
            marginTop: "1em",
            marginLeft: "2em",
            width: { xs: "90%", sm: "16em" },
            "& input": {
              textAlign: "right",
              paddingRight: "0.5em",
              fontSize: "1.5rem",
            },
          }}
          size="normal"
          label="همراه"
          variant="standard"
          id="mobileNumber"
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={1} sm={2}>
        <TextField
          sx={{
            textAlign: "right",
            marginTop: "1em",
            marginLeft: "2em",
            width: { xs: "90%", sm: "16em" },
            "& input": {
              textAlign: "right",
              paddingRight: "0.5em",
              fontSize: "1.5rem",
            },
          }}
          label="سن"
          variant="standard"
          id="age"
          onChange={handleChange}
        />
        <TextField
          sx={{
            marginTop: "1em",
            marginLeft: "2em",
            width: { xs: "90%", sm: "16em" },
            "& input": {
              textAlign: "right",
              paddingRight: "0.5em",
              fontSize: "1.5rem",
            },
          }}
          size="normal"
          label="تاریخ تولد"
          variant="standard"
          placeholder="YYYY/MM/DD "
          id="birthDate"
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <TextField
          sx={{
            marginTop: "4em",
            marginLeft: "2em",
            width: { xs: "90%", sm: "34em" },
            "& input": {
              textAlign: "right",
              paddingRight: "0.5em",
              fontSize: "1.5rem",
            },
          }}
          label="خلاصه حرفه ای"
          multiline
          placeholder="چند جمله مختصر و پر انرژی درباره خودت دست آوردهات و بهترین مهارت هات"
          rows={4}
          id="summery"
          onChange={handleChange}
        />
      </Grid>
      <Grid
        sx={{ marginTop: "3em", width: { xs: "100%", sm: "34em" } }}
        item
        container
        alignItems="center"
        direction="column"
      >
        <Grid item>
          <Typography variant="h3">مهارت ها</Typography>
        </Grid>
        <Grid
          sx={{ width: { xs: "100%", sm: "34em" } }}
          justifyContent="center"
          item
          container
          direction="row"
        >
          <Grid item xs={8}>
            <TextField
              sx={{
                marginTop: "1em",
                marginLeft: "2em",
                width: { xs: "90%", sm: "16em" },
                "& input": {
                  textAlign: "right",
                  paddingRight: "0.5em",
                  fontSize: "1.5rem",
                },
              }}
              id="standard-basic"
              label="عنوان مهارت"
              variant="standard"
              onChange={handleSkillChange}
            />
            <Slider
              sx={{
                marginTop: "2em",
                marginLeft: "2em",
                width: { xs: "70%", sm: "13em" },
              }}
              aria-label="Skill"
              defaultValue={1}
              valueLabelDisplay="auto"
              onChange={setSkillLevel}
              step={1}
              marks
              min={1}
              max={5}
              color="secondary"
            />
          </Grid>
          <Grid sx={{ textAlign: "center", alignSelf: "center" }} item xs={4}>
            <AddCircleRoundedIcon
              onClick={() => {
                const newSkill = skillsArray.slice();
                newSkill.push(skill);
                setSkillsArray(newSkill);
              }}
              color="secondary"
              sx={{ fontSize: "4rem" }}
            />
          </Grid>
          {skillsArray.map((skill) => (
            <Paper
              variant="outlined"
              sx={{ width: "100%", margin: ".5em 0", height: "4em" }}
            >
              <Skill
                deleteSkill={deleteSkill}
                name={skill.name}
                level={skill.level}
                changeSkillLevel={changeSkillLevel}
              />
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
