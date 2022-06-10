import { createTheme } from "@mui/material";
import { lineHeight } from "@mui/system";
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#388087",
    },
    secondary: {
      main: "#6fb3b8",
    },
    dashboard: {
      bg1: "#143F68",
      bg2: "#F55353",
      bg3: "#FEB139",
    },
    text: {
      t1: "#000",
      t2: "#fff",
    },
  },

  typography: {
    fontFamily: [
      "Open Sans",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),

    h1: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "30px",
      lineHeight: "40px",
    },
    h2: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px",
      lineHeight: "24px",
    },
    h3: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "20px",
    },
    h4: {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
    },
    h5: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "20px",
    },
    sh: {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "16px",
    },
    p: {
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "12px",
      lineHeight: "16px",
    },
  },
});

export default theme;
