//React
import React from "react";
//React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//MUI components
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from "./components/Theme";
import { Box } from "@mui/system";
// Components
import Header from "./components/Header";

//pages
import HomePage from "./pages/HomePage.jsx";

function App() {
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
        >
          <Grid
            sx={{ backgroundColor: theme.palette.background.default }}
            item
            container
          >
            <Header />
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
                <Route path="/resume" element={<h1>resume</h1>} />
              </Routes>
            </Box>
          </Grid>

          <Grid item container alignSelf="flex-end"></Grid>
        </Grid>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
