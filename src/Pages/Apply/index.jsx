import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  MenuItem,
  Button,
  Alert,
  LinearProgress,
  Chip,
} from "@mui/material";

const courses = [
  "B.E Computer Science and Engineering",
  "B.E Information Technology",
  "B.E Electronics and Communication Engineering",
  "B.E Civil Engineering",
  "B.E Mechanical Engineering",
  "B.Tech Biotechnology",
];

const APPLY_FORM_KEY = "admissionFormData";
const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

const initialApplyData = {
  fullName: "",
  fatherName: "",
  motherName: "",
  dob: "",
  gender: "",
  email: "",
  mobile: "",
  address: "",
  state: "",
  city: "",
  pincode: "",
  course: "",
  school: "",
  percentage: "",
  marksheet: null,
  photo: null,
};

function Apply() {
  const [form, setForm] = useState(() => {
    if (typeof window !== "undefined") {
      const savedData = window.localStorage.getItem(APPLY_FORM_KEY);
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData);
          return { ...initialApplyData, ...parsedData, marksheet: null, photo: null };
        } catch {
          return initialApplyData;
        }
      }
    }
    return initialApplyData;
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const requiredFields = [
    "fullName",
    "dob",
    "gender",
    "email",
    "mobile",
    "address",
    "course",
    "school",
    "percentage",
  ];
  const completedFields = requiredFields.filter((field) => form[field]).length;
  const progress = Math.round((completedFields / requiredFields.length) * 100);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const dataToStore = { ...form, marksheet: null, photo: null };
      window.localStorage.setItem(APPLY_FORM_KEY, JSON.stringify(dataToStore));
    }
  }, [form]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const nameR = /^[A-Za-z ]{3,30}$/;
    const emailR = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const mobR = /^[6-9]\d{9}$/;
    const pinR = /^\d{6}$/;

    if (!nameR.test(form.fullName)) {
      setError("Enter valid Full Name.");
      return;
    }

    if (!nameR.test(form.fatherName)) {
      setError("Enter valid Father's Name.");
      return;
    }

    if (!form.email || !emailR.test(form.email)) {
      setError("Enter valid Email.");
      return;
    }

    if (!form.mobile || !mobR.test(form.mobile)) {
      setError("Enter valid Mobile Number.");
      return;
    }

    if (form.pincode && !pinR.test(form.pincode)) {
      setError("Enter valid Pincode.");
      return;
    }

    const formData = new FormData();
    formData.append("fullName", form.fullName);
    formData.append("fatherName", form.fatherName);
    formData.append("motherName", form.motherName);
    formData.append("dob", form.dob);
    formData.append("gender", form.gender);
    formData.append("email", form.email);
    formData.append("mobile", form.mobile);
    formData.append("address", form.address);
    formData.append("state", form.state);
    formData.append("city", form.city);
    formData.append("pincode", form.pincode);
    formData.append("course", form.course);
    formData.append("school", form.school);
    formData.append("percentage", form.percentage);

    if (form.marksheet) {
      formData.append("marksheet", form.marksheet);
    }
    if (form.photo) {
      formData.append("photo", form.photo);
    }

    setLoading(true);

    try {
  const response = await fetch(`${API_BASE}/api/applications`, {
    method: "POST",
    body: formData,
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Unable to submit application");
  }

  setSuccess(true);
  setForm(initialApplyData);
} catch (err) {
  setError(err.message || "Unable to submit application");
} finally {
  setLoading(false);
}
  };

  const handleClear = () => {
    setForm(initialApplyData);
    setSuccess(false);
    setError("");
  };

  return (
    <>
      <Box sx={{ bgcolor: "#0A2947", color: "white", py: { xs: 5, md: 7 } }}>
        <Container>
          <Typography variant="h4" align="center" fontWeight="bold">
            Online Admission Application Form
          </Typography>

          <Typography align="center" sx={{ opacity: 0.85 }} mt={2}>
            Please fill in all the required details to apply for admission.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <Paper sx={{ p: { xs: 2, sm: 2.5 }, mb: 3, bgcolor: "#f9fbfd" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "flex-start", sm: "center" },
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              gap: 2,
              mb: 1.25,
            }}
          >
            <Box>
              <Typography fontWeight={700}>Application progress</Typography>
              <Typography variant="body2" color="text.secondary">
                Complete the required details to prepare your application.
              </Typography>
            </Box>
            <Chip label={`${progress}% complete`} color={progress === 100 ? "success" : "primary"} size="small" />
          </Box>
          <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 6 }} />
        </Paper>

        <Paper elevation={4}>
          <Box sx={{ bgcolor: "#0A2947", color: "white", py: 2 }}>
            <Typography align="center" variant="h5">
              Admission Form
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit} sx={{ p: { xs: 2, sm: 4 } }}>
            {success && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Application Submitted Successfully!
              </Alert>
            )}
            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Father's Name" name="fatherName" value={form.fatherName} onChange={handleChange} />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Mother's Name" name="motherName" value={form.motherName} onChange={handleChange} />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="Date of Birth"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Gender</FormLabel>
                  <RadioGroup row name="gender" value={form.gender} onChange={handleChange}>
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Email" name="email" value={form.email} onChange={handleChange} />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Mobile Number" name="mobile" value={form.mobile} onChange={handleChange} />
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth multiline rows={3} label="Address" name="address" value={form.address} onChange={handleChange} />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField fullWidth label="State" name="state" value={form.state} onChange={handleChange} />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField fullWidth label="City" name="city" value={form.city} onChange={handleChange} />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField fullWidth label="Pincode" name="pincode" value={form.pincode} onChange={handleChange} />
              </Grid>

              <Grid item xs={12}>
                <TextField select fullWidth label="Course" name="course" value={form.course} onChange={handleChange}>
                  {courses.map((course) => (
                    <MenuItem key={course} value={course}>
                      {course}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth label="12th School Name" name="school" value={form.school} onChange={handleChange} />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="12th Percentage" name="percentage" value={form.percentage} onChange={handleChange} />
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography mb={1}>Upload 12th Marksheet</Typography>
                <Button component="label" variant="outlined" fullWidth>
                  Choose File
                  <input hidden type="file" name="marksheet" accept=".pdf,image/jpeg,image/png" onChange={handleChange} />
                </Button>
                {form.marksheet && form.marksheet.name}
              </Grid>

              <Grid item xs={12}>
                <Typography mb={1}>Upload Passport Size Photo</Typography>
                <Button component="label" variant="outlined" fullWidth>
                  Choose Photo
                  <input hidden type="file" name="photo" accept="image/jpeg,image/png" onChange={handleChange} />
                </Button>
                {form.photo && form.photo.name}
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2, flexWrap: "wrap" }}>
                  <Button type="submit" variant="contained" size="large" sx={{ minWidth: { xs: "100%", sm: 190 } }} disabled={loading}>
                    {loading ? "Submitting..." : "Submit Application"}
                  </Button>
                  <Button variant="outlined" size="large" sx={{ minWidth: { xs: "100%", sm: 120 } }} onClick={handleClear} disabled={loading}>
                    Clear
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default Apply;