//React
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLg = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,

        backgroundImage: `radial-gradient(#444cf7 1.4000000000000001px, transparent 1.4000000000000001px), radial-gradient(#444cf7 1.4000000000000001px,${theme.palette.background.default} 1.4000000000000001px)`,
        backgroundSize: "56px 56px",
        backgroundPosition: "0 0,28px 28px",
        backgroundAttachment: "fixed",
      }}
    >
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
                ???? ???????????? ?????????? ???????? ?????????? ???? ???? ???????? ?? ???????? ???????? ?? ?????? ???????? ????
                ?????? ?????? ???????? ???????????? ?????? ????????
              </Typography>
              <Typography sx={{ padding: "2" }} variant="body1" align="center">
                {" "}
                ?????? ???????? ???? ?????????? ???????? ???? ?????? ?????? ??????
              </Typography>
              <Button
                sx={{
                  marginTop: "1em",
                  backgroundColor: theme.palette.secondary.main,
                  color: "#fff",
                  fontWeight: 700,
                }}
                variant="outlined"
                onClick={() => {
                  navigate("/resume");
                }}
              >
                {" "}
                ?????????? ?? ???? ????????
              </Button>{" "}
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
                ?????? ???? ???? ?????????? ???? ?????????? ???????????????? ???? ?????????? ?????? ???????? ??????????
                <br /> ?????? ?????? ???? ??????
              </Typography>
              <Typography sx={{ padding: "2" }} variant="body1" align="center">
                {" "}
                ???? ?????????? ???????? ?????????????? ???? ???? ???????????? ???????? ???????? ???????? ?????? ?????????? ????
                ?????????? ??????????
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
                ?????????? ?? ??????????
              </Typography>
              <Typography sx={{ padding: "2" }} variant="body1" align="center">
                {" "}
                ???????? ???????? ???????? ???????? ???????? ?????????????? ?? ???????????? ???????? ???????? ???? ???? ??????
                ?????? ?????????? ???? ?????? ???????? ?????????? ?????? ?????????? ????????
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
                ???????? ?????????????? ???? ????????????
              </Typography>
              <Typography sx={{ padding: "2" }} variant="body1" align="center">
                {" "}
                ?????????? ?????? ???????? ???????? ?????? ???? ???????????? ???????? ?????????????? ???? ???????????????? ??????????
                ?? ???? ???????? ???????? ??????????
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
                ?????????? ?? ???????? ??????????!??
              </Typography>
              <Typography sx={{ padding: "2" }} variant="body1" align="center">
                {" "}
                ????????! ?????????? ???? ??????
              </Typography>
              <Button
                sx={{
                  marginTop: "1em",
                  backgroundColor: theme.palette.secondary.main,
                  color: "#fff",
                  fontWeight: 700,
                }}
                variant="outlined"
                onClick={() => {
                  navigate("/resume");
                }}
              >
                {" "}
                ?????????? ?? ???? ????????
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
