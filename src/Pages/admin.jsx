import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../api/axios";

import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

const Admin = () => {
  const navigate = useNavigate();

  // ==========================
  // Token
  // ==========================
  const token = localStorage.getItem("token");

  // ==========================
  // States
  // ==========================
  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    username: "",
    email: "",
    mobile: "",
    regNo: "",
    password: "",
    role: "user",
  });

  // ==========================
  // Get Users
  // ==========================
  const getUsers = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/users`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers(response.data.users);
    } catch (error) {
      console.log(error);

      if (error.response?.status === 401) {
        alert("Please login again.");
        navigate("/login");
      }

      if (error.response?.status === 403) {
        alert("Only Admin can access.");
        navigate("/");
      }
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // ==========================
  // Input Change
  // ==========================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ==========================
  // Add User
  // ==========================
  const addUser = async () => {
    try {
      await axios.post(
        `${API_BASE_URL}/api/users/add`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("User Added Successfully");

      setOpen(false);

      setForm({
        username: "",
        email: "",
        mobile: "",
        regNo: "",
        password: "",
        role: "user",
      });

      getUsers();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message || "Unable to add user."
      );
    }
  };

  // ==========================
  // Edit User
  // ==========================
  const editUser = (user) => {
    setEditingId(user._id);

    setForm({
      username: user.username,
      email: user.email,
      mobile: user.mobile,
      regNo: user.regNo,
      password: "",
      role: user.role,
    });

    setOpen(true);
  };

  // ==========================
  // Update User
  // ==========================
  const updateUser = async () => {
    try {
      await axios.put(
        `${API_BASE_URL}/api/users/${editingId}`,
        {
          username: form.username,
          email: form.email,
          mobile: form.mobile,
          regNo: form.regNo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("User Updated Successfully");

      setOpen(false);

      setEditingId(null);

      getUsers();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message || "Unable to update user."
      );
    }
  };

  // ==========================
  // Delete User
  // ==========================
  const deleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `${API_BASE_URL}/api/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("User Deleted Successfully");

      getUsers();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message || "Unable to delete user."
      );
    }
  };

  // ==========================
  // Change Role
  // ==========================
  const changeRole = async (id, role) => {
    try {
      await axios.put(
        `${API_BASE_URL}/api/users/role/${id}`,
        {
          role,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Role Updated Successfully");

      getUsers();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message || "Unable to change role."
      );
    }
  };

  // ==========================
  // Logout
  // ==========================
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  // ==========================
  // Filter Users
  // ==========================
  const filteredUsers = users.filter((user) => {
    const value = search.toLowerCase();

    return (
      user.username.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value) ||
      (user.regNo || "").toLowerCase().includes(value)
    );
  });
    return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={5} sx={{ p: 4, borderRadius: 3 }}>
        <Typography
          variant="h4"
          align="center"
          color="primary"
          fontWeight="bold"
        >
          Admin Dashboard
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          Manage Registered Users
        </Typography>

        {/* Top Buttons */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
            mb: 3,
          }}
        >
          <TextField
            label="Search User"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ width: 350 }}
          />

          <Box>
            <Button
              variant="contained"
              color="success"
              sx={{ mr: 2 }}
              onClick={() => {
                setEditingId(null);

                setForm({
                  username: "",
                  email: "",
                  mobile: "",
                  regNo: "",
                  password: "",
                  role: "user",
                });

                setOpen(true);
              }}
            >
              Add User
            </Button>

            <Button
              variant="contained"
              color="error"
              onClick={logout}
            >
              Logout
            </Button>
          </Box>
        </Box>

        {/* User Table */}

        <TableContainer component={Paper} elevation={3}>
          <Table>

            <TableHead>

              <TableRow sx={{ backgroundColor: "#1976d2" }}>

                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Username
                </TableCell>

                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Email
                </TableCell>

                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Mobile
                </TableCell>

                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Reg No
                </TableCell>

                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Role
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Actions
                </TableCell>

              </TableRow>

            </TableHead>

            <TableBody>

              {filteredUsers.length === 0 ? (

                <TableRow>

                  <TableCell colSpan={6} align="center">
                    No Users Found
                  </TableCell>

                </TableRow>

              ) : (

                filteredUsers.map((user) => (

                  <TableRow key={user._id} hover>

                    <TableCell>{user.username}</TableCell>

                    <TableCell>{user.email}</TableCell>

                    <TableCell>{user.mobile}</TableCell>

                    <TableCell>{user.regNo}</TableCell>

                    <TableCell>

                      <Typography
                        color={
                          user.role === "admin"
                            ? "error"
                            : "primary"
                        }
                        fontWeight="bold"
                      >
                        {user.role.toUpperCase()}
                      </Typography>

                    </TableCell>

                    <TableCell align="center">

                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={{ mr: 1, mb: 1 }}
                        onClick={() => editUser(user)}
                      >
                        Edit
                      </Button>

                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        sx={{ mr: 1, mb: 1 }}
                        onClick={() => deleteUser(user._id)}
                      >
                        Delete
                      </Button>

                      <Button
                        variant="contained"
                        color={
                          user.role === "admin"
                            ? "warning"
                            : "success"
                        }
                        size="small"
                        onClick={() =>
                          changeRole(
                            user._id,
                            user.role === "admin"
                              ? "user"
                              : "admin"
                          )
                        }
                      >
                        {user.role === "admin"
                          ? "Make User"
                          : "Make Admin"}
                      </Button>

                    </TableCell>

                  </TableRow>

                ))

              )}

            </TableBody>

          </Table>

        </TableContainer>
                {/* Add / Edit User Dialog */}
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>
            {editingId ? "Edit User" : "Add User"}
          </DialogTitle>

          <DialogContent>

            <TextField
              margin="normal"
              fullWidth
              label="Username"
              name="username"
              value={form.username}
              onChange={handleChange}
            />

            <TextField
              margin="normal"
              fullWidth
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <TextField
              margin="normal"
              fullWidth
              label="Mobile"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
            />

            <TextField
              margin="normal"
              fullWidth
              label="Register Number"
              name="regNo"
              value={form.regNo}
              onChange={handleChange}
            />

            {!editingId && (
              <TextField
                margin="normal"
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            )}

            {!editingId && (
              <TextField
                margin="normal"
                fullWidth
                label="Role"
                name="role"
                value={form.role}
                onChange={handleChange}
                helperText="Enter admin or user"
              />
            )}

          </DialogContent>

          <DialogActions>

            <Button
              onClick={() => setOpen(false)}
              color="inherit"
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              onClick={() => {
                if (editingId) {
                  updateUser();
                } else {
                  addUser();
                }
              }}
            >
              {editingId ? "Update User" : "Add User"}
            </Button>

          </DialogActions>

        </Dialog>

      </Paper>
    </Container>
  );
};

export default Admin;