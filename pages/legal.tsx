import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import PageHead from "@/components/shared/PageHead";
import {
  LegalContentContainer,
  SideList,
  SideTabs,
} from "@/components/EntryRelatedPages/LegalComponents";
import SkoolRulesContent from "@/components/EntryRelatedPages/LegalComponents/SkoolRulesContent";
import PrivacyPolicyContent from "@/components/EntryRelatedPages/LegalComponents/PrivacyPolicyContent";

const title = "Skool policies";
const content =
  "Skool is a platform where people learn together online. Courses + community + chat. Join now for free!";

export default function Legal() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <PageHead title={title} content={content} />
      <Box sx={{ backgroundColor: "#F8F7F5" }}>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={4} sx={{ overflow: "clip" }}>
              <SideTabs value={value} handleChange={handleChange} />
            </Grid>
            <Grid item xs={8}>
              <LegalContentContainer value={value} index={0}>
                <SkoolRulesContent />
              </LegalContentContainer>
              <LegalContentContainer value={value} index={1}>
                <PrivacyPolicyContent />
              </LegalContentContainer>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
