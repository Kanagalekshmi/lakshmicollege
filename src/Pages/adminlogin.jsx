import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adminLogin = async () => {
    try {
      const response = await api.post("/api/users/login", {
        email,
        password,
      });

      const { token, user } = response.data;

      if (user.role !== "admin") {
        alert("This account does not have admin access.");
        return;
      }

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      alert("Welcome Admin");
      navigate("/admin");
    } catch (error) {
      alert(
        error.response?.data?.message || "Invalid Admin Credentials"
      );
    }
  };

  return (
    <Container maxWidth="sm" sx={{ my: { xs: 4, md: 8 } }}>
      <Paper elevation={5} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3 }}>
        <Typography
          variant="h4"
          align="center"
          color="primary"
          gutterBottom
        >
          Admin Login
        </Typography>

        <TextField
          fullWidth
          label="Admin Email"
          sx={{ mt: 3 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          sx={{ mt: 2 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={adminLogin}
        >
          Login as Admin
        </Button>

        <Button
          fullWidth
          variant="text"
          sx={{ mt: 2 }}
          onClick={() => navigate("/login")}
        >
          Back to User Login
        </Button>
      </Paper>
    </Container>
  );
};

export default AdminLogin;
