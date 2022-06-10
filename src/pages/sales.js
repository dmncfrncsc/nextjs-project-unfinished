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

export default function Sales() {
  return (
    <Box sx={{ padding: "0 24px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/assets/svg/sales.svg"
          alt="Sales Image"
          width={40}
          height={40}
        />
        <Typography variant="h1" sx={{ marginLeft: "12px" }}>
          Sales
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
                Transaction History
              </Typography>
              <Table
                sx={{ maxWidth: "700", border: "2px solid black" }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead sx={{ border: "2px solid black" }}>
                  <TableRow>
                    <TableCell align="center"> Product Name</TableCell>
                    <TableCell align="center"> Quantity</TableCell>
                    <TableCell align="center"> Price</TableCell>
                    <TableCell align="center"> Total</TableCell>
                    <TableCell align="center"> Date Bought</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ border: "2px solid black" }}>
                  <TableCell align="center"> Hansel </TableCell>
                  <TableCell align="center"> 5 </TableCell>
                  <TableCell align="center"> 48 </TableCell>
                  <TableCell align="center"> 240 </TableCell>
                  <TableCell align="center"> June 8, 2022</TableCell>
                </TableBody>
                <TableBody sx={{ border: "2px solid black" }}>
                  <TableCell align="center"> Rebisco </TableCell>
                  <TableCell align="center"> 2 </TableCell>
                  <TableCell align="center"> 48 </TableCell>
                  <TableCell align="center"> 96 </TableCell>
                  <TableCell align="center"> June 9, 2022</TableCell>
                </TableBody>
                <TableBody sx={{ border: "2px solid black" }}>
                  <TableCell align="center"> Magic Flakes </TableCell>
                  <TableCell align="center"> 10 </TableCell>
                  <TableCell align="center"> 35 </TableCell>
                  <TableCell align="center"> 350 </TableCell>
                  <TableCell align="center"> June 10, 2022</TableCell>
                </TableBody>
                <TableBody sx={{ border: "2px solid black" }}>
                  <TableCell align="center"> Combi </TableCell>
                  <TableCell align="center"> 6 </TableCell>
                  <TableCell align="center"> 45 </TableCell>
                  <TableCell align="center"> 270 </TableCell>
                  <TableCell align="center"> June 10, 2022</TableCell>
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
            sx={{
              marginLeft: "70px",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            From
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
            sx={{
              marginLeft: "70px",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            To
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
          <Button
            variant="contained"
            sx={{
              marginLeft: "80px",
              width: "150px",
              height: "50px",
              marginTop: "25px",
            }}
            color="warning"
          >
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

Sales.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
