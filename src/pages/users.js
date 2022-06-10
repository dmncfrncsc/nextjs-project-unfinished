import {
  Box,
  Table,
  Typography,
  Paper,
  TableRow,
  TableHead,
  TableCell,
  Grid,
  TableBody,
  TextField,
  Button,
} from "@mui/material";
import AdminLayout from "../components/AdminLayout";
import Image from "next/image";

export default function Users() {
  return (
    <Box sx={{ padding: "0 24px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/assets/svg/users.svg"
          alt="Users Image"
          width={40}
          height={40}
        />
        <Typography variant="h1" sx={{ marginLeft: "12px" }}>
          Users
        </Typography>
      </Box>
      <Box
        sx={{
          width: "1500px",
          height: "400px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "0 50px",
          marginLeft: "26px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item sm>
            <Paper elevation={4} sx={{ padding: "20px" }}>
              <Typography
                variant="h1"
                sx={{
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                Account Details
              </Typography>
              <Table
                sx={{ maxWidth: "700", border: "2px solid black" }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead sx={{ border: "2px solid black" }}>
                  <TableRow>
                    <TableCell align="center"> User ID</TableCell>
                    <TableCell align="center"> Last Name</TableCell>
                    <TableCell align="center"> First Name</TableCell>
                    <TableCell align="center"> User Type</TableCell>
                    <TableCell align="center"> Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ border: "2px solid black" }}>
                  <TableCell align="center"> 001 </TableCell>
                  <TableCell align="center"> Francisco </TableCell>
                  <TableCell align="center"> Dominic </TableCell>
                  <TableCell align="center"> Admin </TableCell>
                  <TableCell align="center">
                    dominic.m.francisco@gmail.com
                  </TableCell>
                </TableBody>
                <TableBody sx={{ border: "2px solid black" }}>
                  <TableCell align="center"> 002 </TableCell>
                  <TableCell align="center"> Sanvictores </TableCell>
                  <TableCell align="center"> Giecel Mhay </TableCell>
                  <TableCell align="center"> Cashier </TableCell>
                  <TableCell align="center">
                    giecel.mhay.sanvictores@gmail.com
                  </TableCell>
                </TableBody>
                <TableBody>
                  <TableCell align="center"> 003 </TableCell>
                  <TableCell align="center"> Suares </TableCell>
                  <TableCell align="center"> Mark Angelo </TableCell>
                  <TableCell align="center"> Cashier </TableCell>
                  <TableCell align="center">
                    mark.angelo.suarez@gmail.com
                  </TableCell>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
        <Box>
          <Typography
            variant="h3"
            sx={{ marginLeft: "70px", marginBottom: "10px" }}
          >
            User ID
          </Typography>

          <TextField
            sx={{ marginLeft: "70px" }}
            id="uid"
            name="uid"
            type="text"
            variant="outlined"
          />
        </Box>

        <Box>
          <Typography
            variant="h3"
            sx={{ marginLeft: "70px", marginBottom: "10px" }}
          >
            Last Name
          </Typography>

          <TextField
            sx={{ marginLeft: "70px" }}
            id="lname"
            name="lname"
            type="text"
            variant="outlined"
          />
        </Box>

        <Box>
          <Typography
            variant="h3"
            sx={{ marginLeft: "70px", marginBottom: "10px" }}
          >
            First Name
          </Typography>

          <TextField
            sx={{ marginLeft: "70px" }}
            id="fname"
            name="fname"
            type="text"
            variant="outlined"
          />
        </Box>

        <Box>
          <Typography
            variant="h3"
            sx={{ marginLeft: "70px", marginBottom: "10px" }}
          >
            User Type
          </Typography>

          <TextField
            sx={{ marginLeft: "70px" }}
            id="lname"
            name="lname"
            type="text"
            variant="outlined"
          />
        </Box>

        <Box>
          <Typography
            variant="h3"
            sx={{ marginLeft: "70px", marginBottom: "10px" }}
          >
            Email
          </Typography>

          <TextField
            sx={{ marginLeft: "70px", width: "250px" }}
            id="lname"
            name="lname"
            type="text"
            variant="outlined"
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          marginTop: "40px",
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{ width: "150px", height: "50px" }}
          color="success"
        >
          Add
        </Button>

        <Button
          variant="contained"
          sx={{ marginLeft: "80px", width: "150px", height: "50px" }}
          color="error"
        >
          Delete
        </Button>

        <Button
          variant="contained"
          sx={{ marginLeft: "80px", width: "150px", height: "50px" }}
          color="warning"
        >
          Modify
        </Button>
      </Box>
    </Box>
  );
}

Users.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
