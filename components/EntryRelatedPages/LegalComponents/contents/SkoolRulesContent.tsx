import React from "react";

import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function SkoolRulesContent() {
  return (
    <section>
      <section>
        <Typography variant="h1">Skool rules</Typography>
        <Typography>
          This policy is a &quot;living&quot; document, and subject to
          refinement and expansion in the future.
        </Typography>
        <Typography>
          Skool is dedicated to providing a harassment-free experience for
          everyone, regardless of gender, gender identity and expression, sexual
          orientation, disability, physical appearance, body size, age, race, or
          religion. We do not tolerate harassment of members in any form.
        </Typography>
        <Typography>
          This code of conduct applies to all Skool groups, including our
          community, both online and off. Anyone who violates this code of
          conduct may be sanctioned or expelled from these groups at the
          discretion of the Skool team.
        </Typography>{" "}
        <Typography>
          Some Skool groups may have additional rules in place, which will be
          made clearly available to members. Members are responsible for knowing
          and abiding by these rules.
        </Typography>
      </section>
      <section>
        <Typography variant="h2">Definitions</Typography>

        <Typography>Harassment includes:</Typography>

        {/* <StyledList> */}
        <List>
          <ListItem>
            <ListItemText>
              Offensive comments related to gender, gender identity and
              expression, sexual orientation, disability, mental illness,
              neuro(a)typicality, physical appearance, body size, age, race, or
              religion.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Unwelcome comments regarding a person’s lifestyle choices and
              practices, including those related to food, health, parenting,
              drugs, and employment.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Deliberate misgendering or use of &#39;dead’ or rejected names.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Gratuitous or off-topic sexual images or behaviour in spaces where
              they’re not appropriate.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Physical contact and simulated physical contact (eg, textual
              descriptions like “*hug*” or “*backrub*”) without consent or after
              a request to stop.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Threats of violence.</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Incitement of violence towards any individual, including
              encouraging a person to commit suicide or to engage in self-harm.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Deliberate intimidation.</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Stalking or following.</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Harassing photography or recording, including logging online
              activity for harassment purposes.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Sustained disruption of discussion.</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Unwelcome sexual attention.</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Pattern of inappropriate social contact, such as
              requesting/assuming inappropriate levels of intimacy with others
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Continued one-on-one communication after requests to cease.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Deliberate “outing” of any aspect of a person’s identity without
              their consent except as necessary to protect vulnerable people
              from intentional abuse.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Publication of non-harassing private communication.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Skool prioritizes marginalized people’s safety over privileged
              people’s comfort. The Skool team reserves the right not to act on
              complaints regarding:
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              ‘Reverse’ -isms, including ‘reverse racism,’ ‘reverse sexism,’ and
              ‘cisphobia’
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Reasonable communication of boundaries, such as “leave me alone,”
              “go away,” or “I’m not discussing this with you.”
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Communicating in a ‘tone’ you don’t find congenial
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Criticizing racist, sexist, cis sexist, or otherwise oppressive
              behavior or assumptions
            </ListItemText>
          </ListItem>
          {/* </StyledList> */}
        </List>
      </section>
      <Typography variant="h2">Reporting</Typography>
      <Typography>
        If you are being harassed by a member of Skool, notice that someone else
        is being harassed, or have any other concerns, please contact the Skool
        team at help@skool.com. If the person who is harassing you is on the
        team, they will recuse themselves from handling your incident. We will
        respond as promptly as we can.
      </Typography>
      <Typography>
        This code of conduct applies to Skool spaces, but if you are being
        harassed by a member of Skool outside our spaces, we still want to know
        about it. We will take all good-faith reports of harassment by Skool
        members seriously. This includes harassment outside our spaces and
        harassment that took place at any point in time. The abuse team reserves
        the right to exclude people from Skool based on their past behavior,
        including behavior outside Skool spaces and behavior towards people who
        are not in Skool.
      </Typography>
      <Typography>
        In order to protect volunteers from abuse and burnout, we reserve the
        right to reject any report we believe to have been made in bad faith.
        Reports intended to silence legitimate criticism may be deleted without
        response.
      </Typography>
      <Typography>
        We will respect confidentiality requests for the purpose of protecting
        victims of abuse. At our discretion, we may publicly name a person about
        whom we’ve received harassment complaints, or privately warn third
        parties about them, if we believe that doing so will increase the safety
        of Skool members or the general public. We will not name harassment
        victims without their affirmative consent.
      </Typography>
      <Typography variant="h2">Consequences</Typography>
      <Typography>
        Members asked to stop any harassing behavior are expected to comply
        immediately.
      </Typography>
      <Typography>
        If a participant engages in harassing behavior, the Skool team may take
        any action they deem appropriate, up to and including expulsion from all
        Skool groups and identification of the participant as a harasser to
        other Skool members or the general public.
      </Typography>
      <Typography variant="h2">Diversity</Typography>
      <Typography>
        Skool welcomes and encourages participation by everyone. No matter how
        you identify yourself or how others perceive you: we welcome you. We
        welcome contributions from everyone as long as they interact
        constructively with our communities.
      </Typography>{" "}
    </section>
  );
}
