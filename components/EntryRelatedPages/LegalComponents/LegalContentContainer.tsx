import React from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import SkoolRulesContent from "./SkoolRulesContent";

export default function LegalContentContainer() {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Paper sx={{ padding: "32px" }}>
        <SkoolRulesContent />
      </Paper>
    </Box>
  );
}
