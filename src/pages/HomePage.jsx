//React
import React from "react";

//MUI
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";

//svgs
import choice from "../assets/home-choice.svg";
import confusion from "../assets/home-confiusion.svg";
import help from "../assets/home-help.svg";
import responsive from "../assets/home-responsive.svg";
import bemyGuest from "../assets/beMyGuest.svg";

const HomePage = () => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLg = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <Grid
        container
        direction="column"
        sx={{
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <Grid
          sx={{
            marginTop: matchesSm ? "0em" : "2em",
            width: "100%",
          }}
          container
          alignItems="center"
          justifyContent="space-around"
          direction="column"
        >
          <Grid justifyContent="space-around" item>
            <img
              style={{
                height: "30em",
                maxWidth: "90%",
              }}
              src={help}
              alt=""
            />
          </Grid>
          <Paper sx={{ borderRadius: 7, maxWidth: "90%" }} variant="outlined">
            <Grid
              sx={{
                margin: "2em 0em",
                padding: matchesMd ? "0 1em" : 0,
                maxWidth: "25em",
              }}
              item
              container
              direction="column"
              alignItems="center"
            >
              <Typography
                sx={{ padding: "2" }}
                variant={matchesMd ? "h6" : "h5"}
                align="center"
              >
                من میدونم تحویل دادن رزومه ای که تمیز و مرتب باشه و نظر بقیه رو
                جلب کنه چقدر میتونه سخت باشه
              </Typography>
              <Typography sx={{ padding: "2" }} variant="body1" align="center">
                {" "}
                برا همین من اینجا هستم که بهت کمک کنم
              </Typography>
              <Button
                sx={{
                  marginTop: "1em",
                  backgroundColor: theme.palette.secondary.main,
                  color: "#fff",
                  fontWeight: 700,
                }}
                variant="outlined"
              >
                {" "}
                رزومه ت رو بساز
              </Button>
            </Grid>
          </Paper>
        </Grid>

        <Grid
          sx={{
            marginTop: matchesSm ? "6em" : "10em",
            width: "100%",
          }}
          container
          alignItems="center"
          justifyContent="space-around"
          direction={matchesMd ? "column-reverse" : "row"}
        >
          <Paper sx={{ borderRadius: 7, maxWidth: "90%" }} variant="outlined">
            <Grid
              sx={{
                margin: "2em",
                padding: matchesMd ? "0 1em" : 0,
                maxWidth: "25em",
              }}
              item
              alignItems="center"
            >
              <Typography
                sx={{ padding: "2" }}
                variant={matchesMd ? "h6" : "h5"}
                align="center"
              >
                فقط ۲٪ از کسانی که رزومه میفرستند از مرحله اول عبور میکنن
                <br /> جزء ۲٪ی ها باش
              </Typography>
              <Typography sx={{ padding: "2" }} variant="body1" align="center">
                {" "}
                از روزمه سازی استفاده کن که قوانین لازم برای دیده شدن رزومه را
                رعایت میکند
              </Typography>
            </Grid>
          </Paper>
          <Grid justifyContent="space-around" item>
            <img
              style={{
                marginTop: matchesMd ? "4em" : undefined,
                height: "19em",
                maxWidth: "100%",
              }}
              src={choice}
              alt=""
            />
          </Grid>
        </Grid>
        <Grid
          sx={{
            marginTop: matchesSm ? "6em" : "10em",
            width: "100%",
          }}
          container
          alignItems="center"
          justifyContent="space-around"
          direction="row"
        >
          <Grid justifyContent="space-around" item>
            <img
              style={{
                marginTop: matchesMd ? "4em" : undefined,
                height: matchesLg ? "12em" : "19em",
                maxWidth: "100%",
              }}
              src={confusion}
              alt=""
            />
          </Grid>
          <Paper sx={{ borderRadius: 7, maxWidth: "90%" }} variant="outlined">
            <Grid
              sx={{
                margin: "2em",
                padding: matchesMd ? "0 1em" : 0,
                maxWidth: "25em",
              }}
              item
              alignItems="center"
            >
              <Typography
                sx={{ padding: "2" }}
                variant={matchesMd ? "h6" : "h5"}
                align="center"
              >
                سادگی و سادگی
              </Typography>
              <Typography sx={{ padding: "2" }} variant="body1" align="center">
                {" "}
                ساده بودن روند وارد کردن اطلاعات و انتخاب راحت قالب ها به شما
                کمک میکند تا روی سایر مسائل مهم تمرکز کنید
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid
          sx={{
            marginTop: matchesSm ? "6em" : "10em",
            width: "100%",
          }}
          container
          alignItems="center"
          justifyContent="space-around"
          direction={matchesMd ? "column-reverse" : "row"}
        >
          <Paper sx={{ borderRadius: 7, maxWidth: "90%" }} variant="outlined">
            <Grid
              sx={{
                margin: "2em",
                padding: matchesMd ? "0 1em" : 0,
                maxWidth: "25em",
              }}
              item
              alignItems="center"
            >
              <Typography
                sx={{ padding: "2" }}
                variant={matchesMd ? "h6" : "h5"}
                align="center"
              >
                قابل استفاده در موبایل
              </Typography>
              <Typography sx={{ padding: "2" }} variant="body1" align="center">
                {" "}
                طراحی این سایت طوری هست که میتونی بدون استفاده از کامپیوتر رزومه
                ت رو خیلی راحت بسازی
              </Typography>
            </Grid>
          </Paper>
          <Grid justifyContent="space-around" item>
            <img
              style={{
                marginTop: matchesMd ? "4em" : undefined,
                height: "19em",
                maxWidth: "100%",
              }}
              src={responsive}
              alt=""
            />
          </Grid>
        </Grid>
        <Grid
          sx={{
            marginTop: matchesSm ? "6em" : "10em",
            width: "100%",
          }}
          container
          alignItems="center"
          justifyContent="space-around"
          direction={matchesMd ? "column" : "row"}
        >
          <Grid justifyContent="space-around" item>
            <img
              style={{
                marginTop: matchesMd ? "4em" : undefined,
                height: "19em",
                maxWidth: "100%",
              }}
              src={bemyGuest}
              alt=""
            />
          </Grid>
          <Paper
            sx={{
              borderRadius: 7,
              width: { xs: "90%", sm: "30em", lg: "25em" },
              justifyContent: "center",
            }}
            variant="outlined"
          >
            <Grid
              sx={{
                margin: "2em",
                padding: matchesMd ? "0 1em" : 0,
                maxWidth: matchesSm ? "80%" : "25em",
              }}
              item
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                sx={{ padding: "2" }}
                variant={matchesMd ? "h6" : "h5"}
                align="center"
              >
                هزینه ش چقدر میشه؟!؟
              </Typography>
              <Typography sx={{ padding: "2" }} variant="body1" align="center">
                {" "}
                هیچی! مهمون من باش
              </Typography>
              <Button
                sx={{
                  marginTop: "1em",
                  backgroundColor: theme.palette.secondary.main,
                  color: "#fff",
                  fontWeight: 700,
                }}
                variant="outlined"
              >
                {" "}
                رزومه ت رو بساز
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
