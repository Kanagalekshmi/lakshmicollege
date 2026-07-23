import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";

import { Link, useLocation } from "react-router-dom";

import Logo from "../Assets/Images/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Staff", to: "/staff" },
  { label: "Login", to: "/login" },
  { label: "Signup", to: "/signup" },
];

function Navbar() {
  const location = useLocation();
  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "#0A2947",
        boxShadow: "0 8px 24px rgba(0,0,0,0.16)",
        py: 0.5,
      }}
    >
      <Toolbar sx={{ flexWrap: "wrap", gap: 1.5, justifyContent: "space-between" }}>
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
            minWidth: 0,
          }}
        >
          <Box
            component="img"
            src={Logo}
            sx={{ width: 54, height: 54, mr: 1.5, borderRadius: "50%" }}
          />

          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
              Lakshmi College
            </Typography>

            <Typography variant="body2" sx={{ opacity: 0.85 }}>
              of Engineering & Technology
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-end", alignItems: "center", gap: 0.5 }}>
          {navItems.map((item) => (
            <Button
              key={item.to}
              color="inherit"
              component={Link}
              to={item.to}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 2,
                px: 1.2,
                py: 0.7,
                bgcolor: location.pathname === item.to ? "rgba(255,255,255,0.16)" : "transparent",
                "&:hover": { bgcolor: "rgba(255,255,255,0.12)" },
              }}
            >
              {item.label}
            </Button>
          ))}

          <Button
            component={Link}
            to="/apply"
            variant="contained"
            sx={{
              bgcolor: "#FFC107",
              color: "black",
              ml: 0.5,
              textTransform: "none",
              fontWeight: 700,
              borderRadius: 2,
              px: 1.5,
              "&:hover": {
                bgcolor: "#FFB300",
              },
            }}
          >
            Apply Now
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
