import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
} from "@mui/material";

const staffData = [
  {
    name: "Smt. D. Vijayarani",
    position: "Assistant Professor",
    subject: "Data Structures",
  },
  {
    name: "Shri V. Durairajan",
    position: "Associate Professor",
    subject: "Operating Systems",
  },
  {
    name: "Smt. K. Ushadevi",
    position: "Professor",
    subject: "Database Management System",
  },
  {
    name: "Smt. S. Lalitha",
    position: "Assistant Professor",
    subject: "Computer Networks",
  },
  {
    name: "Mrs. V. Sundari",
    position: "Professor",
    subject: "Artificial Intelligence",
  },
  {
    name: "Dr. R. Anitha",
    position: "Assistant Professor",
    subject: "Web Technology",
  },
];

function Staff() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "#294766",
          color: "white",
          py: 6,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h3" fontWeight="bold" mb={2}>
            Our Faculty Members
          </Typography>

          <Typography variant="h6" sx={{ fontSize: "1.1rem" }}>
            Meet our experienced professors dedicated to providing quality
            education and shaping future engineers.
          </Typography>
        </Container>
      </Box>

      {/* Staff Section */}
      <Container sx={{ my: 8 }}>
        <Grid container spacing={4}>
          {staffData.map((staff, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  textAlign: "center",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                  borderRadius: 3,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {/* Avatar */}
                  <Avatar
                    sx={{
                      width: 170,
                      height: 170,
                      margin: "0 auto 1.5rem",
                      bgcolor: "#0A2947",
                      fontSize: "4rem",
                      border: "4px solid #0A2947",
                    }}
                  >
                    {staff.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </Avatar>

                  {/* Name */}
                  <Typography variant="h6" fontWeight="bold" mb={1}>
                    {staff.name}
                  </Typography>

                  {/* Position */}
                  <Typography color="textSecondary" sx={{ mb: 2 }}>
                    {staff.position}
                  </Typography>

                  {/* Subject Badge */}
                  <Chip
                    label={staff.subject}
                    color="primary"
                    variant="filled"
                    sx={{ fontSize: "0.9rem", py: 2.5 }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Staff;
