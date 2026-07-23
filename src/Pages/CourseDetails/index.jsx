import React from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Button, Card, CardContent, Chip, Container, Grid, Paper, Typography } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import courses from "../../data/courses";

function CourseDetails() {
  const { courseId } = useParams();
  const course = courses.find((item) => item.id === courseId);

  if (!course) {
    return (
      <Container sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>Course not found</Typography>
        <Button component={Link} to="/" variant="contained">Return to home</Button>
      </Container>
    );
  }

  return (
    <>
      <Box sx={{ bgcolor: "primary.main", color: "white", py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <Button component={Link} to="/" startIcon={<ArrowBackRoundedIcon />} sx={{ color: "white", mb: 3 }}>All courses</Button>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="overline" sx={{ letterSpacing: 2, opacity: 0.78 }}>UNDERGRADUATE PROGRAMME</Typography>
              <Typography variant="h2" sx={{ mt: 1, fontSize: { xs: "2.4rem", md: "3.5rem" } }}>{course.title}</Typography>
              <Typography sx={{ mt: 2, maxWidth: 700, fontSize: "1.1rem", lineHeight: 1.75, opacity: 0.9 }}>{course.overview}</Typography>
              <Button component={Link} to="/apply" variant="contained" color="secondary" sx={{ mt: 3, color: "#172b3a", px: 3 }}>Apply for this programme</Button>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <Box component="img" src={course.image} alt="" sx={{ width: { xs: 160, md: 210 }, filter: "drop-shadow(0 12px 18px rgba(0,0,0,0.25))" }} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={2}>LEARNING EXPERIENCE</Typography>
            <Typography variant="h3" sx={{ mt: 1, mb: 2 }}>Build practical expertise for a changing world.</Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.85, mb: 3 }}>Students learn through classroom instruction, laboratory practice, projects, mentoring, and career-focused activities. The programme is designed to strengthen technical confidence alongside communication and teamwork.</Typography>
            <Paper sx={{ p: 3, bgcolor: "#f7faff" }}>
              <Typography variant="h6" sx={{ mb: 2 }}>Core skill areas</Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {course.skills.map((skill) => <Chip key={skill} icon={<CheckCircleOutlineRoundedIcon />} label={skill} color="primary" variant="outlined" />)}
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card sx={{ height: "100%", bgcolor: "#f0f5fa" }}>
              <CardContent sx={{ p: 3.5 }}>
                <SchoolRoundedIcon color="primary" sx={{ fontSize: 34 }} />
                <Typography variant="h5" sx={{ mt: 1.5 }}>Programme at a glance</Typography>
                <Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.8 }}>Duration: 4 years</Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>Mode: Full-time undergraduate programme</Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>Eligibility: Higher Secondary or equivalent, subject to applicable admission requirements.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: "#f0f5fa", py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={2}>CAREER & PLACEMENTS</Typography>
          <Typography variant="h3" sx={{ mt: 1, mb: 4 }}>Career support from classroom to workplace.</Typography>
          <Grid container spacing={3}>
            {course.careers.map((career) => (
              <Grid item xs={12} sm={6} md={3} key={career}>
                <Paper sx={{ p: 2.5, height: "100%", textAlign: "center" }}>
                  <WorkOutlineRoundedIcon color="primary" />
                  <Typography fontWeight={700} sx={{ mt: 1 }}>{career}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Paper sx={{ mt: 4, p: { xs: 2.5, md: 3.5 }, borderLeft: "5px solid", borderColor: "secondary.main" }}>
            <Typography variant="h5">Placement preparation</Typography>
            <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.8 }}>Our placement support includes aptitude and communication training, resume guidance, mock interviews, industry-readiness sessions, and opportunities to connect with recruiters. Outcomes depend on individual performance, eligibility, and employer requirements.</Typography>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default CourseDetails;
