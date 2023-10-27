import React from "react";

import Box from "@mui/material/Box";

import {
  EntryRelatedPageContainer,
  EntryRelatedPageTitle,
  EntryRelatedPageDescription,
} from "@/components/EntryRelatedPages";
import PageHead from "@/components/shared/PageHead";
import { PrimaryButton } from "@/components/shared";

export default function careers() {
  const headTitle = "Skool: Careers";
  const headDescriptionContent =
    "We're hiring! Come have fun helping us build Skool. See open positions.";
  return (
    <>
      <PageHead title={headTitle} content={headDescriptionContent} />
      <EntryRelatedPageContainer>
        <EntryRelatedPageTitle>Work for Skool</EntryRelatedPageTitle>
        <EntryRelatedPageDescription>
          Skool is home to a diverse group of engineers and designers - gamers
          and geeks.
          <br />
          <br /> We prioritize quality and take our time to make sure we get it
          just right, and we collaborate and work together to solve problems. We
          hire talented, driven people and provide them with the mentorship and
          coaching they need to grow. 80% of our team is remote, and 20% is
          in-person at our HQ in LA. We try to get everybody together a few
          times a year to eat good food, hang out, and play games. We like to
          have fun.
        </EntryRelatedPageDescription>
        <Box sx={{ width: "224px", margin: "0 0 180px 0" }}>
          {/* TODO: button link need to be modified later when the job website is implemented*/}
          <PrimaryButton href="/https://jobs.lever.co/skool">
            SEE OPEN POSITIONS
          </PrimaryButton>
        </Box>
      </EntryRelatedPageContainer>
    </>
  );
}
