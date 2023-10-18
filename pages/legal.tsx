import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import PageHead from "@/components/shared/PageHead";
import {
  LegalContentContainer,
  SideTabs,
  SkoolRulesContent,
  PrivacyPolicyContent,
  TermsContent,
  CookieContent,
  TransactionContent,
  AccetableContent,
  Navigator,
} from "@/components/EntryRelatedPages";

const title = "Skool policies";
const content =
  "Skool is a platform where people learn together online. Courses + community + chat. Join now for free!";

export const getServerSideProps = async (context) => {
  const query = context.query;
  // console.log("query: ", query);
  return { props: { query } };
};

export default function Legal({ query }) {
  const [btnSelected, setBtnSelected] = useState(
    findCurrentContentIndexByT(query.t)
  );

  let currentContent = findCurrentContentByT(query.t);

  const handleClickButton = (newValue: number) => {
    setBtnSelected(newValue);
  };

  return (
    <>
      <PageHead title={title} content={content} />
      <Box sx={{ backgroundColor: "#F8F7F5" }}>
        <Navigator />
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={4} sx={{ overflow: "clip" }}>
              <SideTabs
                btnSelected={btnSelected}
                handleClickButton={handleClickButton}
              />
            </Grid>
            <Grid item xs={8}>
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

const findCurrentContentIndexByT = (param: string | undefined) => {
  let currentContent = null;
  switch (param) {
    case "rules":
      currentContent = 0;
      break;
    case "privacy":
      currentContent = 1;
      break;
    case "terms":
      currentContent = 2;
      break;
    case "cookies":
      currentContent = 3;
      break;
    case "transaction":
      currentContent = 4;
      break;
    case "acceptable-use":
      currentContent = 5;
      break;

    default:
      currentContent = 1;
  }
  return currentContent;
};
