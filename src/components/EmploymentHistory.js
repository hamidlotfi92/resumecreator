//React
import React, { useState, memo } from "react";
//MUI
import { Button, Grid } from "@mui/material";

import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { useTheme } from "@emotion/react";
//components
import EduPreview from "./EduPreview";
import EmploymentPreview from "./EmploymentPreview";
// this component is shown as the second step in resume makinh stepper
const EmplymentHistory = ({
  setEducationArray,
  educationArray,
  setEmploymentArray,
  employmentArray,
}) => {
  const [education, setEducation] = useState({
    degree: null,
    course: null,
    university: null,
    city: null,
    achivements: null,
  });
  const [employment, setEmployment] = useState({});
  const theme = useTheme();
  const handeEduChange = (e) => {
    setEducation({ ...education, [e.target.id]: e.target.value });
  };
  const handleEmploymentChange = (e) => {
    setEmployment({ ...employment, [e.target.id]: e.target.value });
  };

  const addToEduArray = () => {
    if (education.university !== null) {
      const newEduArray = educationArray.slice();
      newEduArray.push(education);
      setEducationArray(newEduArray);
      setEducation({
        degree: null,
        course: null,
        university: null,
        city: null,
        achivements: null,
      });
    }
  };
  const addToEmplymentArray = () => {
    if (employment.company) {
      const newEmpArray = employmentArray.slice();
      newEmpArray.push(employment);
      setEmploymentArray(newEmpArray);
    }
  };

  const deleteEduFromArray = (e) => {
    const newArray = educationArray.filter(
      (edu) => edu !== educationArray[e.target.id]
    );
    setEducationArray(newArray);
  };

  const deleteEmploymentFromArray = (e) => {
    const newArray = employmentArray.filter(
      (emp) => emp !== employmentArray[e.target.id]
    );
    setEmploymentArray(newArray);
  };
  return (
    <Grid
      item
      sx={{
        backgroundColor: theme.palette.background.default,
        maxWidth: "45em !important",
      }}
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item>
        <Typography
          sx={{
            paddingTop: "1em",
            color: (theme) => theme.palette.text.primary,
          }}
          variant="h3"
        >
          تحصیلات
        </Typography>
      </Grid>
      <Grid item xs={1} sm={2}>
        <TextField
          id="degree"
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
          value={educationArray.degree}
          label="مقطع"
          variant="standard"
          onChange={handeEduChange}
        />
        <TextField
          id="course"
          value={educationArray.course}
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
          label=" رشته"
          variant="standard"
          onChange={handeEduChange}
        />
      </Grid>

      <Grid item xs={1} sm={2}>
        <TextField
          id="university"
          value={educationArray.university}
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
          label="دانشگاه"
          variant="standard"
          onChange={handeEduChange}
        />
        <TextField
          id="city"
          value={educationArray.city}
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
          label="شهر"
          variant="standard"
          onChange={handeEduChange}
        />
      </Grid>

      <Grid
        alignItems="center"
        direction="column"
        sx={{ width: { xs: "100%", sm: "34em" } }}
        item
        container
      >
        <TextField
          id="achivements"
          value={educationArray.achivements}
          sx={{
            marginTop: "4em",

            width: { xs: "90%", sm: "34em" },
            "& textarea": {
              textAlign: "right",
              paddingRight: "0.5em",
            },
          }}
          label="پروژه و دست آوردها"
          multiline
          placeholder="اگر پروژه یا دست آورد جالب توجهی داشتی توی این قسمت بنویس"
          rows={4}
          onChange={handeEduChange}
        />
        <Button
          color="secondary"
          sx={{ marginTop: "1em" }}
          size="large"
          variant="outlined"
          onClick={addToEduArray}
        >
          اضافه کن
        </Button>
      </Grid>

      {educationArray.map((edu, index) => (
        <EduPreview
          key={index}
          city={edu.city}
          course={edu.course}
          achivement={edu.achivements}
          degree={edu.degree}
          university={edu.university}
          deleteEduFromArray={deleteEduFromArray}
          index={index}
        />
      ))}
      <Grid item>
        <Typography
          sx={{
            paddingTop: "1.5em",
            color: (theme) => theme.palette.text.primary,
          }}
          variant="h3"
        >
          سوابق شغلی
        </Typography>
      </Grid>
      <Grid item xs={1} sm={2}>
        <TextField
          id="title"
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
          label="عنوان"
          variant="standard"
          onChange={handleEmploymentChange}
        />
        <TextField
          id="company"
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
          label=" شرکت"
          variant="standard"
          onChange={handleEmploymentChange}
        />
      </Grid>

      <Grid item xs={1} sm={2}>
        <TextField
          id="duration"
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
          label="مدت"
          variant="standard"
          onChange={handleEmploymentChange}
        />
        <TextField
          id="city"
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
          label="شهر"
          variant="standard"
          onChange={handleEmploymentChange}
        />
      </Grid>

      <Grid
        alignItems="center"
        direction="column"
        sx={{ width: { xs: "100%", sm: "34em" } }}
        item
        container
      >
        <TextField
          id="achivements"
          sx={{
            marginTop: "4em",

            width: { xs: "90%", sm: "34em" },
            "& textarea": {
              textAlign: "right",
              paddingRight: "0.5em",
            },
          }}
          label="پروژه و دست آوردها"
          multiline
          placeholder="اگر پروژه یا دست آورد جالب توجهی داشتی توی این قسمت بنویس"
          rows={4}
          onChange={handleEmploymentChange}
        />
        <Button
          color="secondary"
          sx={{ marginTop: "1em" }}
          size="large"
          variant="outlined"
          onClick={addToEmplymentArray}
        >
          اضافه کن
        </Button>
      </Grid>
      {employmentArray.map((emp, index) => (
        <EmploymentPreview
          key={index + emp.company}
          city={emp.city}
          company={emp.company}
          achivement={emp.achivements}
          duration={emp.duration}
          title={emp.title}
          deleteEmploymentFromArray={deleteEmploymentFromArray}
          index={index}
        />
      ))}
      <Grid
        sx={{ marginTop: "3em", width: { xs: "100%", sm: "34em" } }}
        item
        container
        alignItems="center"
        direction="column"
      ></Grid>
    </Grid>
  );
};

export default EmplymentHistory;
