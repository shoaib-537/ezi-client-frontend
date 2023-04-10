import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, registration, date, status) {
  return { name, registration, date, status};
}

const rows = [
  createData("ABC", '12345', '16-2-2023', 'Present'),
  createData("ABC", '12345', '15-2-2023', 'Absent'),
  createData("ABC", '12345', '14-2-2023', 'Leave'),
  createData("ABC", '12345', '13-2-2023', 'Present'),
  createData("ABC", '12345', '12-2-2023', 'Present'),
  createData("ABC", '12345', '12-2-2023', 'Present'),
  createData("ABC", '12345', '12-2-2023', 'Present'),
  createData("ABC", '12345', '12-2-2023', 'Present'),
  createData("ABC", '12345', '12-2-2023', 'Present'),
];

const Stdtable = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Reg#</TableCell>
              <TableCell align="right">Date&nbsp;</TableCell>
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
                <TableCell align="right">{row.registration}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Stdtable;
