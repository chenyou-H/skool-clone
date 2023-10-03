import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";

import { EntryRelatedPageTitle } from "./shared";

const CheckCircleSharpIconSizeStyles = {
  height: " 20px",
  width: "20px",
  padding: " 0px",
};

const iconBlue = "rgb(46, 110, 245)";
const iconRed = "rgb(231, 76, 60)";
const iconYellow = "rgb(248, 212, 129)";
const iconGreen = "rgb(0, 158, 93)";

export default function PricingCard() {
  return (
    <Card sx={{ margin: "56px 0px 0px 0px" }}>
      <CardContent>
        <EntryRelatedPageTitle variant="subtitle">
          $99/month
        </EntryRelatedPageTitle>
        <div>
          <CheckCircleSharpIcon
            sx={{
              ...CheckCircleSharpIconSizeStyles,
              color: iconBlue,
            }}
          />
          <Typography>1 group</Typography>
          <CheckCircleSharpIcon
            sx={{
              ...CheckCircleSharpIconSizeStyles,
              color: iconRed,
            }}
          />
          <Typography>All features</Typography>
          <CheckCircleSharpIcon
            sx={{
              ...CheckCircleSharpIconSizeStyles,
              color: iconYellow,
            }}
          />
          <Typography>Unlimited courses</Typography>
          <CheckCircleSharpIcon
            sx={{
              ...CheckCircleSharpIconSizeStyles,
              color: iconGreen,
            }}
          />
          <Typography>Unlimited members</Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button>START 14-DAY FREE TRIAL</Button>
      </CardActions>
    </Card>
  );
}
