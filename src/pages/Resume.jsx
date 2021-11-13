//React
import React, { useState, useEffect } from "react";

//MUI
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Collapse } from "@mui/material";
import { Alert } from "@mui/material";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useTheme } from "@mui/system";
//Components
import PersonalInfo from "../components/PersonalInfo";
import EmplymentHistory from "../components/EmploymentHistory";
import Print from "../components/Print";
const steps = ["اطلاعات شخصی", "سوابق", "تایید"];

const Resume = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const theme = useTheme();
  //the states needed for resume are all here and are passed to each component if needed.
  //we can use redux or context to avoid passing data through but it's just 1 layer and not that complicated.
  const [preview, setPreview] = useState();
  const [skillsArray, setSkillsArray] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [openSnack, setOpenSnack] = React.useState(false);
  const [educationArray, setEducationArray] = useState([]);
  const [employmentArray, setEmploymentArray] = useState([]);
  const [personInfo, setPersonInfo] = useState({});
  // this hooked is used to hande termporarly saving user image, it is not aploading anywhere, just holding the seleced file in state as urlobject.
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  // specifies if a step is optional in Stepper component
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  // stepper component next handler
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    //only shows the warning by clicking on next for the first step
    if (activeStep === 0) {
      setOpenSnack(true);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  //i assume it's clear what it handles :D
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  //i assume it's clear what it handles :D
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  // reset all the states regarding user information
  const handleReset = () => {
    setActiveStep(0);
    setPreview(undefined);
    setSkillsArray([]);
    setSelectedFile(undefined);
  };
  //switches between steps according to activestep
  const renderSwitch = (param) => {
    switch (param) {
      case 0:
        return (
          <PersonalInfo
            personInfo={personInfo}
            setPersonInfo={setPersonInfo}
            preview={preview}
            setPreview={setPreview}
            skillsArray={skillsArray}
            setSkillsArray={setSkillsArray}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
        );
        break;
      case 1:
        return (
          <EmplymentHistory
            educationArray={educationArray}
            setEducationArray={setEducationArray}
            employmentArray={employmentArray}
            setEmploymentArray={setEmploymentArray}
          />
        );

        break;
      // this code is for testing pdf creation and is not ready yet
      case 2:
        return (
          <Print
            preview={preview}
            skillsArray={skillsArray}
            personInfo={personInfo}
            educationArray={educationArray}
            employmentArray={employmentArray}
          />
        );
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,

        backgroundImage: `radial-gradient(#444cf7 1.4000000000000001px, transparent 1.4000000000000001px), radial-gradient(#444cf7 1.4000000000000001px,${theme.palette.background.default} 1.4000000000000001px)`,
        backgroundSize: "56px 56px",
        backgroundPosition: "0 0,28px 28px",
        backgroundAttachment: "fixed",

        width: "100%",
        "& .MuiAlert-message": { marginLeft: "auto" },
      }}
    >
      <Collapse in={openSnack}>
        <Alert
          severity="warning"
          variant="filled"
          action={
            <IconButton
              sx={{ maxWidth: "10%" }}
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenSnack(false);
              }}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          حواست باشه٫ مواردی که وارد نکردی اصلا به رزومه اضافه نمیشن
        </Alert>
      </Collapse>
      <Stepper sx={{ marginBottom: "2em" }} activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">اختیاری</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>رزومه شما اماده شد</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              sx={{ margin: "2em" }}
              color="secondary"
              variant="outlined"
              onClick={handleReset}
            >
              رزومه جدید
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/*<Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>*/}
          {renderSwitch(activeStep)}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
              color="secondary"
              sx={{ mr: 2, ml: 2 }}
            >
              قبلی
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleSkip}
                sx={{ mr: 2, ml: 2 }}
              >
                رد کردن
              </Button>
            )}

            <Button
              sx={{ mr: 2, ml: 2 }}
              variant="outlined"
              color="secondary"
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? "پایان" : "بعدی"}
            </Button>
          </Box>
        </React.Fragment>
      )}
      <Box sx={{ paddingBottom: "4em" }}></Box>
    </Box>
  );
};
export default Resume;
