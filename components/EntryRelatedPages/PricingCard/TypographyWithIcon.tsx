import React from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import { styled } from "@mui/material/styles";

const StyledCheckCircleIcon = styled(CheckCircleSharpIcon)({
  height: " 25px",
  width: "25px",
  padding: " 0",
});

export default function TypographyWithIcon({ iconColor, children }) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <StyledCheckCircleIcon sx={{ color: iconColor }} />
      <Typography>{children}</Typography>
    </Stack>
  );
}
