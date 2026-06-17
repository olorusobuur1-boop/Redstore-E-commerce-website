import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
} from "@mui/material";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange =
    (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [field]: e.target.value });
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        "https://students-learning-api.onrender.com/api/auth",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setSuccess("Registration successful! Redirecting to login page...");

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      });

      console.log("Registered user:", data);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "radial-gradient(#fff, #ffd6d6)",
        p: 2,
      }}
    >
      <Paper sx={{ width: 600, p: 5, borderRadius: 3 }} elevation={12}>
        <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
          Create Account
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                label="First Name"
                fullWidth
                value={form.firstName}
                onChange={handleChange("firstName")}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                label="Last Name"
                fullWidth
                value={form.lastName}
                onChange={handleChange("lastName")}
              />
            </Grid>

            <Grid size={12}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                value={form.email}
                onChange={handleChange("email")}
              />
            </Grid>

            <Grid size={12}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                value={form.password}
                onChange={handleChange("password")}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                label="Phone Number"
                fullWidth
                value={form.phoneNumber}
                onChange={handleChange("phoneNumber")}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                label="Address"
                fullWidth
                value={form.address}
                onChange={handleChange("address")}
              />
            </Grid>
          </Grid>

          <Button
            className="btn"
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{ mt: 3, height: 48, background: "#ff523b" }}
          >
            {loading ? "Registering..." : "Register"}
          </Button>
        </Box>
        <Link
          to={"/login"}
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "sans-serif",
            marginTop: "10px",
          }}
        >
          Already have an account?, Sign in here &#8594;
        </Link>
      </Paper>
    </Box>
  );
};

export default Register;
