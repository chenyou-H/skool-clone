//react components
import React from "react";

//mui components
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

// custom components
import { EntryRelatedPageTitle } from "../shared";
import TypographyWithIcon from "./TypographyWithIcon";

const StyledPriceCard = styled(Card)({
  margin: "24px 0px 0px 0px",
  padding: "40px 40px 40px 40px",
  width: "350px",
  boxShadow:
    "rgba(60, 64, 67, 0.32) 0px 1px 2px, rgba(60, 64, 67, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.1) 0px 1px 8px;",
  borderRadius: "10px",
});

const StyledButton = styled(Button)({
  backgroundColor: "rgb(248, 212, 129)",
  color: "rgb(32, 33, 36)",
  width: "270px",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "uppercase",
  cursor: "pointer",
  borderRadius: "4px",
  position: "relative",
  overflow: "hidden",
  gap: "8px",
  transition: "background-color 100ms ease 0s",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontWeight: "bold",
  fontStyle: "normal",
  fontSize: "16px",
  lineHeight: "1.5",
  height: "48px",
  padding: "0px 24px",
  margin: "32px 0 0 0",
  "&:hover": { backgroundColor: "rgb(241, 208, 124)" },
});

const iconBlue = "rgb(46, 110, 245)";
const iconRed = "rgb(231, 76, 60)";
const iconYellow = "rgb(248, 212, 129)";
const iconGreen = "rgb(0, 158, 93)";

export default function PricingCard() {
  return (
    <StyledPriceCard>
      <CardContent>
        <header>
          <EntryRelatedPageTitle variant="subtitle">
            $99/month
          </EntryRelatedPageTitle>
        </header>
        <main>
          <Stack spacing={1}>
            <TypographyWithIcon iconColor={iconBlue}>
              <b>1 </b> group
            </TypographyWithIcon>
            <TypographyWithIcon iconColor={iconRed}>
              <b>All</b> features
            </TypographyWithIcon>
            <TypographyWithIcon iconColor={iconYellow}>
              <b>Unlimited</b> courses
            </TypographyWithIcon>
            <TypographyWithIcon iconColor={iconGreen}>
              <b>Unlimited</b> members
            </TypographyWithIcon>
          </Stack>
        </main>
      </CardContent>
      <CardActions sx={{ padding: "0 0 0 0" }}>
        <StyledButton href="/signup">START 14-DAY FREE TRIAL</StyledButton>
      </CardActions>
    </StyledPriceCard>
  );
}
