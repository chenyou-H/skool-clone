import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import PageHead from "@/components/shared/PageHead";
import {
  LegalContentContainer,
  // SideList,
  SideTabs,
  SkoolRulesContent,
  PrivacyPolicyContent,
  TermsContent,
  CookieContent,
  TransactionContent,
  AccetableContent,
} from "@/components/EntryRelatedPages";
// import SkoolRulesContent from "@/components/EntryRelatedPages/LegalComponents/contents/SkoolRulesContent";
// import PrivacyPolicyContent from "@/components/EntryRelatedPages/LegalComponents/contents/PrivacyPolicyContent";

// import { useRouter } from "next/router";
// import { useSearchParams } from "next/navigation";

const title = "Skool policies";
const content =
  "Skool is a platform where people learn together online. Courses + community + chat. Join now for free!";

export const getServerSideProps = async (context) => {
  const query = context.query;
  console.log("query: ", query);
  return { props: { query } };
};

export default function Legal({ query }) {
  const [value, setValue] = useState(0);

  let currentContent = findCurrentContentByT(query.t);

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
              {/* <LegalContentContainer value={value} index={0}>
                <SkoolRulesContent />
              </LegalContentContainer>
              <LegalContentContainer value={value} index={1}>
                <PrivacyPolicyContent />
              </LegalContentContainer> */}
              <LegalContentContainer>{currentContent}</LegalContentContainer>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

const findCurrentContentByT = (param: string | undefined) => {
  let currentContent = null;
  switch (param) {
    case "rules":
      currentContent = <SkoolRulesContent />;
      break;
    case "privacy":
      currentContent = <PrivacyPolicyContent />;
      break;
    case "terms":
      currentContent = <TermsContent />;
      break;
    case "cookies":
      currentContent = <CookieContent />;
      break;
    case "transaction":
      currentContent = <TransactionContent />;
      break;
    case "acceptable-use":
      currentContent = <AccetableContent />;
      break;

    default:
      currentContent = <SkoolRulesContent />;
  }
  return currentContent;
};
