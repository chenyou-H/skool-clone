import React from "react";

import Box from "@mui/material/Box";

import {
  EntryRelatedPageContainer,
  EntryRelatedPageTitle,
  EntryRelatedPageDescription,
} from "@/components/EntryRelatedPages";
import PageHead from "@/components/shared/PageHead";
import { PrimaryButton } from "@/components/shared";
import { AffiliateCardContainer } from "@/components/EntryRelatedPages/AffiliateCard";

export default function affiliateProgram() {
  const headTitle = "Skool: Affiliate Program";
  const headDescriptionContent =
    "Refer people to Skool and earn 40% of MRR for life!";

  const cardTitle = "1. Share your link";
  const cardDescriotion =
    "Share your referral link with your friends, followers, or customers.";

  return (
    <>
      <PageHead title={headTitle} content={headDescriptionContent} />
      <EntryRelatedPageContainer>
        <EntryRelatedPageTitle>
          Earn 40% of recurring revenue
        </EntryRelatedPageTitle>
        <EntryRelatedPageDescription>
          Refer people to Skool and earn 40% of monthly recurring revenue for
          life.
          <br />
          If somebody creates a group from your group, we attribute it to you
          automatically.
        </EntryRelatedPageDescription>
        <Box sx={{ width: "224px" }}>
          {/* todo: button link need to be modified later when the job website is implemented*/}
          <PrimaryButton href="/affiliates">BECOME AN AFFILAITE</PrimaryButton>
        </Box>
        <AffiliateCardContainer
          title={cardTitle}
          descripton={cardDescriotion}
          imgUrl={"/affiliateStep1.png"}
        />
      </EntryRelatedPageContainer>
    </>
  );
}
