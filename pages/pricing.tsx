import React from "react";
import {
  EntryRelatedPageContainer,
  EntryRelatedPageTitle,
  EntryRelatedPageDescription,
  PricingCard,
} from "@/components/EntryRelatedPages";
import PageHead from "@/components/shared/PageHead";

export default function Pricing() {
  // Page metadata
  const headTitle = "Skool: Pricing";
  const headDescriptionContent =
    "Simple pricing. 1 plan with everything included. No hidden fees. Get started with a 14-day free trial. Cancel anytime.";

  return (
    <>
      <PageHead title={headTitle} content={headDescriptionContent} />
      <EntryRelatedPageContainer>
        <EntryRelatedPageTitle>Simple pricing</EntryRelatedPageTitle>
        <EntryRelatedPageDescription>
          1 plan with everything included. No hidden fees.
          <br /> Get started with a 14-day free trial. Cancel anytime.
        </EntryRelatedPageDescription>
        <PricingCard />
      </EntryRelatedPageContainer>
    </>
  );
}
