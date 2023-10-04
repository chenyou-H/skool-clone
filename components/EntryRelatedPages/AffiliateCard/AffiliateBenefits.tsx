import React from "react";
import Grid from "@mui/material/Grid";

import { AffiliateCardContainer } from ".";

const benefits = [
  {
    id: 1,
    title: "💰  Your group earns money automatically",
    description:
      "If you have a group and one of your members creates a group — we'll attribute the referral to you automatically. This makes Skool an income stream, not a cost.",
  },
  {
    id: 2,
    title: "📣  Use our proven marketing swipe files",
    description:
      "Feeling lazy? We make it easy for you. Copy/paste social media posts, emails, high-quality graphics, and marketing materials proven to convert.",
  },
  {
    id: 3,
    title: "📚  Get free training on how to promote it",
    description:
      "Don't know where to begin? Learn best practices for promoting Skool and making money. We share the best methods we know so you can get up to speed fast!",
  },
  {
    id: 34,
    title: "👥  Join our affiliate community for support",
    description:
      "Need help, inspiration, or ideas? Join our affiliate community to collaborate with other affiliates, get support from our team, and stay up to date.",
  },
];

export default function AffiliateBenefits() {
  return (
    <Grid
      container
      rowSpacing={5}
      columnSpacing={8}
      sx={{ margin: "64px 0 0 0" }}
    >
      {benefits.map((benefit) => (
        <Grid item xs={6} key={benefit.id}>
          <AffiliateCardContainer {...benefit} />
        </Grid>
      ))}
    </Grid>
  );
}
