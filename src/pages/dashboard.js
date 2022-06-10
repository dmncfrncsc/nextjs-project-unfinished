import React from "react";
import AdminLayout from "../components/AdminLayout";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Image from "next/image";
export default function Dashboard() {
  const style = {
    paper1: {
      padding: "24px",
      backgroundColor: (theme) => theme.palette.dashboard.bg1,
    },
    paper2: {
      padding: "24px",
      backgroundColor: (theme) => theme.palette.dashboard.bg2,
    },
    paper3: {
      padding: "24px",
      backgroundColor: (theme) => theme.palette.dashboard.bg3,
    },
    text1: {
      fontWeight: "700",
      color: (theme) => theme.palette.text.t2,
    },
  };

  return (
    <Box sx={{ padding: "0 24px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/assets/svg/dashboard.svg"
          alt="Dashboard Image"
          width={40}
          height={40}
        />
        <Typography variant="h1" sx={{ marginLeft: "12px" }}>
          Dashboard
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ marginTop: "12px" }}>
        <Grid item xs={12} sm>
          <Paper sx={style.paper1}>
            <Typography variant="h3" color={(theme) => theme.palette.text.t2}>
              Users
            </Typography>
            <Typography variant="h1" sx={style.text1}>
              03
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm>
          <Paper sx={style.paper2}>
            <Typography variant="h3" color={(theme) => theme.palette.text.t2}>
              Products
            </Typography>
            <Typography variant="h1" sx={style.text1}>
              05
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm>
          <Paper sx={style.paper3}>
            <Typography variant="h3" color={(theme) => theme.palette.text.t2}>
              Product Low on Stock
            </Typography>
            <Typography variant="h1" sx={style.text1}>
              02
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Paper
          elevation={4}
          sx={{
            width: "50vw",
            height: "35vh",
            padding: "20px",
          }}
        >
          <Typography
            variant="h1"
            sx={{ textAlign: "center", marginBottom: "5px" }}
          >
            Recent Transactions
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
              </TableRow>
            </TableHead>
            <TableBody sx={{ border: "2px solid black" }}>
              <TableCell align="center"> Hansel </TableCell>
              <TableCell align="center"> 5 </TableCell>
              <TableCell align="center"> 48 </TableCell>
              <TableCell align="center"> 240 </TableCell>
            </TableBody>
            <TableBody sx={{ border: "2px solid black" }}>
              <TableCell align="center"> Rebisco </TableCell>
              <TableCell align="center"> 2 </TableCell>
              <TableCell align="center"> 48 </TableCell>
              <TableCell align="center"> 96 </TableCell>
            </TableBody>
            <TableBody sx={{ border: "2px solid black" }}>
              <TableCell align="center"> Magic Flakes </TableCell>
              <TableCell align="center"> 10 </TableCell>
              <TableCell align="center"> 35 </TableCell>
              <TableCell align="center"> 350 </TableCell>
            </TableBody>
            <TableBody sx={{ border: "2px solid black" }}>
              <TableCell align="center"> Combi </TableCell>
              <TableCell align="center"> 6 </TableCell>
              <TableCell align="center"> 45 </TableCell>
              <TableCell align="center"> 270 </TableCell>
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Box>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
