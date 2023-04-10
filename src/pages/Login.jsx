import React from "react";

import { Stack, Paper, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import SendIcon from "@mui/icons-material/Send";
import LoginIcon from "@mui/icons-material/Login";
const Login = () => {
  return (
    <div>
      <Stack sx={{ minHeight: "100vh" }} alignItems="center" >
        <Paper elevation={4} sx={{ p: 4, maxWidth: "250px", margin: "auto" }}>
          <Typography
            varient=" h2"
            align="center"
            sx={{ fontWeight: "bold", fontSize: "20px" }}
          >
            <LoginIcon sx={{ fontSize: "42px" }} color="success" />{" "}
          </Typography>
          <Typography
            varient=" h2"
            align="center"
            sx={{ fontWeight: "bold", fontSize: "25px" }}
          >
            LOGIN
          </Typography>

          <form>
            <TextField
              id="outlined-basic"
              label="Registration Number"
              type="text"
              variant="outlined"
              size="small"
              fullWidth
              sx={{ marginTop: "15px" }}
            />

            <TextField
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              size="small"
              fullWidth
              sx={{ marginTop: "15px" }}
            />

            <Button
              variant="contained"
              type="submit"
              endIcon={<SendIcon />}
              fullWidth
              sx={{ mt: 3, fontWeight: "bold" }}
            >
              LOGIN
            </Button>
          </form>
        </Paper>
      </Stack>
    </div>
  );
};

export default Login;
