import React from "react";

import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)({
  borderBottom: "none",
  borderLeft: "solid white",
  borderRight: "solid white",
});

export default function CookieContent() {
  return (
    <div>
      <Typography variant="h1">SKOOL.COM, INC COOKIE POLICY</Typography>
      <Typography>
        To make this site work properly, we sometimes place small data files
        called cookies on your device. A cookie is a small text file that a
        website saves on your computer or mobile device when you visit the site.
        It enables the website to remember your actions and preferences (such as
        login, language, or other preferences) over a period of time, so you do
        not have to keep re-entering them whenever you come back to the site or
        browse from one page to another.
      </Typography>
      <Typography variant="h2">Cookies on www.skool.com</Typography>
      <Typography>
        The following table sets out the different categories of cookies that
        our site uses, and why we use them. The lists of third-party cookie
        providers are intended merely as illustrative and should not be viewed
        as a comprehensive list.
      </Typography>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell
                align="center"
                sx={{ background: " rgb(228, 228, 228)" }}
              >
                <b>Type of Cookie</b>
              </StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{ background: " rgb(228, 228, 228)" }}
              >
                <b>Purpose</b>
              </StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{ background: " rgb(228, 228, 228)" }}
              >
                <b>Who serves</b>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell>Strictly Necessary</StyledTableCell>
              <StyledTableCell>
                These cookies are essential to enable your use of the site or
                services, and are used to help make our website work efficiently
                and provide services you have asked for.
              </StyledTableCell>
              <StyledTableCell>
                <List>
                  <ListItem>
                    <Link underline="none" href="/">
                      Skool.com
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      underline="none"
                      href="https://aws.amazon.com/legal/cookies/"
                    >
                      Amazon Web Services
                    </Link>
                  </ListItem>
                </List>
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>Functionality</StyledTableCell>
              <StyledTableCell>
                These cookies help to enhance your experience by remembering
                choices you have made concerning the features of the website.
                For example, they allow you to view videos on our site and
                services and remember your video viewing preferences.
              </StyledTableCell>
              <StyledTableCell>
                <List>
                  <ListItem>
                    <Link
                      underline="none"
                      href="https://vimeo.com/cookie_policy"
                    >
                      Vimeo
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      underline="none"
                      href="https://policies.google.com/technologies/cookies?hl=en"
                    >
                      YouTube (Google)
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      underline="none"
                      href="https://www.loom.com/privacy-policy"
                    >
                      Loom
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      underline="none"
                      href="https://wistia.com/privacy#b-information-collected-automatically"
                    >
                      Wistia
                    </Link>
                  </ListItem>
                </List>
              </StyledTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h2">Cookies and You</Typography>
      <Typography>
        To sign up for an account, you must have cookies enabled on your
        internet browser. If you choose not to enable cookies, you will still be
        able to browse our website, but it may restrict some of the
        functionality of our website or what you can do.
      </Typography>
      <Typography variant="h2">Controlling your cookies</Typography>
      <Typography>
        You can control cookies in your browser to enable or disable them. If
        you wish to restrict or block the cookies which are set by any website,
        you should do this through the web browser settings for each web browser
        you use, on each device you use to access the internet.
      </Typography>
      <Typography>
        You can also manage many companies’ cookies used for online advertising
        via the consumer choice tools created under self-regulation programs in
        many countries, such as the US-based
        <Link underline="none" href="https://optout.aboutads.info/?c=2&lang=EN">
          {" "}
          aboutads.info{" "}
        </Link>
        choices page or the EU-based{" "}
        <Link
          underline="none"
          href="https://www.youronlinechoices.com/uk/your-ad-choices"
        >
          Your Online Choices.
        </Link>{" "}
      </Typography>
    </div>
  );
}
