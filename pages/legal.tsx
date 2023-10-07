import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import PageHead from "@/components/shared/PageHead";
import {
  LegalContentContainer,
  SideList,
} from "@/components/EntryRelatedPages/LegalComponents";

const title = "Skool policies";
const content =
  "Skool is a platform where people learn together online. Courses + community + chat. Join now for free!";

export default function legal() {
  return (
    <>
      <PageHead title={title} content={content} />
      <Box sx={{ backgroundColor: "#F8F7F5" }}>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={4} sx={{ overflow: "clip" }}>
              <SideList />
            </Grid>
            <Grid item xs={8}>
              <LegalContentContainer />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
