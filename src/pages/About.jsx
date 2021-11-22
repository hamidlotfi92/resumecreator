//React
import React, { useState } from "react";
//MUI
import { Grid, Paper, Typography, TextField, Button } from "@mui/material";
import { useTheme } from "@emotion/react";
//Files
import me from "../assets/me.webp";
const About = () => {
  const theme = useTheme();
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Grid
      sx={{
        backgroundColor: theme.palette.background.default,

        backgroundImage: `radial-gradient(#444cf7 1.4000000000000001px, transparent 1.4000000000000001px), radial-gradient(#444cf7 1.4000000000000001px,${theme.palette.background.default} 1.4000000000000001px)`,
        backgroundSize: "56px 56px",
        backgroundPosition: "0 0,28px 28px",
        backgroundAttachment: "fixed",
      }}
      container
      direction="column"
      alignItems="center"
    >
      <Grid sx={{ "& img": { width: { sm: "15em", xs: "10em" } } }} item>
        <img src={me} alt="me" />
      </Grid>
      <Grid item>
        <Paper sx={{ margin: "2em", padding: "2em" }}>
          <Typography textAlign="center" variant="h5">
            {" "}
            من حجت لطفی پور هستم و این وب اپلیکیشن رو برای ساخت راحت رزومه های
            ساده ساختم
            <br />{" "}
          </Typography>
          <Typography sx={{ marginTop: "1em" }} textAlign="center" variant="h6">
            این وب اپلیکیشن هنوز کامل نیست و به مرور قالب های جدید بهش اضافه
            میشه
          </Typography>
          <Typography sx={{ marginTop: "1em" }} textAlign="center" variant="h6">
            چند تا نکته
          </Typography>
          <Typography
            sx={{ direction: "rtl", lineHeight: 2.6 }}
            textAlign="center"
            variant="h6"
          >
            این اپلیکیشن هنوز کارایی بهینه نداره و به مرور بهینه تر میشه
            <br />
            اپن سورس هست و میتونید توی بهتر کردنش سهیم باشید
            <br />
            اگر میتونید با jsPDF کار کنید و قالب بسازید کافیه توی سورس اپلیکیشن
            فایل Print.jsx از پوشه components تغییر بدید
            <br />
            همچنین خوشحال میشم اگر سوال یا پیشنهادی داشتید از طریق فرم زیر با من
            در ارتباط باشید
          </Typography>
        </Paper>
      </Grid>
      <Paper
        sx={{
          padding: "2em",
          marginBottom: "3em",
        }}
      >
        <Grid container alignItems="center" direction="column">
          <TextField
            id="name"
            label="متن پیام"
            multiline
            rows={5}
            variant="outlined"
            onChange={handleChange}
          />

          <Button
            sx={{ marginTop: "1em" }}
            variant="outlined"
            color="secondary"
            href={`mailto:lotfipour.hamid@gmail.com?&subject=ResumeCreator&body=${message}`}
          >
            ارسال
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default About;
