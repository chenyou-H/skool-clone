import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";

import {
  EntryRelatedPagePageHead,
  EntryRealtedPageContainer,
} from "@/components/EntryRelatedPages";

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
      <EntryRealtedPageContainer>
        <>
          <h1>Simple pricing</h1>
          <p>1 plan with everything included. No hidden fees.</p>
          <p>Get started with a 14-day free trial. Cancel anytime.</p>
          <Card>
            <CardContent>
              <h1>$99/month</h1>
              <div>
                <Typography>
                  <CheckCircleSharpIcon />1 group
                </Typography>
                <Typography>
                  <CheckCircleSharpIcon />
                  All features
                </Typography>
                <Typography>
                  <CheckCircleSharpIcon />
                  Unlimited courses
                </Typography>
                <Typography>
                  <CheckCircleSharpIcon />
                  Unlimited members
                </Typography>
              </div>
            </CardContent>
            <CardActions>
              <Button>START 14-DAY FREE TRIAL</Button>
            </CardActions>
          </Card>
        </>
      </EntryRealtedPageContainer>
    </>
  );
}
