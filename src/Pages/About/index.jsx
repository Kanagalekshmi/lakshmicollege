import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  Stack,
  Chip,
} from "@mui/material";

import AboutBanner from "../../Assets/Images/about.png";
import Library from "../../Assets/Images/library.png";
import Lab from "../../Assets/Images/lab.png";
import Hostel from "../../Assets/Images/hostel.png";
import Logo from "../../Assets/Images/logo.png";

const facilities = [
  {
    title: "Library",
    image: Library,
    description: "A wide collection of books, journals, and digital resources for every learner.",
  },
  {
    title: "Laboratories",
    image: Lab,
    description: "Modern labs for engineering, computing, and innovation-based learning.",
  },
  {
    title: "Hostel",
    image: Hostel,
    description: "Safe and comfortable accommodation designed for student wellbeing.",
  },
];

const highlights = [
  "Experienced Faculty Members",
  "Modern Infrastructure",
  "Excellent Placement Training",
  "Industry-Oriented Curriculum",
  "Digital Library",
  "Sports and Cultural Activities",
  "Scholarship Opportunities",
];

function About() {
  return (
    <>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <img
          src={AboutBanner}
          alt="About Lakshmi College"
          style={{
            width: "100%",
            height: "520px",
            objectFit: "cover",
            display: "block",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(10,41,71,0.9) 0%, rgba(10,41,71,0.45) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
          }}
        >
          <Box sx={{ textAlign: "center", color: "white", maxWidth: 700 }}>
            <Typography variant="h3" fontWeight="bold" sx={{ mb: 2, textShadow: "0 4px 20px rgba(0,0,0,0.35)" }}>
              About Lakshmi College
            </Typography>
            <Typography variant="h6" sx={{ lineHeight: 1.7, opacity: 0.95 }}>
              Building knowledge, creating leaders, and inspiring innovation through quality education.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Container sx={{ py: { xs: 7, md: 10 } }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="overline" color="#0A2947" sx={{ fontWeight: 700, letterSpacing: 2 }}>
              About the College
            </Typography>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              A nurturing environment for academic excellence.
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.8, color: "text.secondary" }}>
              Lakshmi College of Engineering & Technology is committed to delivering quality technical education,
              shaping confident professionals, and encouraging innovation through experiential learning.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} mt={3} flexWrap="wrap">
              <Chip label="Accredited Programs" sx={{ bgcolor: "#eaf2ff", color: "#0A2947", fontWeight: 600 }} />
              <Chip label="Experienced Faculty" sx={{ bgcolor: "#eaf2ff", color: "#0A2947", fontWeight: 600 }} />
              <Chip label="Strong Placements" sx={{ bgcolor: "#eaf2ff", color: "#0A2947", fontWeight: 600 }} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card elevation={4} sx={{ borderRadius: 4, overflow: "hidden" }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Vision & Mission
                </Typography>
                <Typography sx={{ fontSize: "1rem", lineHeight: 1.8, mb: 2 }}>
                  To become a premier institution that delivers quality education, drives innovation, and shapes ethical leaders for society.
                </Typography>
                <List sx={{ pl: 1 }}>
                  <ListItem sx={{ py: 0.5, display: "list-item" }}>
                    <Typography>Provide quality technical education.</Typography>
                  </ListItem>
                  <ListItem sx={{ py: 0.5, display: "list-item" }}>
                    <Typography>Develop leadership and communication skills.</Typography>
                  </ListItem>
                  <ListItem sx={{ py: 0.5, display: "list-item" }}>
                    <Typography>Encourage innovation and research.</Typography>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: "#f6f9ff", py: { xs: 7, md: 9 } }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center">
            Campus Facilities
          </Typography>

          <Grid container spacing={4}>
            {facilities.map((facility) => (
              <Grid item xs={12} sm={6} md={4} key={facility.title}>
                <Card elevation={3} sx={{ height: "100%", borderRadius: 4, textAlign: "center", transition: "0.25s ease", "&:hover": { transform: "translateY(-6px)", boxShadow: 8 } }}>
                  <Box sx={{ p: 3, pb: 1 }}>
                    <img src={facility.image} width="100" alt={facility.title} style={{ marginBottom: "1rem" }} />
                  </Box>
                  <CardContent sx={{ pt: 0, px: 3, pb: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={1}>
                      {facility.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {facility.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container sx={{ py: { xs: 7, md: 9 } }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
            <Box sx={{ borderRadius: 4, overflow: "hidden", boxShadow: 4 }}>
              <img src={Logo} width="220" alt="Principal" style={{ display: "block", maxWidth: "100%" }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant="h4" fontWeight="bold" mb={2}>
              Principal's Message
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.8, color: "text.secondary" }}>
              Welcome to Lakshmi College of Engineering & Technology. Our goal is to provide quality education,
              encourage innovation, and help every student become a responsible engineer and future leader.
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.2, mt: 3 }}>
              {highlights.map((item) => (
                <Chip key={item} label={item} sx={{ bgcolor: "#f3f6fb", color: "#0A2947", fontWeight: 600 }} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default About;