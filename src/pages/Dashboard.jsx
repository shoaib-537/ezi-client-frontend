import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  Paper,
  Stack,
} from "@mui/material";
import Stdtable from "../components/Stdtable";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Container sx={{ marginTop: "30px" }}>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Typography
          varient=" h2"
          align="center"
          sx={{ fontWeight: "bold", fontSize: "20px", mb: "15px" }}
        >
          Mark You Attandance
        </Typography>
        <Stack direction="row" spacing={5} sx={{ mb: "20px" }}>
          <Button fullWidth size="large" variant="contained">
            Present
          </Button>

          <Button fullWidth size="large" variant="contained">
            Request Leave
          </Button>

          <Button fullWidth size="large" variant="contained">
            Absent
          </Button>
        </Stack>

        <Paper sx={{ marginTop: "2%" }}>
          <Typography
            varient=" h2"
            align="center"
            sx={{ fontWeight: "bold", fontSize: "25px" }}
          >
            Over View
          </Typography>
          <Stdtable />
        </Paper>
      </Container>
    </div>
  );
};

export default Dashboard;
