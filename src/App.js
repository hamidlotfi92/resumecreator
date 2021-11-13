//React
import React, { useState } from "react";
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
import HomePage from "./pages/HomePage.jsx";
import Resume from "./pages/Resume";

function App() {
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: "#ff4141",
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
                <Route path="/about" element={<h1>About</h1>} />
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
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
