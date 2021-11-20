//React
import React, { useState, lazy, Suspense } from "react";
//React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//MUI components
import { Grid } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material";

import { Box } from "@mui/system";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
//pages
import About from "./pages/About";
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const Resume = lazy(() => import("./pages/Resume"));

function App() {
  // first we check if we had changed color mode befor, and if yes, use it.
  const lightMode = window.localStorage.getItem("lightMode")
    ? window.localStorage.getItem("lightMode")
    : "light";
  const [mode, setMode] = useState(lightMode);
  //createTheme in MUI is used for making a universal theme to use all over out app
  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: "#fded00",
      },
      secondary: {
        main: "#6c63ff",
      },
    },
    typography: {
      fontFamily: "Noto Naskh Arabic, serif",
    },
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading</div>}>
          <Grid
            sx={{
              height: "100%",
              width: "100%",
              "& .MuiBox-root": {
                width: "100%",
              },
            }}
            container
            direction="column"
            justifyContent="space-between"
          >
            <Grid
              sx={{ backgroundColor: theme.palette.background.default }}
              item
              container
            >
              <Header mode={mode} setMode={setMode} />
            </Grid>
            <Grid
              sx={{
                width: "100%",
              }}
              item
              container
            >
              <Box>
                <Routes>
                  <Route exact path="/" element={<HomePage />} />
                  <Route path="/about" element={<About>About</About>} />
                  <Route path="/resume" element={<Resume />} />
                </Routes>
              </Box>
            </Grid>

            <Grid
              sx={{
                backgroundColor: theme.palette.background.default,
              }}
              item
              container
              alignSelf="flex-end"
            >
              <Footer />
            </Grid>
          </Grid>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
