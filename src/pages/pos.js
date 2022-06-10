import {
  AppBar,
  Box,
  Icon,
  Table,
  Toolbar,
  Typography,
  Paper,
  TableRow,
  TableHead,
  TableCell,
  Grid,
  Container,
  TableBody,
  TextField,
  Button,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Pos() {
  const router = useRouter();

  const gotologIn = () => {
    router.push("sign-in");
  };
  const style = {
    linkStyle: { cursor: "pointer", marginLeft: "590px" },
  };

  return (
    <Box>
      <Head>
        <title>POS System</title>
        <link rel="icon" href="/assets/images/MHS Logo.png" />
      </Head>
      <AppBar>
        <Toolbar>
          <Image
            src="/assets/images/MHS Logo.png"
            alt="MHS Logo"
            width={50}
            height={50}
          />
          <Typography variant="h2" sx={{ marginLeft: "10px" }}>
            MHS FRONT RUNNER ENTERPRISES INCORPORATED POS System
          </Typography>
          <Typography variant="h3" sx={style.linkStyle} onClick={gotologIn}>
            Sign out
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          width: "1600px",
          height: "400px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "0 80px",
          marginTop: "20px",
        }}
      >
        <Grid container spacing={4}>
          <Grid item sm>
            <Paper elevation={4} sx={{ padding: "20px" }}>
              <Typography
                variant="h2"
                sx={{ textAlign: "center", marginTop: "20px" }}
              >
                Order List
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
                    <TableCell align="center"> Sub-Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ border: "2px solid black" }}>
                  <TableCell align="center"> 001 </TableCell>
                  <TableCell align="center"> Hansel </TableCell>
                  <TableCell align="center"> 48 </TableCell>
                  <TableCell align="center"> 2 </TableCell>
                  <TableCell align="center"> 96 </TableCell>
                </TableBody>
                <TableBody>
                  <TableCell align="center"> 005 </TableCell>
                  <TableCell align="center"> Fita </TableCell>
                  <TableCell align="center"> 56 </TableCell>
                  <TableCell align="center"> 1 </TableCell>
                  <TableCell align="center"> 56 </TableCell>
                </TableBody>
              </Table>
            </Paper>
          </Grid>

          <Grid item sm>
            <Paper elevation={4} sx={{ padding: "20px" }}>
              <Typography
                variant="h2"
                sx={{ textAlign: "center", marginTop: "20px" }}
              >
                Product List
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

      {/* Total, Amount, Change, Delete, Confirm */}
      <Grid container>
        <Grid item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "80px",
            }}
          >
            <Box>
              <Typography variant="h3" sx={{ marginBottom: "10px" }}>
                Total
              </Typography>
              <TextField
                id="total"
                name="total"
                type="number"
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
              />
            </Box>

            <Button
              variant="contained"
              sx={{ marginLeft: "80px", width: "100px" }}
              color="error"
            >
              Delete
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "80px",
            }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{ marginBottom: "10px", marginTop: "10px" }}
              >
                Amount
              </Typography>
              <TextField id="amt" name="amt" type="amount" variant="outlined" />
            </Box>

            <Button
              variant="contained"
              sx={{ marginLeft: "80px", width: "100px" }}
              color="success"
            >
              Confirm
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "80px",
            }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{ marginBottom: "10px", marginTop: "10px" }}
              >
                Change
              </Typography>
              <TextField
                id="change"
                name="change"
                type="number"
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
              />
            </Box>
          </Box>
        </Grid>

        {/* P Code, P Price, Add */}
        <Grid item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "120px",
            }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{
                  marginBottom: "10px",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Product Code
              </Typography>
              <TextField
                id="pcode"
                name="pcode"
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "120px",
            }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{
                  marginBottom: "10px",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Product Price
              </Typography>
              <TextField
                id="pprice"
                name="pprice"
                type="amount"
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "40px",
            }}
          >
            <Button
              variant="contained"
              sx={{ marginLeft: "80px", width: "215px", marginTop: "35px" }}
              color="success"
            >
              Add
            </Button>
          </Box>
        </Grid>

        {/* Search */}
        <Grid item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "120px",
            }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                Search
              </Typography>
              <TextField
                id="search"
                name="search"
                type="text"
                variant="outlined"
                sx={{ width: "250px" }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "40px",
            }}
          >
            <Button
              variant="contained"
              sx={{ marginLeft: "80px", width: "250px", marginTop: "35px" }}
              color="warning"
            >
              Search
            </Button>
          </Box>
        </Grid>

        {/* P Name, Quantity, Clear */}
        <Grid item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "80px",
            }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{
                  marginBottom: "10px",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Product Name
              </Typography>
              <TextField
                id="pname"
                name="pname"
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "80px",
            }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{
                  marginBottom: "10px",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Quantity
              </Typography>
              <TextField id="qty" name="qty" type="amount" variant="outlined" />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{ marginLeft: "80px", width: "215px", marginTop: "35px" }}
            >
              Confirm
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
