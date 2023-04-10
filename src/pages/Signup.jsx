import React from "react";

import { Stack, Paper, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import AbcIcon from "@mui/icons-material/Abc";

const Signup = () => {
  return (
    <div>
      <Stack sx={{ minHeight: "100vh" }} alignItems="center">
        <Paper elevation={4} sx={{ p: 4, maxWidth: "250px", margin: "auto" }}>
          <Typography
            varient=" h2"
            align="center"
            sx={{ fontWeight: "bold", fontSize: "20px" }}
          >
            <AbcIcon sx={{ fontSize: "62px" }} color="success" />{" "}
          </Typography>
          <Typography
            varient=" h2"
            align="center"
            sx={{ fontWeight: "bold", fontSize: "30px" }}
          >
            SIGNUP
          </Typography>

          <form>
            <TextField
              id="outlined-basic"
              label="Full Name"
              type="text"
              variant="outlined"
              size="small"
              fullWidth
              sx={{ marginTop: "15px" }}
            />

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

            <TextField
              id="outlined-basic"
              label="Confirm Password"
              type="password"
              variant="outlined"
              size="small"
              fullWidth
              sx={{ marginTop: "15px" }}
            />

            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ mt: 3, fontWeight: "bold" }}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Stack>
    </div>
  );
};

export default Signup;
