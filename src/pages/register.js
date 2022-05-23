import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import global from "../styles/global";
export default function SignIn() {
  const router = useRouter();

  const style = {
    linkStyle: {
      cursor: "pointer",
      color: "primary.main",
    },
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
      <Box>
        <Typography variant="h5">Create New Account</Typography>
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
        <TextField label="Email Address" name="email" type="email" />

        <TextField
          label="Password"
          type="password"
          name="password"
          sx={{ marginTop: "12px" }}
        />

        <TextField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          sx={{ marginTop: "12px" }}
        />

        <Button variant="contained" sx={{ ...global.button1, marginTop: "12px" }}>
          Register
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
            onClick={() => router.push("/sign-in")}
            sx={style.linkStyle}
          >
            Sign in
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
