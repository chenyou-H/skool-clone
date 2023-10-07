import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";

const StyledListItem = styled(ListItem)({
  display: "list-item",
  padding: "0",
});

const StyledList = styled(List)({
  listStyleType: "disc",
  padding: "0 0 0 40px",
});

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: "1.5",
      fontSize: "28px",
      margin: "16px 0 16px 0",
    },
    h2: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: "1.5",
      fontSize: "20px",
      margin: "16px 0 16px 0",
    },
    body1: {
      margin: "16px 0 16px 0",
    },
  },
});

export default function SkoolRulesContent() {
  return (
    <ThemeProvider theme={theme}>
      <section>
        <section>
          <Typography variant="h1">Skool rules</Typography>
          <Typography>
            This policy is a "living" document, and subject to refinement and
            expansion in the future.
          </Typography>
          <Typography>
            Skool is dedicated to providing a harassment-free experience for
            everyone, regardless of gender, gender identity and expression,
            sexual orientation, disability, physical appearance, body size, age,
            race, or religion. We do not tolerate harassment of members in any
            form.
          </Typography>
          <Typography>
            This code of conduct applies to all Skool groups, including our
            community, both online and off. Anyone who violates this code of
            conduct may be sanctioned or expelled from these groups at the
            discretion of the Skool team.
          </Typography>{" "}
          <Typography>
            Some Skool groups may have additional rules in place, which will be
            made clearly available to members. Members are responsible for
            knowing and abiding by these rules.
          </Typography>
        </section>
        <section>
          <Typography variant="h2">Definitions</Typography>

          <Typography>Harassment includes:</Typography>

          <StyledList>
            <StyledListItem>
              <ListItemText>
                Offensive comments related to gender, gender identity and
                expression, sexual orientation, disability, mental illness,
                neuro(a)typicality, physical appearance, body size, age, race,
                or religion.
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <ListItemText>
                Unwelcome comments regarding a person’s lifestyle choices and
                practices, including those related to food, health, parenting,
                drugs, and employment.
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <ListItemText>
                Deliberate misgendering or use of 'dead’ or rejected names.
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <ListItemText>
                Gratuitous or off-topic sexual images or behaviour in spaces
                where they’re not appropriate.
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <ListItemText>
                Physical contact and simulated physical contact (eg, textual
                descriptions like “*hug*” or “*backrub*”) without consent or
                after a request to stop.
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <ListItemText>Threats of violence.</ListItemText>
            </StyledListItem>
            <StyledListItem>
              <ListItemText>
                Incitement of violence towards any individual, including
                encouraging a person to commit suicide or to engage in
                self-harm.
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <ListItemText>Deliberate intimidation.</ListItemText>
            </StyledListItem>
            <StyledListItem>
              <ListItemText>Stalking or following.</ListItemText>
            </StyledListItem>
            <StyledListItem>
              <ListItemText>
                Harassing photography or recording, including logging online
                activity for harassment purposes.
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <ListItemText>Sustained disruption of discussion.</ListItemText>
            </StyledListItem>
            <StyledListItem>
              <ListItemText>Unwelcome sexual attention.</ListItemText>
            </StyledListItem>
            <StyledListItem>
              <ListItemText>
                Pattern of inappropriate social contact, such as
                requesting/assuming inappropriate levels of intimacy with others
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <ListItemText>
                Continued one-on-one communication after requests to cease.
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <ListItemText>
                Deliberate “outing” of any aspect of a person’s identity without
                their consent except as necessary to protect vulnerable people
                from intentional abuse.
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <ListItemText>
                Publication of non-harassing private communication.
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <ListItemText>
                Skool prioritizes marginalized people’s safety over privileged
                people’s comfort. The Skool team reserves the right not to act
                on complaints regarding:
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <ListItemText>
                ‘Reverse’ -isms, including ‘reverse racism,’ ‘reverse sexism,’
                and ‘cisphobia’
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <ListItemText>
                Reasonable communication of boundaries, such as “leave me
                alone,” “go away,” or “I’m not discussing this with you.”
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <ListItemText>
                Communicating in a ‘tone’ you don’t find congenial
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <ListItemText>
                Criticizing racist, sexist, cis sexist, or otherwise oppressive
                behavior or assumptions
              </ListItemText>
            </StyledListItem>
          </StyledList>
        </section>
        <Typography variant="h2">Reporting</Typography>
        <Typography>
          If you are being harassed by a member of Skool, notice that someone
          else is being harassed, or have any other concerns, please contact the
          Skool team at help@skool.com. If the person who is harassing you is on
          the team, they will recuse themselves from handling your incident. We
          will respond as promptly as we can.
        </Typography>
        <Typography>
          This code of conduct applies to Skool spaces, but if you are being
          harassed by a member of Skool outside our spaces, we still want to
          know about it. We will take all good-faith reports of harassment by
          Skool members seriously. This includes harassment outside our spaces
          and harassment that took place at any point in time. The abuse team
          reserves the right to exclude people from Skool based on their past
          behavior, including behavior outside Skool spaces and behavior towards
          people who are not in Skool.
        </Typography>
        <Typography>
          In order to protect volunteers from abuse and burnout, we reserve the
          right to reject any report we believe to have been made in bad faith.
          Reports intended to silence legitimate criticism may be deleted
          without response.
        </Typography>
        <Typography>
          We will respect confidentiality requests for the purpose of protecting
          victims of abuse. At our discretion, we may publicly name a person
          about whom we’ve received harassment complaints, or privately warn
          third parties about them, if we believe that doing so will increase
          the safety of Skool members or the general public. We will not name
          harassment victims without their affirmative consent.
        </Typography>
        <Typography variant="h2">Consequences</Typography>
        <Typography>
          Members asked to stop any harassing behavior are expected to comply
          immediately.
        </Typography>
        <Typography>
          If a participant engages in harassing behavior, the Skool team may
          take any action they deem appropriate, up to and including expulsion
          from all Skool groups and identification of the participant as a
          harasser to other Skool members or the general public.
        </Typography>
        <Typography variant="h2">Diversity</Typography>
        <Typography>
          Skool welcomes and encourages participation by everyone. No matter how
          you identify yourself or how others perceive you: we welcome you. We
          welcome contributions from everyone as long as they interact
          constructively with our communities.
        </Typography>{" "}
      </section>
    </ThemeProvider>
  );
}
