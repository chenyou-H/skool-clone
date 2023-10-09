import React from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import SkoolRulesContent from "./SkoolRulesContent";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: "1.5",
      fontSize: "28px",
      margin: "16px 0 16px 0",
    },
    h2: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: "1.5",
      fontSize: "20px",
      margin: "16px 0 16px 0",
    },
    h3: {
      display: "block",
      fontSize: "1.17em",
      fontWeight: "bold",
      margin: "16px 0 16px 0",
    },
    body1: {
      margin: "16px 0 16px 0",
    },
  },
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          listStyleType: "disc",
          padding: "0 0 0 40px",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          display: "list-item",
          padding: "0",
          lineHeight: "1.5",
        },
      },
    },
  },
});

export default function LegalContentContainer() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "white" }}>
        <Paper sx={{ padding: "32px" }}>
          {/* <SkoolRulesContent /> */}
          <PrivacyPolicyContent />
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
