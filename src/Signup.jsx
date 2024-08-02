// src/Signup.js
import React from "react";
import { Container, TextField, Button, Typography } from "@mui/material";

const Signup = () => (
  <Container>
    <Typography variant="h4">Sign Up</Typography>
    <form>
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />
      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" fullWidth>
        Sign Up
      </Button>
    </form>
  </Container>
);

export default Signup;
