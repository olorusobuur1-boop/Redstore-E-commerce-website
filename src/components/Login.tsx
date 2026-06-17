import React, { useState } from "react";
import "./Hero.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    const payload = {
      email,
      password,
    };

    try {
      const response = await fetch(
        "https://students-learning-api.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      setSuccess("Login successful!");
      setTimeout(() => {
        navigate("/");
      }, 2000);

      console.log("Logged in user:", data);

      /**
       * If your backend returns a token, you can save it like this:
       */
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
      }
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
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(#fff, #ffd6d6)",
        px: 2,
      }}
    >
      <Paper
        elevation={12}
        sx={{
          width: 420,
          p: 5,
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Welcome Back
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Enter your email and password to continue
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
          <TextField
            label="Email Address"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            sx={{ mt: 1 }}
          />

          <Button
            className="btn"
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{
              mt: 3,
              height: 48,
              fontWeight: 600,
              background: "#ff523b",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Box>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 2, cursor: "pointer" }}
        >
          Forgot password?
        </Typography>
        <Link
          to={"/register"}
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "sans-serif",
            marginTop: "10px",
          }}
        >
          Dont have an account yet?, Sign up here &#8594;
        </Link>
      </Paper>
    </Box>
  );
};

export default Login;
