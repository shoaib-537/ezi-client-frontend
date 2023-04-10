import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Stack, Typography, Box } from "@mui/material";
import Navbar from "../components/Navbar";
import AddIcon from "@mui/icons-material/Add";

function createData(name, starting, ending, status) {
  return { name, starting, ending, status };
}

const rows = [
  createData("ABC", "16-2-2023", "16-2-2023", "Approved"),
  createData("ABC", "16-2-2023", "16-2-2023", "Pending"),
  createData("ABC", "16-2-2023", "16-2-2023", "Approved"),
  createData("ABC", "16-2-2023", "16-2-2023", "Denied"),
  createData("ABC", "16-2-2023", "16-2-2023", "Approved"),
  createData("ABC", "16-2-2023", "16-2-2023", "Approved"),
  createData("ABC", "16-2-2023", "16-2-2023", "Denied"),
  createData("ABC", "16-2-2023", "16-2-2023", "Approved"),
];

const Leave = () => {
  const paperstyle = {
    width: "80%",
    // paddingTop: "5%",
    paddingRight: "5%",
    paddingLeft: "5%",
  };
  return (
    <div>
      <Navbar />
      <Box>
        <Typography variant="h4" sx={{ mb: 5, ml: 5 }}>
          Hi, Welcome back
        </Typography>
      </Box>
      <Stack sx={{ minHeight: "100vh", width: "100vw" }} alignItems="center">
        <Button variant="contained" sx={{alignSelf: "end", mr: 10, mb:5}} startIcon={<AddIcon />}>
          Add
        </Button>
        <TableContainer component={Paper} style={paperstyle}>
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Starting Date</TableCell>
                <TableCell align="right">Ending Date</TableCell>
                <TableCell align="right">Status&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.starting}</TableCell>
                  <TableCell align="right">{row.ending}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </div>
  );
};

export default Leave;
