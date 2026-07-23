import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../api/axios";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";

const SIGNUP_FORM_KEY = "signupData";

const initialSignupData = {
  name: "",
  email: "",
  mobile: "",
  password: "",
  confirmPassword: "",
};

function Signup() {
  const [formData, setFormData] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const savedData = localStorage.getItem(SIGNUP_FORM_KEY);
        return savedData ? JSON.parse(savedData) : initialSignupData;
      } catch (error) {
        console.error("Unable to load signup data:", error);
      }
    }
    return initialSignupData;
  });

  useEffect(() => {
    try {
      const hasValue = Object.values(formData).some(
        (value) => value !== ""
      );

      if (hasValue) {
        localStorage.setItem(
          SIGNUP_FORM_KEY,
          JSON.stringify(formData)
        );
      } else {
        localStorage.removeItem(SIGNUP_FORM_KEY);
      }
    } catch (error) {
      console.error("Unable to save signup data:", error);
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
     
const response = await axios.post(
  `${API_BASE_URL}/api/users`,
  {
    username: formData.name,
    email: formData.email,
    mobile: formData.mobile,
    password: formData.password,
    Confirmpassword: formData.confirmPassword,
  }
);
  

      console.log(response.data);

      alert("Signup Successful!");

      // Clear form
      setFormData(initialSignupData);

      localStorage.removeItem(SIGNUP_FORM_KEY);
    } catch (error) {
      console.error("Unable to store signup data:", error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Unable to connect to the server.");
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={5}
        sx={{
          mt: 5,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
        >
          Signup Form
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            fullWidth
            required
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large"
          >
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Signup;