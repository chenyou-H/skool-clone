import React from "react";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import PageHead from "@/components/shared/PageHead";
import {
  LegalContentContainer,
  SideList,
  LegalPageContainer,
} from "@/components/EntryRelatedPages/LegalComponents";

const title = "Skool policies";
const content =
  "Skool is a platform where people learn together online. Courses + community + chat. Join now for free!";

export default function legal() {
  return (
    <>
      <PageHead title={title} content={content} />
      <LegalPageContainer>
        <main>
          <Grid container spacing={2} sx={{ backgroundColor: "#F8F7F5" }}>
            <Grid item xs={5} sx={{ overflow: "clip" }}>
              <SideList />
            </Grid>
            <Grid item xs={7}>
              <LegalContentContainer />
            </Grid>
          </Grid>
        </main>
      </LegalPageContainer>
    </>
  );
}
