//react components
import React from "react";

//mui components
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";

// custom components
import { EntryRelatedPageTitle } from "../shared";
import TypographyWithIcon from "./TypographyWithIcon";
import { StyledPriceCard } from "./StyledComponents";
import { PrimaryButton } from "@/components/shared";

const ICON_COLORS = {
  blue: "rgb(46, 110, 245)",
  red: "rgb(231, 76, 60)",
  yellow: "rgb(248, 212, 129)",
  green: "rgb(0, 158, 93)",
};

export default function PricingCard() {
  return (
    <StyledPriceCard>
      <CardContent sx={{ padding: "0 0 0 0" }}>
        <header>
          <EntryRelatedPageTitle variant="subtitle">
            $99/month
          </EntryRelatedPageTitle>
        </header>
        <main>
          <Stack spacing={1}>
            <TypographyWithIcon iconColor={ICON_COLORS.blue}>
              <b>1 </b> group
            </TypographyWithIcon>
            <TypographyWithIcon iconColor={ICON_COLORS.red}>
              <b>All</b> features
            </TypographyWithIcon>
            <TypographyWithIcon iconColor={ICON_COLORS.yellow}>
              <b>Unlimited</b> courses
            </TypographyWithIcon>
            <TypographyWithIcon iconColor={ICON_COLORS.green}>
              <b>Unlimited</b> members
            </TypographyWithIcon>
          </Stack>
        </main>
      </CardContent>
      <CardActions sx={{ margin: "32px 0 0 0", padding: "0 0 0 0" }}>
        <PrimaryButton href="/signup">START 14-DAY FREE TRIAL</PrimaryButton>
      </CardActions>
    </StyledPriceCard>
  );
}
