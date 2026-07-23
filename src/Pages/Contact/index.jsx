import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
  Paper,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import axios from "axios";
import { API_BASE_URL } from "../../api/axios";

const CONTACT_FORM_KEY = "contactFormData";
const initialContactData = {
  name: "",
  email: "",
  mobile: "",
  subject: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(() => {
    if (typeof window !== "undefined") {
      const savedData = window.localStorage.getItem(CONTACT_FORM_KEY);
      if (savedData) {
        try {
          return JSON.parse(savedData);
        } catch {
          return initialContactData;
        }
      }
    }
    return initialContactData;
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(CONTACT_FORM_KEY, JSON.stringify(formData));
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-z ]{3,30}$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const mobileRegex = /^[6-9]\d{9}$/;

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return false;
    }

    if (!nameRegex.test(formData.name)) {
      setError("Name should contain only letters and spaces (3-30 characters).");
      return false;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email.");
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      setError("Enter a valid email address.");
      return false;
    }

    if (!mobileRegex.test(formData.mobile)) {
      setError("Enter a valid 10-digit mobile number starting with 6-9.");
      return false;
    }

    if (formData.subject.length < 5) {
      setError("Subject must contain at least 5 characters.");
      return false;
    }

    if (formData.message.length < 10) {
      setError("Message must contain at least 10 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/contact`,
      formData
    );

    console.log(response.data);

    setSubmitted(true);
    setFormData(initialContactData);
    localStorage.removeItem(CONTACT_FORM_KEY);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

  } catch (error) {
    console.log(error);
    setError(
      error.response?.data?.message ||
      "Unable to submit enquiry."
    );
  }
};

  const handleReset = () => {
    setFormData(initialContactData);
    setError("");
    setSubmitted(false);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(CONTACT_FORM_KEY);
    }
  };

  return (
    <>
      {/* Contact Header */}
      <Box
        sx={{
          bgcolor: "#0A2947",
          color: "white",
          py: { xs: 5, md: 7 },
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h3" fontWeight="bold" mb={2}>
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.85, maxWidth: 650, mx: "auto" }}>
            We are always happy to hear from you. Feel free to contact us for any enquiry.
          </Typography>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container sx={{ py: { xs: 5, md: 8 } }}>
        <Grid container spacing={5}>
          {/* Contact Details */}
          <Grid item xs={12} md={5}>
            <Card elevation={3} sx={{ height: "100%" }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight="bold" mb={3}>
                  College Contact Details
                </Typography>

                <Box sx={{ mb: 3, display: "flex", gap: 2 }}>
                  <LocationOnIcon sx={{ color: "#0A2947", mt: 0.5 }} />
                  <Box>
                    <Typography fontWeight="bold">Address:</Typography>
                    <Typography color="textSecondary">
                      Lakshmi College of Engineering & Technology, Madurai, Tamil Nadu - 625001
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 3, display: "flex", gap: 2 }}>
                  <PhoneIcon sx={{ color: "#0A2947", mt: 0.5 }} />
                  <Box>
                    <Typography fontWeight="bold">Phone:</Typography>
                    <Typography color="textSecondary">+91 8867543296</Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 3, display: "flex", gap: 2 }}>
                  <EmailIcon sx={{ color: "#0A2947", mt: 0.5 }} />
                  <Box>
                    <Typography fontWeight="bold">Email:</Typography>
                    <Typography color="textSecondary">lakshmicollege@gmail.com</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <Box>
                    <Typography fontWeight="bold">Website:</Typography>
                    <Typography color="textSecondary">www.lakshmicollege.edu.in</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{ p: { xs: 2.5, sm: 4 }, height: "100%", bgcolor: "#f9fbfd" }}>
              <Typography variant="h5" fontWeight="bold" mb={3}>
                Send an Enquiry
              </Typography>

              {submitted && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you! Your enquiry has been submitted successfully.
                </Alert>
              )}

              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  margin="normal"
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Email ID"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  margin="normal"
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Mobile Number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  margin="normal"
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enquiry subject"
                  margin="normal"
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  margin="normal"
                  multiline
                  rows={4}
                  variant="outlined"
                />

                <Box sx={{ mt: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      bgcolor: "#0A2947",
                      "&:hover": { bgcolor: "#061a2d" },
                      px: 4,
                    }}
                  >
                    Send Message
                  </Button>

                  <Button
                    type="button"
                    variant="outlined"
                    onClick={handleReset}
                    sx={{
                      color: "#0A2947",
                      borderColor: "#0A2947",
                      "&:hover": { bgcolor: "#f0f0f0" },
                    }}
                  >
                    Clear
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Map Section */}
      <Container sx={{ pb: { xs: 5, md: 8 } }}>
        <Typography variant="h4" mb={4} textAlign="center" fontWeight="bold">
          College Location
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "400px",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            title="Lakshmi College Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.7546562652803!2d78.11919!3d9.93289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582eeeeeee7%3A0x1234567890abc!2sLakshmi%20College%20of%20Engineering%20%26%20Technology%2C%20Madurai!5e0!3m2!1sen!2sin!4v1234567890"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Container>
    </>
  );
}

export default Contact;
