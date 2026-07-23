import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#0A2947", dark: "#061d33", light: "#e8f0f7" },
    secondary: { main: "#f4b400", dark: "#c78f00" },
    background: { default: "#f6f8fb", paper: "#ffffff" },
    text: { primary: "#172b3a", secondary: "#5e6c7b" },
  },
  typography: {
    fontFamily: '"Roboto", "Segoe UI", sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.04em" },
    h2: { fontWeight: 800, letterSpacing: "-0.03em" },
    h3: { fontWeight: 800, letterSpacing: "-0.025em" },
    h4: { fontWeight: 750, letterSpacing: "-0.02em" },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 9, fontWeight: 700, textTransform: "none" },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { border: "1px solid rgba(10, 41, 71, 0.08)" },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { border: "1px solid rgba(10, 41, 71, 0.08)", boxShadow: "0 8px 24px rgba(16, 42, 67, 0.08)" },
      },
    },
    MuiTextField: {
      defaultProps: { variant: "outlined" },
    },
  },
});

export default theme;
