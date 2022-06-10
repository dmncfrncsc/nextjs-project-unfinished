import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Snackbar,
  Alert,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";

import global from "../styles/global";
import Head from "next/head";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();

  const initialState = {
    email: "",
    pass: "",
  };

  const [state, setState] = useState(initialState);

  const messageInitialState = {
    text: "",
    severity: "success",
  };
  const [message, setMessage] = useState(messageInitialState);
  const [open, setOpen] = useState(false);

  const handleChange = (prop) => (e) => {
    setState((prevItem) => ({
      ...prevItem,
      [prop]: e.target.value,
    }));
    console.log(state);
  };

  const signIn = () => {
    const admin = "admin@email.com";
    const password = "admin123";
    const user = "user@email.com";
    const userpass = "user123";

    if (state.email == admin && state.pass == password) {
      setMessage({
        text: "Log in Successful!",
        severity: "success",
      });
      setOpen(true);
      router.push("/dashboard");
    } else if (state.email == user && state.pass == userpass) {
      setMessage({
        text: "Log in Successful!",
        severity: "success",
      });
      setOpen(true);
      router.push("/pos");
    } else if (state.email == "" || state.pass == "") {
      setMessage({
        text: "Please fill up the fields!",
        severity: "error",
      });
      setOpen(true);
    } else {
      setMessage({
        text: "Wrong email or Password!",
        severity: "error",
      });
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Head>
        <title>Log in</title>
        <link rel="icon" href="/assets/images/MHS Logo.png" />
      </Head>
      <AppBar>
        <Toolbar>
          <Typography variant="h2" sx={{ marginLeft: "10px" }}>
            MHS FRONT RUNNER ENTERPRISES INCORPORATED
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ marginTop: "50px" }}>
        <Image
          src={"/assets/images/MHS Logo.png"}
          width={"250px"}
          height={"250px"}
        />
      </Box>
      <Box>
        <Typography variant="h2">Sign in</Typography>
      </Box>
      <Paper
        elevation={6}
        sx={{
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          marginTop: "12px",
        }}
      >
        <TextField
          id="email"
          name="email"
          label="Email address"
          type="email"
          variant="outlined"
          onChange={handleChange("email")}
        />
        <TextField
          id="pass"
          name="pass"
          label="Password"
          type="password"
          variant="outlined"
          sx={{ marginTop: "14px" }}
          onChange={handleChange("pass")}
        />

        <Button
          variant="contained"
          sx={{ ...global.button1, marginTop: "14px" }}
          onClick={signIn}
        >
          SIGN IN
        </Button>
      </Paper>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={message.severity}
          sx={{ width: "100%" }}
        >
          {message.text}
        </Alert>
      </Snackbar>
    </Box>
  );
}
