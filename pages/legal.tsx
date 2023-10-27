import React, { useState } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
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
  AcceptableContent,
  Navigator,
} from "@/components/EntryRelatedPages";

const title = "Skool policies";
const content =
  "Skool is a platform where people learn together online. Courses + community + chat. Join now for free!";

// Define a type for legalContentMap
interface LegalContentMap {
  [key: string]: React.ReactNode;
}

const legalContentMap: LegalContentMap = {
  rules: <SkoolRulesContent />,
  privacy: <PrivacyPolicyContent />,
  terms: <TermsContent />,
  cookies: <CookieContent />,
  transaction: <TransactionContent />,
  "acceptable-use": <AcceptableContent />,
};

const legalContentDefault = <SkoolRulesContent />; // Set a default content

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query;
  return { props: { query } };
};

export default function Legal({
  query,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [btnSelected, setBtnSelected] = useState(
    findCurrentContentIndexByT(query.t)
  );

  const currentContent = legalContentMap[query.t] || legalContentDefault;

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

const findCurrentContentIndexByT = (param: string | undefined) => {
  switch (param) {
    case "rules":
      return 0;
    case "privacy":
      return 1;
    case "terms":
      return 2;
    case "cookies":
      return 3;
    case "transaction":
      return 4;
    case "acceptable-use":
      return 5;
    default:
      return 0;
  }
};
