import React from "react";
import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "../Assets/Images/logo.png";
import Media from "../Assets/Images/media.png";

function Footer() {
  return (
    <Box sx={{ bgcolor: "#0A2947", color: "white", mt: "auto", py: { xs: 5, md: 6 } }}>
      <Container>
        <Grid container spacing={{ xs: 4, md: 5 }} mb={4} alignItems="flex-start">
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <img src={Logo} width="70" alt="College Logo" style={{ marginBottom: "1rem", borderRadius: "12px" }} />

              <Typography variant="h6" fontWeight="bold" mb={0.5}>
                Lakshmi College
              </Typography>

              <Typography variant="body2" sx={{ fontSize: "0.92rem", opacity: 0.9 }}>
                of Engineering & Technology
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" mb={2.2} sx={{ textAlign: { xs: "center", md: "left" } }}>
              Quick Links
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1, alignItems: { xs: "center", md: "flex-start" } }}>
              <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "0.95rem", opacity: 0.85 }}>
                Home
              </Link>
              <Link to="/about" style={{ color: "white", textDecoration: "none", fontSize: "0.95rem", opacity: 0.85 }}>
                About
              </Link>
              <Link to="/staff" style={{ color: "white", textDecoration: "none", fontSize: "0.95rem", opacity: 0.85 }}>
                Staff
              </Link>
              <Link to="/contact" style={{ color: "white", textDecoration: "none", fontSize: "0.95rem", opacity: 0.85 }}>
                Contact Us
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" mb={2.2} sx={{ textAlign: { xs: "center", md: "left" } }}>
              Important Links
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1, alignItems: { xs: "center", md: "flex-start" } }}>
              <Link to="/privacy-policy" style={{ color: "white", textDecoration: "none", fontSize: "0.95rem", opacity: 0.85 }}>
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" style={{ color: "white", textDecoration: "none", fontSize: "0.95rem", opacity: 0.85 }}>
                Terms & Conditions
              </Link>
              <Link to="/faq" style={{ color: "white", textDecoration: "none", fontSize: "0.95rem", opacity: 0.85 }}>
                FAQ
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" mb={2.2} sx={{ textAlign: { xs: "center", md: "left" } }}>
              Contact
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.3, alignItems: { xs: "center", md: "flex-start" } }}>
              <Typography variant="body2" sx={{ fontSize: "0.92rem", opacity: 0.9 }}>
                📍 Madurai, Tamil Nadu
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.92rem", opacity: 0.9 }}>
                📞 +91 8867543296
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.92rem", opacity: 0.9 }}>
                ✉ lakshmicollege@gmail.com
              </Typography>
              <Box>
                <Typography variant="body2" fontWeight="bold" sx={{ fontSize: "0.9rem", mb: 1 }}>
                  Follow Us
                </Typography>
                <img src={Media} width="100" alt="Social Media" />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ bgcolor: "rgba(255,255,255,0.12)", my: 3 }} />

        <Typography variant="body2" sx={{ textAlign: "center", fontSize: "0.85rem", opacity: 0.75 }}>
          © 2026 Lakshmi College of Engineering & Technology. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
