//React
import React, { useState } from "react";

// React Router
import { Link, useLocation } from "react-router-dom";
//MUI
import { Grid, List, ListItem, ListItemText } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { Button } from "@mui/material";
import { Drawer } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ContactMailIcon from "@mui/icons-material/ContactMail";
// files
import logo from "../assets/logo.svg";

// this is header of the site and is shown in all the pages.
const Header = () => {
  const location = useLocation();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "salmon",
        borderRadius: "0 0 30px 30px",
      }}
    >
      <Grid
        sx={{
          height: "6em",
          width: "100%",
        }}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {/*----- Logo ----- */}
        <Grid
          sx={{
            maxHeight: "100%",
            justifySelf: "flex-end",
            "& img": {
              maxHeight: "5em",
              paddingTop: "0.1em",
              paddingLeft: "0.1em",
            },
          }}
          item
        >
          <img src={logo} alt="logo" />
        </Grid>
        {/*----- Tabs ----- */}
        <Grid item>
          <Box
            sx={{
              borderColor: "divider",
              display: {
                sm: "block",
                xs: "none",
              },
            }}
          >
            <Typography variant="tab">
              <Tabs
                indicatorColor="secondary"
                textColor="secondary"
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                sx={{
                  "& button": {
                    fontSize: "1.2rem",
                  },
                }}
              >
                <Tab component={Link} to="/resume" label="ساخت رزومه" />

                <Tab component={Link} to="/about" label="درباره من" />
                <Tab component={Link} to="/" label="صفحه اصلی" />
              </Tabs>
            </Typography>
          </Box>
          <Box
            sx={{
              display: {
                xs: "block",
                sm: "none",
              },
            }}
            role="presentation"
            onClick={() => toggleDrawer()}
            onKeyDown={() => toggleDrawer()}
          >
            <Button onClick={() => toggleDrawer()}>
              <MenuOpenIcon
                sx={{
                  height: "2em",
                  width: "2em",
                }}
              />
            </Button>
            <Drawer
              sx={{ width: "10em" }}
              anchor="right"
              open={open}
              onClose={() => toggleDrawer()}
            >
              <List>
                <ListItem component={Link} to="/" button>
                  <ListItemIcon>
                    {" "}
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="صفحه اصلی" />
                </ListItem>
                <ListItem component={Link} to="/resume" button>
                  <ListItemIcon>
                    {" "}
                    <ReceiptIcon />
                  </ListItemIcon>
                  <ListItemText primary="ساخت رزومه" />
                </ListItem>
                <ListItem component={Link} to="/about" button>
                  <ListItemIcon>
                    {" "}
                    <ContactMailIcon />
                  </ListItemIcon>
                  <ListItemText primary="درباره من" />
                </ListItem>
              </List>
            </Drawer>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
