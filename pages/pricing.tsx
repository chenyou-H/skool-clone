import React from "react";

import {
  EntryRelatedPagePageHead,
  EntryRelatedPageContainer,
  EntryRelatedPageTitle,
  EntryRelatedPageDescription,
} from "@/components/EntryRelatedPages";
import { PricingCard } from "@/components/EntryRelatedPages/PricingCard";

export default function Pricing() {
  const headTitle = "Skool: Pricing";
  const headDescriptionContent =
    "Simple pricing. 1 plan with everything included. No hidden fees. Get started with a 14-day free trial. Cancel anytime.";
  return (
    <>
      <EntryRelatedPagePageHead
        title={headTitle}
        content={headDescriptionContent}
      />
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
