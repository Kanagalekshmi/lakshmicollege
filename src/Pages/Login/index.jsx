import React, { useEffect, useState } from "react";

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Checkbox,
  Link,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import Logo from "../../Assets/Images/logo.png";
import College from "../../Assets/Images/college.avif";

const LOGIN_FORM_KEY = "loginFormData";
const initialLoginData = {
  regNo: "",
  password: "",
  remember: false,
};

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(() => {
    if (typeof window !== "undefined") {
      const savedData = window.localStorage.getItem(LOGIN_FORM_KEY);
      if (savedData) {
        try {
          return JSON.parse(savedData);
        } catch {
          return initialLoginData;
        }
      }
    }
    return initialLoginData;
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (formData.remember || formData.regNo || formData.password) {
        window.localStorage.setItem(LOGIN_FORM_KEY, JSON.stringify(formData));
      } else {
        window.localStorage.removeItem(LOGIN_FORM_KEY);
      }
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError("");
  };

  const validateForm = () => {
    const regRegex = /^[0-9]{2}[A-Z]{2,4}[0-9]{3}$/;

    if (!formData.regNo.trim()) {
      setError("Please enter your Registration Number.");
      return false;
    }

    if (!regRegex.test(formData.regNo)) {
      setError("Invalid Registration Number. Example: 22CSE001");
      return false;
    }

    if (!formData.password.trim()) {
      setError("Please enter your Password.");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await api.post("/api/users/login", {
        regNo: formData.regNo,
        password: formData.password,
      });

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      if (!formData.remember && typeof window !== "undefined") {
        window.localStorage.removeItem(LOGIN_FORM_KEY);
      }

      setSubmitted(true);
      setError("");

      setTimeout(() => {
        setSubmitted(false);
        navigate(user.role === "admin" ? "/admin" : "/");
      }, 1000);
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Unable to connect to the server. Please try again.";
      setError(message);
    }
  };

  return (
    <>
      {/* Background Section */}
      <Box
        sx={{
          minHeight: "85vh",
          background: `url('${College}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
          py: 5,
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              elevation={5}
              sx={{
                width: "100%",
                maxWidth: 500,
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <CardContent sx={{ p: 5 }}>
                {/* Header */}
                <Box sx={{ textAlign: "center", mb: 4 }}>
                  <img
                    src={Logo}
                    alt="Lakshmi College Logo"
                    style={{
                      width: 90,
                      height: 90,
                      marginBottom: "1.5rem",
                    }}
                  />
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{ color: "#0A2947", mb: 1 }}
                  >
                    Student Login
                  </Typography>
                  <Typography color="textSecondary">
                    Login to access the student portal.
                  </Typography>
                </Box>

                {/* Success Alert */}
                {submitted && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Login Successful!
                  </Alert>
                )}

                {/* Error Alert */}
                {error && (
                  <Alert severity="error" sx={{ mb: 3 }}>
                    {error}
                  </Alert>
                )}

                {/* Form */}
                <Box component="form" onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Registration Number"
                    name="regNo"
                    value={formData.regNo}
                    onChange={handleChange}
                    placeholder="Enter Registration Number"
                    margin="normal"
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />

                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                    margin="normal"
                    variant="outlined"
                    sx={{ mb: 3 }}
                  />

                  {/* Remember & Forgot */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 3,
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="remember"
                          checked={formData.remember}
                          onChange={handleChange}
                        />
                      }
                      label="Remember Me"
                    />
                    <Link
                      href="#"
                      underline="none"
                      sx={{ color: "#0A2947", fontWeight: "bold" }}
                    >
                      Forgot Password?
                    </Link>
                  </Box>

                  {/* Submit Button */}
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    size="large"
                    sx={{
                      bgcolor: "#0A2947",
                      color: "white",
                      mb: 2,
                      py: 1.5,
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      "&:hover": {
                        bgcolor: "#061a2d",
                      },
                    }}
                  >
                    Login
                  </Button>
                  <Button
          fullWidth
          variant="outlined"
          sx={{ mt: 2 }}
          color="error"
          onClick={() => navigate("/adminlogin")}
        >
          Admin Login
        </Button>

                  {/* Divider */}
                  <Box sx={{ my: 2, textAlign: "center" }}>
                    <Typography color="textSecondary" sx={{ py: 1 }}>
                      or
                    </Typography>
                  </Box>

                  {/* Sign Up Link */}
                  <Typography sx={{ textAlign: "center" }}>
                    Don't have an account?{" "}
                    <Link
                      href="/apply"
                      underline="none"
                      sx={{
                        color: "#0A2947",
                        fontWeight: "bold",
                        fontSize: "1.05rem",
                      }}
                    >
                      Apply Now
                    </Link>
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Login;
