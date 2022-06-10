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
          src="/assets/svg/box.svg"
          alt="Dashboard Image"
          width={40}
          height={40}
        />
        <Typography variant="h1" sx={{ marginLeft: "12px" }}>
          Products
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
                Product Details
              </Typography>
              <Table
                sx={{ maxWidth: "700", border: "2px solid black" }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead sx={{ border: "2px solid black" }}>
                  <TableRow>
                    <TableCell align="center"> Product ID</TableCell>
                    <TableCell align="center"> Product Name</TableCell>
                    <TableCell align="center"> Price</TableCell>
                    <TableCell align="center"> Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ border: "2px solid black" }}>
                  <TableCell align="center"> 001 </TableCell>
                  <TableCell align="center"> Hansel </TableCell>
                  <TableCell align="center"> 48 </TableCell>
                  <TableCell align="center"> 30 </TableCell>
                </TableBody>
                <TableBody sx={{ border: "2px solid black" }}>
                  <TableCell align="center"> 002 </TableCell>
                  <TableCell align="center"> Rebisco </TableCell>
                  <TableCell align="center"> 48 </TableCell>
                  <TableCell align="center"> 25 </TableCell>
                </TableBody>
                <TableBody sx={{ border: "2px solid black" }}>
                  <TableCell align="center"> 003 </TableCell>
                  <TableCell align="center"> Magic Flakes </TableCell>
                  <TableCell align="center"> 35 </TableCell>
                  <TableCell align="center"> 38 </TableCell>
                </TableBody>
                <TableBody sx={{ border: "2px solid black" }}>
                  <TableCell align="center"> 004 </TableCell>
                  <TableCell align="center"> Combi </TableCell>
                  <TableCell align="center"> 45 </TableCell>
                  <TableCell align="center"> 40 </TableCell>
                </TableBody>
                <TableBody>
                  <TableCell align="center"> 005 </TableCell>
                  <TableCell align="center"> Fita </TableCell>
                  <TableCell align="center"> 56 </TableCell>
                  <TableCell align="center"> 30 </TableCell>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{ marginLeft: "70px", marginBottom: "10px" }}
          >
            Product ID
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
            Product Name
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
            Price
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
            Quantity
          </Typography>

          <TextField
            sx={{ marginLeft: "70px" }}
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
        <Button variant="contained" sx={{ width: "100px" }} color="success">
          Add
        </Button>

        <Button
          variant="contained"
          sx={{ marginLeft: "80px", width: "100px" }}
          color="error"
        >
          Delete
        </Button>

        <Button
          variant="contained"
          sx={{ marginLeft: "80px", width: "100px" }}
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
