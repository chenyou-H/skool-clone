import React from "react";
import Stack from "@mui/material/Stack";

import { AffiliateCardContainer } from ".";

const steps = [
  {
    id: 1,
    title: "1. Share your link",
    description:
      "Share your referral link with your friends, followers, or customers.",
    imgUrl: "/affiliateStep1.png",
  },
  {
    id: 2,
    title: "2. Somebody signs up",
    description:
      "When your friend signs up for Skool, they will be attributed to you.",
    imgUrl: "/affiliateStep2.png",
  },
  {
    id: 3,
    title: "3. Earn 40% commission",
    description: "You'll earn 40% of their monthly subscription fee for life.",
    imgUrl: "/affiliateStep3.png",
  },
];

export default function AffiliateStepList() {
  return (
    <Stack direction="row" spacing={4} sx={{ margin: "64px 0 0 0" }}>
      {steps.map((step) => (
        <AffiliateCardContainer key={step.id} {...step} />
      ))}
    </Stack>
  );
}
