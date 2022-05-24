import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";

import global from "../styles/global";

const style = {
  linkStyle: {
    cursor: "pointer",
    color: "primary.main",
  },
};

export default function SignIn() {
  const router = useRouter();

  const initialState = {
    email: "",
    password: "",
  };

  const handleChange = (prop) => (e) => {
    setState((prevItem) => ({
      ...prevItem,
      [prop]: e.target.value,
    }));

    // console.log(state);
  };

  const [state, setState] = useState(initialState);
  const messageInitialState = {
    text: "",
    severity: "success",
  };
  const [message, setMessage] = useState(messageInitialState);
  const [open, setOpen] = useState(false);

  const gotoRegister = () => {
    router.push("/register");
  };

  const signIn = () => {
    const admin = "admin@email.com";
    const password = "admin";
    if (state.email === admin && state.password === password) {
      setMessage({
        text: "Logged in successful",
        severity: "success",
      });
      setOpen(true);
    } else {
      setMessage({
        text: "Wrong credentials",
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
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "Center",
        alignItems: "Center",
      }}
    >
      <Head>
        <title>Sign-in</title>
      </Head>
      <Box>
        <Typography variant="h5"> Please Sign In</Typography>
      </Box>
      <Paper
        elevation={3}
        sx={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          marginTop: "12px",
        }}
      >
        <TextField
          label="Email Address"
          name="email"
          type="email"
          onChange={handleChange("email")}
        />

        <TextField
          label="Password"
          type="password"
          name="password"
          sx={{ marginTop: "12px" }}
          onChange={handleChange("password")}
        />
        <Button 
        variant="contained" 
        sx={{ ...global.button1, marginTop: "12px" }} 
        onClick={signIn}>
          SIGN IN
        </Button>

        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            marginTop: "12px",
          }}
        >
          <Typography
            variant="subtitle2"
            onClick={gotoRegister}
            sx={style.linkStyle}
          >
            Create new account
          </Typography>
        </Box>
      </Paper>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
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
